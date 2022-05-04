import { GET_CLUSTER_INFO } from "../Actiontypes"
import data from '../data/data.json';
const initalstateofclusters={
 k8sversion:data.k8sversion
}

const Clusterinforeducer=(state=initalstateofclusters,action)=>{
    switch(action.type){
        case GET_CLUSTER_INFO:return{
            ...state,
            k8sversion:data.k8sversion
        }
        default: return state
    }
}
export default Clusterinforeducer;