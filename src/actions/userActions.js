import axios from 'axios'

export const login =async (payload) =>{
   return await axios.post(`http://127.0.0.1:8000/api/login/`,payload);
}

export const register =async (payload) =>{
   return await axios.post(`http://127.0.0.1:8000/api/register/`,payload);
}

export const residue =async (payload) =>{
   return await axios.post(`http://127.0.0.1:8000/api/residue/`,payload);
}