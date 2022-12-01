import { useEffect, useState } from "react";
import { Productos } from "../utils/productos";
import ItemDetail from "../components/ItemDetail";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () =>{
    const [dato,setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() =>{
        firestoreFetchOne(idItem)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    },[])

    return(
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;