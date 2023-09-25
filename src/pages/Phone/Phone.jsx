import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PoneCard from "./PoneCard/PoneCard";


const Phone = () => {
    const [phone,setPhone]=useState([])
    const {id}=useParams();
    const phones=useLoaderData();
    useEffect(()=>{
const findPhone=phones?.find(phone=>phone.id===id)
setPhone(findPhone)
    },[])
   
    return (
       <PoneCard phone={phone}
       ></PoneCard>
    );
};

export default Phone;