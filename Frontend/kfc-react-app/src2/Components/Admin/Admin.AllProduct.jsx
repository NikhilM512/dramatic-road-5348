import { 
    Box,
     Grid

 } from "@chakra-ui/react";
import style from './Admin.module.css';
import { useState, useEffect } from "react";
import { Product } from "./Product";
import axios from 'axios'

const postProduct = async (next) => {
    try {
        let req = await axios.get('https://creepy-fawn-purse.cyclic.app/api/product');
        console.log(req.data)
        next(req.data);
        // o(req.data.count)
    } catch (err) {
        alert(err);
    }
}

export const AllProduct = () => {
    const [data, setData] = useState([]);


    const handleClick = async(id)=>{
        try {
            let response = await axios.delete(`https://creepy-fawn-purse.cyclic.app/api/product/:${id}`);
            console.log(response.data)
            alert("product deleted succesfull")
            // next(req.data);
            // o(req.data.count)
            postProduct(setData)
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        postProduct(setData);
    }, [])


    return <Box>
            <Grid className={style.AllproductBox} w={['90%']} p='35px 25px' gap='20px' gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', '1fr 1fr 1fr 1fr']}>
                {data.map((item)=><Product data={item} key={'adminProduct'+item.id} handleClick={handleClick}/>)}
            </Grid>
    </Box>
}