import { GET_EVENTS_INFO } from "../Actiontypes"

const initalstateofevents={ 
events:null

}

const Eventsinforeducer=(state=initalstateofevents,action)=>{
    
    switch(action.type){
        case GET_EVENTS_INFO:return{
            ...state,
            events:action.payload
        }
        default: return state
    }
}
export default Eventsinforeducer;