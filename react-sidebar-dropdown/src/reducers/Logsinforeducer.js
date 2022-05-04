import { GET_LOGS_INFO } from "../Actiontypes"

const initalstateoflogs={ 
logs:null

}

const Logsinforeducer=(state=initalstateoflogs,action)=>{
    
    switch(action.type){
        case GET_LOGS_INFO:return{
            ...state,
            logs:action.payload
        }
        default: return state
    }
}
export default Logsinforeducer;