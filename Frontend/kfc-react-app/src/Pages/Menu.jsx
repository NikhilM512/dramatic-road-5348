import { Box, Button, Grid, Heading, HStack, Icon, Image, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import ExclusiveDeals from "../Components/MenuPageComponents/ExclusiveDeals"
import ChickenBucket from "../Components/MenuPageComponents/ChickenBucket"
import { useSelector,useDispatch } from "react-redux"
import Beverages from "../Components/MenuPageComponents/Beverages"
import BiryaniBuckets from "../Components/MenuPageComponents/BiryaniBuckets"
import BoxMeals from "../Components/MenuPageComponents/BoxMeals"
import Burgers from "../Components/MenuPageComponents/Burgers"
import StayHomeSpecials from "../Components/MenuPageComponents/StayHomeSpecials"
import Snacks from "../Components/MenuPageComponents/Snacks"
import NewLaunch from "../Components/MenuPageComponents/NewLaunch"
// import {fetchProductData} from "../Redux/Product/product.action.js"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { fetchProductData } from "../Redux/Products/product.action"

export const Menu=()=>{

    const [resultDisplay,setResultDisplay]=useState("none")
    const [menuSectionDisplay,setMenuSectionDisplay]=useState("block")
    const [filteredData,setFilteredData]=useState([])
    const [searchedData,setSearchedData]=useState([])
    const [searchedHeading,setSearchedHeading]=useState("none")
    const [searchedMenuName,setSearchedMenuName]=useState("")
    const [btnsDisplay,setBtnsDisplay]=useState("none");
    const [addToCartDisplay,setAddToCartDisplay]=useState("block");

    const allData=useSelector((store)=>{return store.product.ALLPRODUCT_Data})
    const dispatch=useDispatch();
    const searchMenus=(e)=>{
        let q=e.target.value;
        if(!q){
            setResultDisplay("none")
            setSearchedHeading("none")
            setMenuSectionDisplay("block")
            setFilteredData([])
            return;
        }
        let query=q.toLowerCase()
            setResultDisplay("block")
            let title;
            let filteredData=allData.filter((el)=>{
                 title=el.title.replace(/[^a-zA-Z0-9]+/ig, "").toLowerCase()
                let result=title.includes(query)
                if(result){
                    return el;
                }
                return
            })
            setFilteredData(filteredData)
    }

    const showSelectedResult=(e)=>{
            setSearchedData([e])
            setSearchedHeading("block")
            setSearchedMenuName(e.title)
            setResultDisplay("none")
    }

    const ShowBtns=()=>{
        setAddToCartDisplay("none")
        setBtnsDisplay("flex")
    }

    const hideResults=()=>{
        setResultDisplay("none")
    }

    useEffect(()=>{
        (fetchProductData("https://creepy-fawn-purse.cyclic.app/api/product",dispatch,"GET_ALLPRODUCT_DATA_SUCCESS"))
    },[])

    return(
        <Box bg="white" onClick={hideResults}>
            <HStack h="77px" bg="black" color="white" display="flex" fontSize={[12,13,14,15]} justifyContent="center" alignItems="center">
                <Text mr="2%">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button borderRadius="44px" ml="7px" bg="red" fontSize={[12,13,14,15]} _hover={{backgroundColor:"red"}}>Start Order</Button>
            </HStack>
            <Box display="flex" w="100%" >
                 <Box position="sticky" left="0" backgroundColor="white" w={["35%","30%","25%","25%"]} color="black">   
                    <VStack mt="5%" fontSize={["10px","12px","14px","18px"]} fontWeight="500" align="start" w="80%" display="flex" flexWrap="wrap-reverse" margin="auto" color="gray.600" >
                    <Grid mb="5%" w={["33px","44px","55px","66px"]} h={["18px","23px","28px","33px"]}  gap="17%" gridTemplateColumns="repeat(3,1fr)">
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                    </Grid>
                    <Heading mb="5%" color="black" mt="5%" fontSize={["15px","22px","30px","33px"]}>KGF MENU</Heading>
                        <VStack _hover={{cursor:"pointer"}} align='start'>
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
                    </VStack>
                 </Box>
                 <Box  w={["65%","70%","75%","75%"]}  color="black" >

            {/* SearchBox */}

                    <Box  w={["222px","300px","333px","400px"]} mt="5%" display="block" border="1px solid black" variant="outline" 
                    borderRadius="33px" h="33px" >
                    <SearchIcon color="black" ml="1%" />

            {/* SearchInput */}

                    <Input onChange={(e)=>searchMenus(e)} w="80%" h="100%" variant="Unstyled" bg="white"
                     placeholder="Search our menu" _placeholder={{color:"black"}} color="black"></Input>
                    </Box>

            {/* SearchResults */}

                    <VStack 
                        maxH="333px" 
                        overflow="hidden" 
                        _hover={{overflowY:"scroll",scrollbarWidth:"none",msScrollbarBaseColor:"black"}}
                        pl="10px" 
                        textAlign="start" 
                        w={["222px","300px","333px","400px"]} 
                        position="absolute" 
                        color="white" 
                        bg="black" 
                        borderRadius="13px 13px" 
                        display={resultDisplay} >
                        {filteredData?.map((e,i)=>{
                           return( 
                            <HStack key={i} onClick={()=>showSelectedResult(e)}>
                                <SearchIcon color="black" ml="1%" />
                                <Text>{i+1}</Text>
                                <Text>{e.title}</Text>
                           </HStack>
                           )
                        })}
                    </VStack>
                    <hr style={{backgroundColor:"black",width:"100%",margin:"auto",height:"1px",marginTop:"3%",marginBottom:"3%"}}></hr>
          
                    <Box 
                        display={searchedHeading}
                        id="ExclusiveDeal-sec"
                        w="100%" 
                        borderRadius="10px" 
                        bg="blackAlpha.200" 
                        h='auto' 
                        pt="3%">
                        <Heading 
                            display={searchedHeading}
                            textAlign='Start' 
                            mb="3%" 
                            ml="2%" 
                            fontSize={["22px","25px","30px","33px"]}>
                            We Found {searchedMenuName}
                        </Heading>
                        <SimpleGrid 
                            mb="5%"
                            columns={[1,2,3,3]} 
                            templateRows="auto">
                            {searchedData?.map((e)=>{
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
                                                    src={e.type==="Non veg"?
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
                                            onClick={ShowBtns}
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
                                                <Icon _hover={{cursor:"pointer"}} as={AiFillMinusCircle} boxSize={[5,6,7,8]}></Icon>
                                                <Text>1</Text>
                                                <Icon _hover={{cursor:"pointer"}} as={AiFillPlusCircle} boxSize={[5,6,7,8]}></Icon>
                                        </HStack>
                                    </VStack >
                                </Box>
                                )})}
                        </SimpleGrid>
                        </Box>
            {/* /* Menu-sections */ }
                    <VStack display={menuSectionDisplay}>
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
                    </VStack>
                 </Box> 
            </Box>
            
        </Box>
    )
}