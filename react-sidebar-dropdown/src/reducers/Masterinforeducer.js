import { GET_MASTER_NODE_INFO } from "../Actiontypes"
import data from '../data/data.json';
const initalstateofmaster={
 master:null
}

const Masterinforeducer=(state=initalstateofmaster,action)=>{
    
    switch(action.type){
        case GET_MASTER_NODE_INFO:return{
            ...state,
            master:action.payload
        }
        default: return state
    }
}
export default Masterinforeducer;