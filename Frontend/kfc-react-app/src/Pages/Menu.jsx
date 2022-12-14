import { Box, Button, Grid, Heading, HStack, Image, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"


export const Menu=()=>{


    const menu1=[
        {
            'imgUrl':"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=22.82",
            name:"The Allu Arjun Combo",
            des:"Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
            price:"448.57",
            serves:"Serves 2"
        },
        {
            imgUrl:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=22.82",
            name:"The Allu Arjun Combo",
            des:"Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
            price:"448.57",
            serves:"Serves 2"
        },
        {
            imgUrl:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=22.82",
            name:"The Allu Arjun Combo",
            des:"Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
            price:"448.57",
            serves:"Serves 2"
        },
        {
            imgUrl:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=22.82",
            name:"The Allu Arjun Combo",
            des:"Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
            price:"448.57",
            serves:"Serves 2"
        },
        {
            imgUrl:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=22.82",
            name:"The Allu Arjun Combo",
            des:"Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
            price:"448.57",
            serves:"Serves 2"
        },
        {
            imgUrl:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/md/D-PR00002228.jpg?ver=22.82",
            name:"The Allu Arjun Combo",
            des:"Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
            price:"448.57",
            serves:"Serves 2"
        },
    ]

    return(
        <Box bg="white" >
            <Box h="77px" bg="black" color="white" display="flex" justifyContent="center" alignItems="center">
                <span>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</span>
                <Button borderRadius="44px" ml="7px" bg="red">Start Order</Button>
            </Box>
            <Box display="flex" w="100%" border="3px solid green" h='auto' >
                 <Box w="25%" border="1px solid red" color="black">
                    <Grid w="66px" h="33px" ml="10%" gap="17%" gridTemplateColumns="repeat(3,1fr)">
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                        <Box h="100%" bg="red"></Box>
                    </Grid>
                    <Heading mb="5%">KFC MENU</Heading>
                    <VStack fontWeight="500" align="start" w="80%" display="flex" flexWrap="wrap-reverse" margin="auto" color="gray.600" border="1px solid red">
                        <Text >Exclusive Deal</Text>
                        <Text >Chicken Buckets</Text>
                        <Text >New Launch</Text>
                        <Text >Biryani Buckets</Text>
                        <Text >Box Meals</Text>
                        <Text>Box Meals</Text>
                        <Text>Stay Home Specials</Text>
                        <Text>Snacks</Text>
                        <Text>Beverages</Text>
                    </VStack>
                 </Box>
                 <Box w="70%" border="1px solid black" color="black" >
                    <Box w="200px" mt="5%" display="block" border="1px solid black" variant="outline" 
                    borderRadius="33px" h="33px" >
                    <SearchIcon color="black" ml="1%" />
                    <Input  w="80%" h="100%" variant="Unstyled" bg="white"
                     placeholder="Search" _placeholder={{color:"black"}} color="black"></Input>
                    </Box>
                    <hr style={{backgroundColor:"black",width:"100%",margin:"auto",height:"1px",marginTop:"3%"}}></hr>
                    {/* //cheken buckets-menu1 */}
                    <Box w="100%" border="1px solid blue" h='auto'>
                    <Heading textAlign='Start' mt="5%" mb="5%">CHICKEN BUCKETS</Heading>
                        <SimpleGrid border="2px solid red" spacing="5%"
                         templateColumns='repeat(3, 1fr)' templateRows="auto">
                            {menu1.map((e)=>{
                            return(
                                <Box border="1px solid black" textAlign='start' height="300px">
                                    <Image src={e.imgUrl}></Image>
                                    <Heading size="sm" fontWeight="semibold" pl="3%">{e.name}</Heading>
                                    <Text fontSize={13} pl="3%">{e.des}</Text>
                                    <HStack pl="3%">
                                        <Text fontSize={13} mr="10%">₹{e.price}</Text>
                                        <Text fontSize={13} ><ul><li>{e.serves}</li></ul></Text>
                                    </HStack>
                                </Box>
                                )})}
                        </SimpleGrid>
                    </Box>
                    {/*  New Launch */}
                    <Box w="100%" border="1px solid blue">
                    <Heading textAlign='Start' mt="5%" mb="5%">CHICKEN BUCKETS</Heading>
                        <Grid border="1px solid black" gap="5%" templateColumns='repeat(3, 1fr)' templateRows="auto">
                            {menu1.map((e)=>{
                            return(
                                <Box border="1px solid black" textAlign='start'>
                                    <Image src={e.imgUrl}></Image>
                                    <Heading size="sm" fontWeight="semibold" pl="3%">{e.name}</Heading>
                                    <Text fontSize={13} pl="3%">{e.des}</Text>
                                    <HStack pl="3%">
                                        <Text fontSize={13} mr="10%">₹{e.price}</Text>
                                        <Text fontSize={13} ><ul><li>{e.serves}</li></ul></Text>
                                    </HStack>
                                </Box>
                                )})}
                        </Grid>
                    </Box>
                 </Box> 
            </Box>
            
        </Box>
    )
}
