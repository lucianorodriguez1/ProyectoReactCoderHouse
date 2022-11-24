  let todo_bien = true;

  const CustomFetch = (time, task)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (todo_bien) {
                resolve(task)
            } else{
                reject("Error en el CustomFetch")
            }
        },time)
        
    })
  }

export default CustomFetch;