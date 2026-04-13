import {axiosAuth} from "axios";

 export const login = async (data) =>{
    return await axiosAuth.post("/aut/login", data)
 }