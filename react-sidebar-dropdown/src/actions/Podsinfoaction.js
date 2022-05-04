import { GET_PODS_INFO } from "../Actiontypes";
import * as api from '../api/index.js';
export const podsinfoactioncreator=()=>async (dispatch)=>{
    try{
       const {data}=await api.getpods();
       //console.log('pods:',data);
       dispatch({ type:GET_PODS_INFO,payload:data});
    }
    catch(error){
         console.log(error.message);
    }
    
}
 