import { useEffect, useState } from "react";
import { Productos } from "../utils/Productos";
import ItemDetail from "../components/ItemDetail";
import CustomFetch from "../utils/CustomFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const [dato,setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() =>{
        CustomFetch(2000, Productos.find(item=>item.id==idItem))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[])

    return(
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;