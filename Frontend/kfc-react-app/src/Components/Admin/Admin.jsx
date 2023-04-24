import {
    Flex,
    Box,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { AddProduct } from './Admin.AddProduct';
import { AllProduct } from './Admin.AllProduct';
import style from './Admin.module.css'
export const Admin = () => {
    const [page, setPage] = useState('allProduct');
    const adminAuth = useSelector((store) => store.auth.adminAuth);

    const navigate=useNavigate()

    // console.log(adminAuth)
    useEffect(()=>{
        if(!adminAuth){
            navigate("/login")
        }
    },[adminAuth])
    
   
    return <Box p='15px 0' bg='rgb(245,245,245)' minH='90vh'>
        <Flex className={style.topNav} bg='#fff'>
            <Box className={style.TopNavButton} boxShadow={page === 'allProduct' ? 'lg' : "none"} onClick={() => { setPage('allProduct') }}>All Products</Box>
            <Box className={style.TopNavButton} boxShadow={page === 'aaddProduct' ? 'lg' : "none"} onClick={() => { setPage('aaddProduct') }} >Add Products</Box>
        </Flex>

        {page === 'allProduct' ? <AllProduct /> : <AddProduct />}


    </Box>


}