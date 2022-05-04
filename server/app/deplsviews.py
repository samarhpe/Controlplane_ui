from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from kubernetes import client, config
#from .lib import lib
import os
from app import main
# Configs can be set in Configuration class directly or using helper utility
#config.load_kube_config(config_file=r"./server/app/k3s.yaml")

v1 = client.CoreV1Api()
v2 = client.AppsV1Api()
# Create your views here.
class DeplsView(APIView):

    def get(self, request):
        namespaces=main.list_all_namespaces(v1)
        data={}
        for ns in namespaces:
            data[ns]=main.get_deployment(v2,ns)

        return Response(data)
    
    def delete(self,request,namespace,depl):
        out=main.deletedeployment(v2,namespace,depl)
        if(out==0):
            return Response(depl+' deleted successfully')
        else:
            return Response('Error occurred while deleting the deployment '+ depl)
    def patch(self,request,namespace,depl,number):
        out=main.update_deployment(v2,namespace,depl,number)
        if(out==0):
            return Response(depl+' updated successfully')
        else:
            return Response('Error occurred while updating the deployment '+ depl)

