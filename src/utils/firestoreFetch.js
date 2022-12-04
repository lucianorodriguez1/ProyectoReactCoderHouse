import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";
import {db} from './firebaseConfig';

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(
            collection(db, "productos"),
            where("categoryId", "==", parseInt(idCategory))
        );
    } else {
        q = query(collection(db, "productos"), orderBy('nombre'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: idItem,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}


export const createOrderInFirestore = async (order) => {
    const newOrderRef = doc(collection(db, "ordenes"));

    // later...
    await setDoc(newOrderRef, order);
    return newOrderRef;
  }