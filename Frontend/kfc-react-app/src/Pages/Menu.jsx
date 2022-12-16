import { Box, Button, Grid, Heading, HStack, Image, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import { useEffect } from "react"
import ExclusiveDeals from "../Components/MenuPageComponents/ExclusiveDeals"
import ChickenBucket from "../Components/MenuPageComponents/ChickenBucket"
import MenuSection from "../Components/MenuPageComponents/MenuSection"
import { useSelector } from "react-redux"
import Beverages from "../Components/MenuPageComponents/Beverages"
import BiryaniBuckets from "../Components/MenuPageComponents/BiryaniBuckets"
import BoxMeals from "../Components/MenuPageComponents/BoxMeals"
import Burgers from "../Components/MenuPageComponents/Burgers"
import StayHomeSpecials from "../Components/MenuPageComponents/StayHomeSpecials"
import Snacks from "../Components/MenuPageComponents/Snacks"
import NewLaunch from "../Components/MenuPageComponents/NewLaunch"


export const Menu=()=>{

    return(
        <Box bg="white" >
            <HStack h="77px" bg="black" color="white" display="flex" fontSize={[12,13,14,15]} justifyContent="center" alignItems="center">
                <Text mr="2%">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button borderRadius="44px" ml="7px" bg="red" fontSize={[12,13,14,15]} _hover={{backgroundColor:"red"}}>Start Order</Button>
            </HStack>
            <Box display="flex" w="100%" h='auto' >
                 <Box w="25%" border="1px solid red" color="black">
                    <Grid w="66px" h="33px" ml="10%" gap="17%" gridTemplateColumns="repeat(3,1fr)">
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                    </Grid>
                    <Heading mb="5%" mt="5%" fontSize={["22px","25px","30px","33px"]}>KFC MENU</Heading>
                    <VStack fontSize={["10px","12px","14px","18px"]} fontWeight="500" align="start" w="80%" display="flex" flexWrap="wrap-reverse" margin="auto" color="gray.600" border="1px solid red">
                    <Text> <a href="#ExclusiveDeal-sec"> Exclusive Deal </a> </Text>
                            <Text> <a href="#ChickenBuckets-sec"> Chicken Buckets </a> </Text>
                            <Text> <a href="#NewLaunch-sec"> New Launch </a> </Text>
                            <Text> <a href="#BiryaniBuckets-sec"> Biryani Buckets </a> </Text>
                            <Text> <a href="#BoxMeals-sec"> Box Meals </a> </Text>
                            <Text> <a href="#Burgers-sec"> Burgers </a> </Text>
                            <Text> <a href="#StayHomeSpecials-sec"> Stay Home Specials </a> </Text>
                            <Text> <a href="#Snacks-sec"> Snacks </a> </Text>
                            <Text> <a href="#Beverages-sec"> Beverages </a> </Text>
                    </VStack>
                 </Box>
                 <Box w="70%"  color="black" >
                    <Box w="200px" mt="5%" display="block" border="1px solid black" variant="outline" 
                    borderRadius="33px" h="33px" >
                    <SearchIcon color="black" ml="1%" />
                    <Input  w="80%" h="100%" variant="Unstyled" bg="white"
                     placeholder="Search" _placeholder={{color:"black"}} color="black"></Input>
                    </Box>
                    <hr style={{backgroundColor:"black",width:"100%",margin:"auto",height:"1px",marginTop:"3%"}}></hr>
                
            {/* /* Menu-sections */ }

                    <ExclusiveDeals 
                        title="EXCLUSIVE DEAL" 
                        endPoint="/search?q=6%20pc%20Hot%20&%20Crispy%20Chicken"
                        menuName="EXCLUSIVE_DEAL">
                    </ExclusiveDeals> 
                    <ChickenBucket
                        title="CHICKEN BUCKETS" 
                        endPoint="?categories=CHICKEN"
                        menuName="CHICKEN_BUCKETS">
                    </ChickenBucket>
                    <NewLaunch
                        title="NEW LAUNCH" 
                        endPoint="?categories=NEWLUNCH"
                        menuName="NEW_LAUNCH">
                    </NewLaunch>
                    <BiryaniBuckets
                        title="BIRYANI BUCKETS" 
                        endPoint="?categories=Biryani_Buckets"
                        menuName="BIRYANI_BUCKETS">
                    </BiryaniBuckets>
                    <BoxMeals
                        title="BOX MEALS" 
                        endPoint="?categories=BOX_MEALS"
                        menuName="BOX_MEALS">
                    </BoxMeals>
                    <Burgers
                        title="BURGERS" 
                        endPoint="?categories=BURGERS"
                        menuName="BURGERS">
                    </Burgers>
                    <StayHomeSpecials
                        title="STAY HOME SPECIALS" 
                        endPoint="?categories=STAY_HOME"
                        menuName="STAY_HOME_SPECIALS">
                    </StayHomeSpecials>
                    <Snacks
                        title="SNACKS" 
                        endPoint="?categories=SNACKS"
                        menuName="SNACKS">
                    </Snacks>
                    <Beverages
                        title="BEVERAGES" 
                        endPoint="?categories=BEVERAGES"
                        menuName="BEVERAGES">
                    </Beverages>
                 </Box> 
            </Box>
            
        </Box>
    )
}
