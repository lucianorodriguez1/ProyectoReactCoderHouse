import { useEffect, useState } from "react";
import { Productos } from "../utils/productos";
import ItemList from "../components/ItemList";
import CustomFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../utils/firebaseConfig"

const ItemListContainer = () =>{
 

    const [datos, setDatos] = useState([])
    const{idCategory} = useParams()

    
    useEffect(async()=>{

        const querySnapshot = await getDocs(collection(db, "productos"));
        const dataFromFirestore = querySnapshot.docs.map(item=>({
            id:item.id,
            ...item.data()
        }))
        
       setDatos(dataFromFirestore);
       
    },[idCategory])

    
    return(
        <>
        <h1 className="titulo-principal">Productos</h1>
        <ItemList items={datos}/>
        </>
    )
}

export default ItemListContainer;