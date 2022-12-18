

export const fetchProductData=(url,dispatch,type)=>{
    // console.log(type,url,dispatch)
    // console.log(url,type)
    dispatch({type:"LOADING"})
        fetch(url).then((res)=>{
            console.log(res)
            return res.json()
        }).then((res)=>{
            // console.log(res)
            let payload=res
            dispatch({type,payload})
        }).catch((err)=>{
            let payload=err;
            dispatch({type:"ERROR",payload})
        }).finally(()=>{
            dispatch({type:"STOPLOADING"})
        })
}