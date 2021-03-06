import axios from 'axios';
var hostipport=window.location.host;
var array=hostipport.split(":");
var ip=array[0];
const nodes_url = 'http://'+ip+':8000/nodes';
const pods_url='http://'+ip+':8000/getpods/';
const depls_url='http://'+ip+':8000/getdepls/';
const services_url='http://'+ip+':8000/getservices/';
const logs_url='http://'+ip+':8000/getlogs/';
const delete_pod_url='http://'+ip+':8000/deletepod/';
const delete_depl_url='http://'+ip+':8000/deletedepl/';
const update_depl_url='http://'+ip+':8000/updatedepl/';
const events_url='http://'+ip+':8000/getevents/';
const crmadminurl='http://'+ip+':8000/getcrmadminip/';
export const getnodes = () => axios.get(nodes_url);
export const getpods=()=>axios.get(pods_url);
export const getdepls=()=>axios.get(depls_url);
export const getservices=()=>axios.get(services_url);
export const getcrmadminip=()=>axios.get(crmadminurl);
export const getlogs=(namespace,pod)=>axios.get(logs_url+namespace+'/'+pod);
export const getevents=(namespace,depl)=>axios.get(events_url+namespace+'/'+depl);
export const deletepod=(namespace,pod)=>axios.delete(delete_pod_url+namespace+'/'+pod);
export const deletedepl=(namespace,depl)=>axios.delete(delete_depl_url+namespace+'/'+depl);
export const updatedepl=(namespace,depl,number)=>axios.patch(update_depl_url+namespace+'/'+depl+'/'+number);
//export const createPost = (newPost) => axios.post(url, newPost);
//export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//export const deletePost = (id) => axios.delete(`${url}/${id}`);
