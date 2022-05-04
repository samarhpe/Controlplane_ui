import { GET_PODS_INFO } from "../Actiontypes"

const initalstateofpods={ 
pods:null

}

const Podsinforeducer=(state=initalstateofpods,action)=>{
    
    switch(action.type){
        case GET_PODS_INFO:return{
            ...state,
            pods:action.payload
        }
        default: return state
    }
}
export default Podsinforeducer;