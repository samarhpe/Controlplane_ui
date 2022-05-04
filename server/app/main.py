from kubernetes import client, config
#from .lib import lib
import os
from kubernetes.client.rest import ApiException
# Configs can be set in Configuration class directly or using helper utility
k3sfilepath=os.path.join(os.path.dirname(os.path.abspath(__file__)),'minikube_kubeconfig.yaml')
#config.load_kube_config(config_file=r"./server/app/k3s.yaml")
config.load_kube_config(config_file=k3sfilepath)
v1 = client.CoreV1Api()
v2 = client.AppsV1Api()

def list_namespaced_deployment(con, ns):
    ret = con.list_namespaced_deployment(ns)
    #print("These are the deployments in namespace "+ ns+'\n')
    for i in ret.items:
        #print(i.metadata.name) 
        read_pods_in_ns(con, ns, i.metadata.name)

def read_pods_in_ns(con, ns, name):
    ret = con.read_namespaced_deployment(name, ns, pretty='pretty')
    for i in ret.spec.template.spec.containers:
        print(i.image + "\n")
def find_indstatus(cont):
    state=cont.state
    if(state.running!=None and (state.terminated==None and (state.waiting==None))):
        return ['running',1]
    elif(state.running==None and (state.terminated==None and (state.waiting!=None))):
        return ['waiting',state.waiting.reason]
    else:
        return ['terminated',0]

def find_status(conts):
    n=len(conts)
    runcount=0
    ccreatingcount=0
    termcount=0
    for i in range(n):
        ind_status,reason=find_indstatus(conts[i])
        if(ind_status=='waiting' and (reason!='ContainerCreating')):
            return reason
        elif(ind_status=='waiting' and reason=='ContainerCreating'):
            ccreatingcount+=1
        elif(ind_status=='terminated'):
            termcount+=1
        elif(ind_status=='running'):
            runcount+=1
    if(termcount>0):
        return 'Terminating'
    elif(ccreatingcount>0):
        return 'ContainerCreating'
    elif(runcount==n):
        return 'Running'
    else:
        return 'Unknown'
def list_conts_in_pod(con,ns,pod):
    op=con.read_namespaced_pod(pod,ns)
    conts=[]
    for container in op.spec.containers:
        #print('Container: ',container.name)
        conts.append(container.name)
    return conts


def list_pod_in_ns(con, ns):
    #print("Listing pods with their IPs:")
    ret = con.list_namespaced_pod(watch=False, namespace=ns)
    podsns=[]
    for i in ret.items:
        
        images=[]
        conts=i.status.container_statuses
        for cont in conts:
            images.append(cont.image)
        status=find_status(conts)
        #print("%s\t%s\t%s\t%s" % (i.status.pod_ip, i.metadata.namespace, i.metadata.name,status))
        podsns.append({'pod_namespace':i.metadata.namespace,'pod_ip':i.status.pod_ip,'pod_name':i.metadata.name,'pod_status':status,'pod_images':images})
        #read_pods_in_ns(con, ns, i.metadata.name)
    return podsns

def list_all_namespaces(con):
    namespaces = []
    ret = con.list_namespace()
    for i in ret.items:
        #print(i.metadata.name)
        namespaces.append(i.metadata.name)
    return namespaces

def list_all_pod(con=v1):
    print("Listing pods with their IPs:")
    ret = con.list_pod_for_all_namespaces(watch=False)
    data =[]
    for i in ret.items:
        
        #print(i.metadata.namespace,i.status.pod_ip,i.metadata.name)
        data.append({'pod_ip':i.status.pod_ip, 'pod_namespace':i.metadata.namespace, 'pod_name': i.metadata.name})
    return data

def get_nodes(con = v1):
    ret = con.list_node()
    data = []
    for i in ret.items:
        #print(i)
        #break
        if(('node-role.kubernetes.io/master' in i.metadata.labels)):# and (i.metadata.labels['node-role.kubernetes.io/master'] =='true')):
            role="master"
            #print(i)
            
        else:
            role="worker"
        # ip address for k3s cluster i.metadata.annotations['k3s.io/internal-ip']
        print(i.metadata.name,i.status.addresses[0].address , role) #i.status.address[0].address)
        data.append({'Node_Name': i.metadata.name, 'Node_IP': i.status.addresses[0].address ,'Node_Role':role})
    return data
#'Node_Role': str(i.metadata.labels['node-role.kubernetes.io/master'], 'Node_IP': i.metadata.labels['k3s.io/internal-ip'])
def get_logs(con,ns,pod):
    logs={}
    conts=list_conts_in_pod(con,ns,pod)
    #print('containers',conts)
    for cont in conts:
        try:
            output=con.read_namespaced_pod_log(pod,ns,container=cont)
            if(output==""):
                output='The selected container has not logged any messages yet.'
            logs[cont]=output
        except Exception as e:
            output=str(e)
            logs[cont]=output
    #print(logs)
    return logs
    
def delete_pod(con,ns,pod):
    con.delete_namespaced_pod(pod, ns)
    print(pod, 'deleted successfully')
def deletedeployment(con,ns,depl):
    try:
        con.delete_namespaced_deployment(depl,ns)
        return 0
    except ApiException as e:
        print("Exception when calling AppsV1Api->delete_namespaced_deployment: %s\n" % e)
        return 1
def get_service(con,ns):
    servs=[]
    ret=con.list_namespaced_service(ns)
    for i in ret.items:
        #print(i)
        serv_name=i.metadata.name
        # if(serv_name=='mongo-express-service'):
        #     print(i)
        internal_end_points=[]
        external_end_points=[]
        ports=i.spec.ports
        for port in ports:
            if(ns=='default'):
                key=serv_name
            else:
                key=serv_name+"."+ns
            value1=str(port.port)+" "+port.protocol
            value2="0"+" "+port.protocol
            item1=[key,value1]
            item2=[key,value2]
            internal_end_points.append(item1)
            internal_end_points.append(item2)

        servs.append({'serv_name':serv_name,'serv_type':i.spec.type,'serv_ip':i.spec.cluster_ip,'serv_intendpoint':internal_end_points,'serv_extendpoint':external_end_points})
        #print(servs)
    return servs
def get_deployment(con,ns):
    ret=con.list_namespaced_deployment(namespace=ns)
    depl=[]
    for i in ret.items:
        images=[]
        conts=i.spec.template.spec.containers
        for cont in conts:
            images.append(cont.image)
        avail=i.status.ready_replicas
        total=i.status.replicas
        if(avail==None):
            avail=0
        if(total==None):
            total=0
        depl.append({'depl_name':i.metadata.name,'depl_namespace':i.metadata.namespace,'depl_ready':[avail,total],'depl_images':images})
    return depl
def update_deployment(con,ns,depl,number):
    n=int(number)
    try:
        con.patch_namespaced_deployment_scale(depl,ns,{'spec': {'replicas':n }})
        print('Successfully updated deployment',depl)
        return 0
    except ApiException as e:
        print("Exception when calling AppsV1Api->patch_namespaced_deployment_scale: %s\n" % e)
        return 1
def get_events(con,ns,depl):
    out=[]
    try:
        ret=con.list_namespaced_event(ns)
        
        for i in ret.items:
            if(i.involved_object.name==depl):
                out.append({'Type':i.type,'Reason':i.reason,'From':i.source.component,'Message':i.message})
        return [0,out]
    except ApiException as e:
        print("Exception when calling EventsV1Api->list_namespaced_event: %s\n" % e)
        return [1,out]
       

    
# def get_pod_status(pod,ns):
#     output=v1.read_namespaced_pod_status(pod,ns,pretty='pretty_example')
#     print('pod status')
#     print(output)
def main():
    '''con = v1
    ns = "default"
    def list_ns(con):
        data =[]
        ret = lib.list_all_pod(con)
        for i in ret.items:
            data.append({'namespace': str(i.metadata.namespace), 'pod_name': str(i.metadata.name), 'pod_ip': str(i.status.pod_ip)})
        return data
    return list_ns(v1)'''
    list_pod_in_ns(v1,'default')
    #get_events(v1,'default','mongoexp-deployment')
    #update_deployment(v2,'default','nginx-deployment','1')
    #get_service(v1,'default')
    #get_deployment(v2,'default')
    #get_nodes(v1)
    #ns=list_all_namespaces(v1)
    ns=['default']
    #for i in ns:
    #    list_pod_in_ns(v1,i)
    #get_logs(v1,'default','noimage')
    #get_pod_status('nginx','default')
    #list_conts_in_pod(v1,ns[0],'goodpod')
    #delete_pod(v1,ns[0],'nginx')
    '''lib.list_all_pod(v1)

    for ns in (lib.list_all_namespaces(v1)):
        list_namespaced_deployment(v2, ns)
    res = lib.get_node(v1)
    for i in res.items:
        print(i.metadata.name + "\t" )
        print(i.status.capacity)'''
if __name__ == '__main__':
    main()