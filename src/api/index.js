import axios from "axios"

export const userData = () => {
    return new Promise((resolve, reject)=>{
        axios.get("http://localhost:3001/users").then((res)=>{
            resolve(res)
        })
    })
   
}