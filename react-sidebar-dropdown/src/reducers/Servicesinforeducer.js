import { GET_SERVICES_INFO } from "../Actiontypes"

const initalstateofservices={ 
services:null

}

const Servicesinforeducer=(state=initalstateofservices,action)=>{
    
    switch(action.type){
        case GET_SERVICES_INFO:return{
            ...state,
            services:action.payload
        }
        default: return state
    }
}
export default Servicesinforeducer;