import { useEffect, useState } from "react";
import { Productos } from "../utils/productos";
import ItemList from "../components/ItemList";
import CustomFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../utils/firebaseConfig"
import { firestoreFetch} from "../utils/firestoreFetch";

const ItemListContainer = () =>{
 

    const [datos, setDatos] = useState([])
    const{idCategory} = useParams()

    
    useEffect(()=>{
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    
    },[idCategory])

    
    return(
        <>
        <h1 className="titulo-principal">Productos</h1>
        <ItemList items={datos}/>
        </>
    )
}

export default ItemListContainer;