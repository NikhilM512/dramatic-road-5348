
import { Box, Button, Heading, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../../Redux/ProductRedux/product.action'

const Burgers = ( {title,endPoint,menuName} ) => {

     const data=useSelector((store)=>{return store.product.BURGERS_Data})
     const isLoading=useSelector((store)=>{return store.product.isLoading})
     const isError=useSelector((store)=>{return store.product.isError})
     const errorMessage=useSelector((store)=>{return store.product.errorMessage})
 
    const dispatch=useDispatch()
    console.log(data)
    
    useEffect(()=>{
        (fetchProductData(`https://creepy-fawn-purse.cyclic.app/api/product/${endPoint}`,dispatch,`GET_${menuName}_DATA_SUCCESS`))
    },[title,menuName,endPoint])

  
    if(isLoading){
            return (
                <>
                <h1>LOADING.....</h1>
                <Image w="100%" src="https://online.kfc.co.in/KFC_Loader_Gif.gif"></Image>
                </>
            )
        }else if(isError){
            return (<h1>{errorMessage}</h1>)
        }

  return (
    <Box 
        w="100%" 
        borderRadius="10px"  
        h='auto' 
        pt="3%">
        <Heading 
            textAlign='Start' 
            mb="3%" 
            ml="2%" 
            fontSize={["22px","25px","30px","33px"]}>
            {title}
        </Heading>
            <SimpleGrid 
                columns={[1,2,3,3]} 
                templateRows="auto">
                {data?.map((e)=>{
                return(
                    <Box 
                        key={e._id}
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" 
                        textAlign='start' 
                        margin="5%" 
                        borderRadius="5px">
                        <Image 
                            src={e.image} 
                            borderRadius="5px 5px 0px 0px">
                        </Image>
                        <VStack 
                            pb="5%" 
                            w="100%" 
                            pl="5%" 
                            pr="3%" 
                            align="space-around">
                            <Heading 
                                w="100%" 
                                mt="3%" 
                                size="sm" 
                                fontWeight="semibold">
                                {e.title}
                            </Heading>
                            <HStack 
                                w="100%"  
                                fontSize={12} 
                                color="gray.600" 
                                fontWeight="semibold">
                                    <Image 
                                        src={e.type=="Non veg"?
                                        "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg":
                                        "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg"}>
                                    </Image>
                                    <Text 
                                        pr="5%">
                                        {e.type}
                                    </Text>
                                    <ul>
                                        <li>
                                            <Text pl="-2%">{e.serve?e.serve:"Serves 2-3"}</Text>
                                        </li>
                                    </ul>
                            </HStack >
                            <HStack 
                                fontSize={15} 
                                w="100%" 
                                fontWeight="semibold">
                                    <Text 
                                        as="del" 
                                        color="red">
                                        ₹{(+(e.price)+(+(e.price)*0.15)).toFixed(2)}
                                    </Text>
                                    <Text 
                                        pl="5%" 
                                        color="green">
                                        ₹{e.price}
                                    </Text>
                            </HStack>
                            <Text 
                                w="100%" 
                                pb="3%"  
                                fontSize={14} 
                                color="gray.500" 
                                fontWeight="500">
                                {e.desc}
                            </Text>
                            <Button 
                                w={["100px","111px","122px","120px"]} 
                                _hover={{backgroundColor:"red"}} 
                                borderRadius="17px" 
                                fontSize="13px" 
                                color="white" 
                                h="33px" 
                                bg="red">
                                Add to Cart
                            </Button>
                        </VStack >
                    </Box>
                    )})}
            </SimpleGrid>
    </Box>
  )
}


export default Burgers