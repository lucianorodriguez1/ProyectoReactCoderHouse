import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
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