import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const UserProvider = (props)=>{
    const {children} = props;
    const [apiResult,setApiResult] = useState([])
console.log("helloworld")
  useEffect(()=>{
    const fetchData = async () => {
        try{
            
const response =await axios('https://fakestoreapi.com/products')
const apiData = response.data;
        setApiResult(apiData);
    }catch (error){
        console.error("error fetching data:",error)
    }
}
    fetchData();
  },[])
return (
    <>
<UserContext.Provider value={apiResult}>
    {children}
</UserContext.Provider>
</>
)

}
export  {UserContext,UserProvider}

