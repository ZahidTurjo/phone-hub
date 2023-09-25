/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";


const usehooks = () => {
   const [phones,setPhones]=useState([])
   useEffect(()=>{
    fetch('./phones.json')
    .then(res=>res.json())
    .then(data=>setPhones(data))

   },[])
   return [phones]
};

export default usehooks;