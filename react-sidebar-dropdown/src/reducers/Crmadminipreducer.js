import { GET_CRMADMIN_IP} from "../Actiontypes"

const initalstateofcrm={ 
crm:null

}

const Crmadminipreducer=(state=initalstateofcrm,action)=>{
    
    switch(action.type){
        case GET_CRMADMIN_IP:return{
            ...state,
            crm:action.payload
        }
        default: return state
    }
}
export default Crmadminipreducer;