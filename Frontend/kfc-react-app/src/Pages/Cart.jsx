import { Box, Button, Flex, Grid, Heading, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setFinalCartItems, setFinalCartPrice } from '../Redux/Cart/action'

const Cart = () => {

  const [cartData, setCartData] = useState([])
  const [qty, setQty] = useState(1)
  const [priceIntoQty, setPriceIntoQty] = useState(0)
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [GST, setGST] = useState(0);
  const [RH, setRH] = useState('37.00');
  const [donation, setDonation] = useState('00');
  const [final, setFinal] = useState(0);
  const [CouponText, setCouponText] = useState("Masai30")
  const [discountBtnDisplay, setdiscountBtnDisplay] = useState(false)
  const [discountBtnBgColor, setdiscountBtnBgColor] = useState("red")

  const dispatch=useDispatch();

  const navigate = useNavigate()

  const fetchCartData = () => {
    fetch("https://creepy-fawn-purse.cyclic.app/api/cart").then((res) => {
      return res.json()
    }).then((res) => {
      setCartData(res)
      setTotalItems(res.length)
      dispatch(setFinalCartItems(res.length))
      setCartData(res)
      Calculations()
    }).catch((err) => {
      console.log(err)
    })
  }

  const decreaseQty = async (e) => {
    let id = e._id;
    e.qty = e.qty - qty
    try {
      let res = await fetch(`https://creepy-fawn-purse.cyclic.app/api/cart/:${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e)
      })
      let response = await res.json()
      console.log(response.message)
      setPriceIntoQty(((+e.price) * (e.qty)).toFixed(2))
      fetchCartData()
    } catch (error) {
      console.log(error)
    }
  }

  const increaseQty = async (e) => {
    console.log(qty, e)
    let id = e._id;
    e.qty = e.qty + qty
    try {
      let res = await fetch(`https://creepy-fawn-purse.cyclic.app/api/cart/:${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e)
      })
      let response = await res.json()
      console.log(response.message)
      setPriceIntoQty(((+e.price) * (e.qty)).toFixed(2))
      setQty(1)
      fetchCartData()
    } catch (error) {
      console.log(error)
    }
  }


  const DeleteProduct = async (e) => {
    console.log(e)
    let id = e._id
    try {
      let res = await fetch(`https://creepy-fawn-purse.cyclic.app/api/cart/:${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let response = await res.json()
      console.log(response.message)
      fetchCartData()
    } catch (error) {
      console.log(error)
    }
    console.log(e)
  }



  const Calculations = () => {
    let price = 0;
    for (let i = 0; i < cartData.length; i++) {
      price += ((+cartData[i].price) * (cartData[i].qty))
    }
    let Gst = price * 0.18;
    if(cartData.length){
      setRH("37.00")
    }else{
      setRH("00")
    }
    let finalPrice = price + Gst + (+RH) + (+donation) - discount
    setSubtotal(price.toFixed(2))
    setGST(Gst.toFixed(2))
    setFinal(finalPrice.toFixed(2))
    dispatch(setFinalCartPrice(finalPrice.toFixed(0)));
  }

  const reduceDiscount = () => {
    let discnt = (final * 0.30).toFixed(2)
    setDiscount(discnt)
    let finalprice = (final - discnt);
    console.log(finalprice)
    setFinal(finalprice)
    setCouponText("Applied")
    setdiscountBtnBgColor("green")
  }

  useEffect(() => {
    fetchCartData()
    localStorage.setItem("totalcart", final)
  }, [totalItems, subtotal, discount, GST, RH, donation, final])

  return (
    <>
     <HStack h="77px" bg="black" color="white" display="flex" fontSize={[12,13,16,20]} justifyContent="center" alignItems="center">
                <Text mr="2%">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button onClick={() => { navigate('/menu') }} borderRadius="44px" ml="7px" bg="red" fontSize={[12,13,14,15]} _hover={{backgroundColor:"red"}}>Start Order</Button>
      </HStack>
      <Grid
        mb="2%"
        ml="5%"
        w={["33px", "44px", "55px", "66px"]}
        h={["18px", "23px", "28px", "33px"]}
        gap="17%"
        gridTemplateColumns="repeat(3,1fr)">
        <Box h="100%" bg="red"></Box>
        <Box h="100%" bg="red"></Box>
        <Box h="100%" bg="red"></Box>
      </Grid>
      <Heading textAlign="start" ml="5%" mb="2%" >MY CART</Heading>
      <Flex
        w="90%" margin="auto" mb="10%"
        flexDirection={["column", "column", "column", "row"]}>
        <VStack w={["100%", "100%", "100%", "70%"]} mr="5%">
          {cartData?.map((e) =>
            <HStack key={e._id} w="100%" p="2%" justifyContent="space-between" bg="blackAlpha.200">
              <HStack w="70%" >
                <Image w={["50%", "44%", "33%", "30%"]} h="111px" src={e.image}></Image>
                <VStack align="space-around" pl="5%" h="111px" textAlign="start">
                  <Text fontSize={16} fontWeight="semibold">{e.title}</Text>
                  <Text fontSize={13} textDecoration="underline" onClick={() => DeleteProduct(e)} cursor="pointer" >Remove</Text>
                </VStack>
              </HStack>
              <Flex flexDirection={["column", "column", "column", "column"]} w="40%" h="111px" justify="space-around">
                <Flex flexDirection={["row", "row", "row", "row"]} w="100%" justifyContent="center" margin="auto"  >
                  <Button isDisabled={e.qty <= 1} borderRadius="44%" bg="transparent" onClick={() => decreaseQty(e)}>
                    <Icon _hover={{ cursor: "pointer" }} as={AiFillMinusCircle} boxSize={[5, 6, 7, 8]} ></Icon>
                  </Button>
                  <Text mt={"2%"}>{e.qty}</Text>
                  <Button borderRadius="44%" bg="transparent">
                    <Icon _hover={{ cursor: "pointer" }} as={AiFillPlusCircle} boxSize={[5, 6, 7, 8]} onClick={() => increaseQty(e)}></Icon>
                  </Button>
                </Flex>
                <Text>₹{((+e.price) * (e.qty)).toFixed(2)}</Text>
              </Flex>
            </HStack>
            //  <SingleCartProduct e={e} 
            //  calculations={Calculations} 
            //  fetchCartData={fetchCartData}/>
          )}
        </VStack>
        <Box w={["100%", "100%", "100%", "30%"]} h={"fit-content"} p="2%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Heading mb="5%" mt="3%" size="sm">{totalItems} ITEMS</Heading>
          <HStack w="100%" pt="3%" pb="3%" justifyContent="space-around" bg="blackAlpha.200" mt="2%" pr="2%">
            <Text color="red" fontWeight="semibold" textAlign="start" ml="5%" >Apply Offers & Deals via available Coupon (30% Discount)</Text>
            <Button disabled={discountBtnDisplay} bg={discountBtnBgColor} _hover={{ backgroundColor: "green" }} color="white" mr="2%" onClick={() => reduceDiscount()}>{CouponText}</Button>
          </HStack>
          <HStack w="100%" pt="3%" pb="3%" justifyContent="space-between" >
            <Text>Subtotal</Text>
            <Text>₹{subtotal}</Text>
          </HStack>
          <HStack w="100%" pt="3%" pb="3%" justifyContent="space-between" >
            <Text>GST</Text>
            <Text>₹{GST}</Text>
          </HStack>
          <HStack w="100%" pt="3%" pb="3%" justifyContent="space-between" >
            <Text>Restaurant Handling (Incl. Taxes)</Text>
            <Text>₹{RH}</Text>
          </HStack>
          <HStack disabled={false} w="100%" pt="3%" pb="3%" justifyContent="space-between" >
            <Text>Discount</Text>
            <Text>₹{discount}</Text>
          </HStack>
          <hr style={{ color: "black", backgroundColor: "black" }} ></hr>
          <NavLink to="/checkout">
            <Button bg="red" mt="5%" color="white" _hover={{ backgroundColor: "green" }} w="100%" pt="3%" pb="3%" justifyContent="space-between" >
              <Text >Checkout</Text>
              <Text>₹{final}</Text>
            </Button>
          </NavLink>

        </Box>
      </Flex>
    </>
  )
}

export default Cart