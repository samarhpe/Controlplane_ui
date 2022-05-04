import { GET_DEPLS_INFO } from "../Actiontypes"

const initalstateofdepls={ 
depls:null

}

const Deplsinforeducer=(state=initalstateofdepls,action)=>{
    
    switch(action.type){
        case GET_DEPLS_INFO:return{
            ...state,
            depls:action.payload
        }
        default: return state
    }
}
export default Deplsinforeducer;