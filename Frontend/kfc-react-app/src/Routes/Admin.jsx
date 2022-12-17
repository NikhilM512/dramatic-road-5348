import { Box, Button, Flex, Grid, Heading, HStack, Icon, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../Redux/ProductRedux/product.action'

const Admin = () => {


  const allData=useSelector((store)=>{return store.product.ALLPRODUCT_Data})
  const dispatch=useDispatch();

  useEffect(()=>{
    (fetchProductData("https://creepy-fawn-purse.cyclic.app/api/product",dispatch,"GET_ALLPRODUCT_DATA_SUCCESS"))
},[])

  return (
    <Flex>
         <Box position="sticky" left="0" backgroundColor="white" w={["35%","30%","25%","25%"]} color="black">   
                    <VStack mt="5%" fontSize={["10px","12px","14px","18px"]} fontWeight="500" align="start" w="80%" display="flex" flexWrap="wrap-reverse" margin="auto" color="gray.600" >
                    <Grid mb="5%" w={["33px","44px","55px","66px"]} h={["18px","23px","28px","33px"]}  gap="17%" gridTemplateColumns="repeat(3,1fr)">
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                    </Grid>
                    <Heading mb="5%" color="black" mt="5%" fontSize={["15px","22px","30px","33px"]}>KGF MENU</Heading>
                        <VStack _hover={{cursor:"pointer"}} align='start'>
                  <Text>All Products</Text>
                  <Text>Add Products</Text>
                  <Text>Modify Product</Text>
                  <Text>Delete Products</Text>
            </VStack>
                    </VStack>
                 </Box>
          <VStack>
            <Box>
              <SimpleGrid 
                columns={[1,2,3,3]} 
                templateRows="auto">
                {allData?.map((e)=>{
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
                              <HStack h="auto">
                                <Button 
                                    // onClick={ShowBtns}
                                    // display={addToCartDisplay}
                                    w={["100px","111px","122px","120px"]} 
                                    _hover={{backgroundColor:"red"}} 
                                    borderRadius="17px" 
                                    fontSize="13px" 
                                    color="white" 
                                    h="33px" 
                                    bg="red">
                                    DELETE
                                </Button>
                                <Button 
                                    // onClick={ShowBtns}
                                    // display={addToCartDisplay}
                                    w={["100px","111px","122px","120px"]} 
                                    _hover={{backgroundColor:"orange"}} 
                                    borderRadius="17px" 
                                    fontSize="13px" 
                                    color="white" 
                                    h="33px" 
                                    bg="orange">
                                    Modify
                                </Button>
                              </HStack>
                              {/* <HStack 
                                  // display={btnsDisplay}
                                  w={["100px","111px","122px","120px"]}
                                  h="33px" >
                                      <Icon _hover={{cursor:"pointer"}} as={AiFillMinusCircle} boxSize={[5,6,7,8]}></Icon>
                                      <Text>1</Text>
                                      <Icon _hover={{cursor:"pointer"}} as={AiFillPlusCircle} boxSize={[5,6,7,8]}></Icon>
                              </HStack> */}
                        </VStack >
                    </Box>
                )})}
              </SimpleGrid>
            </Box>
          </VStack>  
    </Flex>
  )
}

export default Admin