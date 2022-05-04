import { GET_WORKER_NODE_INFO} from "../Actiontypes"
import data from '../data/data.json';
const initalstateofworker={
 worker:null
}

const Workerinforeducer=(state=initalstateofworker,action)=>{
    switch(action.type){
        case GET_WORKER_NODE_INFO:return{
            ...state,
            worker:data.worker
        }
        default: return state
    }
}
export default Workerinforeducer;