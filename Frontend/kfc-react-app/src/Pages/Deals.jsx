import { Box, Button, Flex, Grid, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import bgImage from "../kgf-darya-ganj-delhi-fast-food.jpg"
import { Menu } from "./Menu";


export const Deals = () => {
    const Navi = useNavigate()
    const [redeemBtnDisplay, setredeemBtnDisplay] = useState();

    const Redeem = () => {
        return Navi("/")
    }

    return (
        <Box w="100%" >
            <HStack h="77px" bg="black" color="white" display="flex" fontSize={[12,13,16,20]} justifyContent="center" alignItems="center">
                <Text mr="2%">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button onClick={() => { Navi('/menu') }} borderRadius="44px" ml="7px" bg="red" fontSize={[12,13,14,15]} _hover={{backgroundColor:"red"}}>Start Order</Button>
            </HStack>
            <Box w='100%'
                style={{
                    backgroundImage: 'Url("https://i.postimg.cc/nh1trRv3/Licious-Login-Background-Img.jpg")', backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
                color='white'>
                <Heading p="2%">DEALS & OFFERS</Heading>
                <Box w="100%" h="333px" 
                backgroundImage={bgImage}
                 backgroundSize="cover"  
                //  style={{
                //     backgroundImage: `Url(${bgImage})`, backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover"
                // }}
                >
                </Box>
            </Box>
            <Box w="70%" margin="auto">
                <Grid margin='auto' mb="5%" w={["33px", "44px", "55px", "66px"]} h={["18px", "23px", "28px", "33px"]} gap="17%" gridTemplateColumns="repeat(3,1fr)">
                    <Box h="100%" bg="red"></Box>
                    <Box h="100%" bg="red"></Box>
                    <Box h="100%" bg="red"></Box>
                </Grid>
                <Flex mb={["5%", "5%", "5%", "2%"]} display="flex" flexDirection={["column", "column", "column", "row"]} justifyContent={{ lg: "space-between" }}>
                    <Heading display="block">OFFERS FOR YOU</Heading>
                    <Text textDecoration="underline" display="block">Sign In to see exclusive offers & deals</Text>
                </Flex>
                <SimpleGrid gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]} spacing={7} mb="10%">
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="5px">
                        <Image borderRadius="5px 5px 0px 0px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/sm/CHKZINGER.jpg"></Image>
                        <Heading pl="3%" pr="3%" mt="5%" mb="5%">1 Pc free Chicken  Zinger on a cart...</Heading>
                        <Text pl="3%" pr="3%" mt="5%" mb="5%">1 Pc free Chicken  Zinger on a cart value of 499 or above on first order. Only for registered users</Text>
                        <HStack justifyContent="space-around" mt="5%" mb="5%">
                            <Text textDecoration="underline">View Details</Text>
                            <Button
                                onClick={Redeem}
                                display={redeemBtnDisplay}
                                border="1px solid black"
                                w={["100px", "111px", "122px", "120px"]}
                                _hover={{ backgroundColor: "black", color: 'white' }}
                                borderRadius="17px"
                                fontSize="13px"
                                color="black"
                                h="33px"
                                bg="white">
                                Redeem
                            </Button>
                        </HStack>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="5px">
                        <Image borderRadius="5px 5px 0px 0px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/sm/VEGZINGER.jpg"></Image>
                        <Heading pl="3%" pr="3%" mt="5%" mb="5%">1 Pc free Veg Zinger on a cart...</Heading>
                        <Text pl="3%" pr="3%" mt="5%" mb="5%">1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users</Text>
                        <HStack justifyContent="space-around" mt="5%" mb="5%">
                            <Text textDecoration="underline">View Details</Text>
                            <Button
                                onClick={Redeem}
                                display={redeemBtnDisplay}
                                border="1px solid black"
                                w={["100px", "111px", "122px", "120px"]}
                                _hover={{ backgroundColor: "black", color: 'white' }}
                                borderRadius="17px"
                                fontSize="13px"
                                color="black"
                                h="33px"
                                bg="white">
                                Redeem
                            </Button>
                        </HStack>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="5px">
                        <Image borderRadius="5px 5px 0px 0px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/sm/ADDCHK99.jpg"></Image>
                        <Heading pl="3%" pr="3%" mt="5%" mb="5%">Add 2 Pc Hot n Crispy Chick...</Heading>
                        <Text pl="3%" pr="3%" mt="5%" mb="5%">Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 2nd & 3rd order for signed in users.</Text>
                        <HStack justifyContent="space-around" mt="5%" mb="5%">
                            <Text textDecoration="underline">View Details</Text>
                            <Button
                                onClick={Redeem}
                                display={redeemBtnDisplay}
                                border="1px solid black"
                                w={["100px", "111px", "122px", "120px"]}
                                _hover={{ backgroundColor: "black", color: 'white' }}
                                borderRadius="17px"
                                fontSize="13px"
                                color="black"
                                h="33px"
                                bg="white">
                                Redeem
                            </Button>
                        </HStack>
                    </Box>
                    <Box boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" borderRadius="5px">
                        <Image borderRadius="5px 5px 0px 0px" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/sm/BIGSAVE.jpg"></Image>
                        <Heading pl="3%" pr="3%" mt="5%" mb="5%">Upto Rs 100 off on min cart...</Heading>
                        <Text pl="3%" pr="3%" mt="5%" mb="5%">Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.</Text>
                        <HStack justifyContent="space-around" mt="5%" mb="5%">
                            <Text textDecoration="underline">View Details</Text>
                            <Button
                                onClick={() => Redeem()}
                                display={redeemBtnDisplay}
                                border="1px solid black"
                                w={["100px", "111px", "122px", "120px"]}
                                _hover={{ backgroundColor: "black", color: 'white' }}
                                borderRadius="17px"
                                fontSize="13px"
                                color="black"
                                h="33px"
                                bg="white">
                                Redeem
                            </Button>
                        </HStack>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}