
export const fetchProductData=(url,dispatch,type)=>{
 
    dispatch({type:"LOADING"})
        fetch(url,{
            // mode: 'no-cors',
            method:'GET',
            headers:{'Content-Type': 'application/json'}
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            let payload=res
            dispatch({type,payload})
        }).catch((err)=>{
            console.log(err)
            let payload=err;
            dispatch({type:"ERROR",payload})
        }).finally(()=>{
            dispatch({type:"STOPLOADING"})
        })
}

