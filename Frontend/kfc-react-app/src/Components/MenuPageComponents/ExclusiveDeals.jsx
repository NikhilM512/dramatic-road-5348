import { Box, Button, Heading, HStack, Icon, Image, SimpleGrid, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../../Redux/ProductRedux/product.action'
import {AiFillPlusCircle} from "react-icons/ai"
import {AiFillMinusCircle} from "react-icons/ai"

const ExclusiveDeals = ( {title,endPoint,menuName} ) => {

     const data=useSelector((store)=>{return store.product.EXCLUSIVE_DEAL_Data})
     const isLoading=useSelector((store)=>{return store.product.isLoading})
     const isError=useSelector((store)=>{return store.product.isError})
     const errorMessage=useSelector((store)=>{return store.product.errorMessage})
 
    const dispatch=useDispatch();
    const [qty,setQty]=useState(1)
    const [btnsDisplay,setBtnsDisplay]=useState("none");
    const [addToCartDisplay,setAddToCartDisplay]=useState("block");
    const toast = useToast()

    useEffect(()=>{
        (fetchProductData(`https://creepy-fawn-purse.cyclic.app/api/product/${endPoint}`,dispatch,`GET_${menuName}_DATA_SUCCESS`))
    },[title,menuName,endPoint])

    const addToCart=async(e)=>{
        setAddToCartDisplay("none")
        setBtnsDisplay("flex")
        // console.log(e)
       
        try {
            let res= await fetch('https://creepy-fawn-purse.cyclic.app/api/cart',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(e)
        })
        let response= await res.json()
            console.log(response.message)
            if(response){
                toast({
                    title: `Added to cart successfully`,
                    status: 'success',
                    isClosable: true,
                  })
            }
        } catch (error) {
            console.log(error.message)
            toast({
                title: `${error.message} toast`,
                status: 'warning',
                isClosable: true,
              })
        }
    }

    const decreaseQty=(e)=>{
        // console.log(qty)
        if(qty<=1){
            setQty(1)
        }else{
        setQty((prev)=>prev-1)
        }
        // console.log(qty)
    }

    const increaseQty=async(e)=>{
        console.log(e)
        // console.log(qty)
        setQty((prev)=>prev+1)
        // console.log(qty)
        let id=e._id;
        e.qty=qty
        console.log(e,qty,e.qty)
            try {
                let res= await fetch(`https://creepy-fawn-purse.cyclic.app/api/cart/${id}`,{
                    method:"PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(e)
                })
                let response= await res.json()
                    console.log(response.message)
            } catch (error) {
                console.log(error)
            }
    }
  
    console.log(qty)

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
        id="ExclusiveDeal-sec"
        w="100%" 
        borderRadius="10px" 
        bg="blackAlpha.200" 
        h='auto' 
        pt="3%">
        <Heading 
            textAlign='Start' 
            mb="3%" 
            ml="2%" 
            fontSize={["22px","25px","30px","33px"]}>
            EXCLUSIVE DEAL
        </Heading>
            <SimpleGrid 
                columns={[1,2,3,3]} 
                templateRows="auto">
                {data.map((e)=>{
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
                                onClick={()=>addToCart(e)}
                                display={addToCartDisplay}
                                w={["100px","111px","122px","120px"]} 
                                _hover={{backgroundColor:"red"}} 
                                borderRadius="17px" 
                                fontSize="13px" 
                                color="white" 
                                h="33px" 
                                bg="red">
                                Add to Cart 
                            </Button>
                            <HStack 
                                display={btnsDisplay}
                                w={["100px","111px","122px","120px"]}
                                h="33px" >
                                    {/* <Button size="sm" border="2px solid black" borderRadius="50%">-</Button> */}
                                    <Button disabled={(qty<=1)}>
                                    <Icon _hover={{cursor:"pointer"}} as={AiFillMinusCircle} boxSize={[5,6,7,8]}  onClick={()=>decreaseQty(e)}></Icon>
                                        </Button>
                                    <Text>{qty}</Text>
                                    <Icon _hover={{cursor:"pointer"}} as={AiFillPlusCircle} boxSize={[5,6,7,8]} onClick={()=>increaseQty(e)}></Icon>
                                    {/* <AiFillPlusCircle h="25px" boxSize={6} /> */}
                                    {/* <Button size="sm" border="2px solid black" borderRadius="50%">+</Button> */}
                            </HStack>
                        </VStack >
                    </Box>
                    )})}
            </SimpleGrid>
    </Box>
  )
}

export default ExclusiveDeals