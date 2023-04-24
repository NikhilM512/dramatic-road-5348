

import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../../Redux/Products/product.action'
import {SingleMenu} from '../SingleMenu/SingleMenu'

const BoxMeals= ({ data, title, endPoint, menuName }) => {

    // const data = useSelector((store) => { return store.product.BOX_MEALS_Data})
    const isLoading = useSelector((store) => { return store.product.isLoading })
    const isError = useSelector((store) => { return store.product.isError })
    const errorMessage = useSelector((store) => { return store.product.errorMessage })

    const dispatch = useDispatch();

    // useEffect(() => {
    //     (fetchProductData(`https://creepy-fawn-purse.cyclic.app/api/product/${endPoint}`,dispatch,`GET_${menuName}_DATA_SUCCESS`))
    // }, [title, menuName])


    if (isLoading) {
        return (
            <>
                <h1>LOADING.....</h1>
                <Image w="100%" src="https://online.kfc.co.in/KFC_Loader_Gif.gif"></Image>
            </>
        )
    } else if (isError) {
        return (<h1>{errorMessage}</h1>)
    }

    return (
        <Box
            id="BoxMeals-sec"
            w="100%"
            borderRadius="10px"
            bg="blackAlpha.200"
            h='auto'
            pt="3%">
            <Heading
                textAlign='Start'
                mb="3%"
                ml="2%"
                fontSize={["22px", "25px", "30px", "33px"]}>
                {title}
            </Heading>
            <SimpleGrid
                columns={[1, 2, 3, 3]}
                templateRows="auto">
                {data?.map((e) => {
                    return (
                        <SingleMenu key={e._id} e={e} id={e._id}></SingleMenu>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}

export default BoxMeals

