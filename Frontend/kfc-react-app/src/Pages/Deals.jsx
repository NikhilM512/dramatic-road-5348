import { Box, Button, Image } from "@chakra-ui/react"
import bgImage from "../DealsPageWallpaper.jpg"


export const Deals=()=>{
    return(
        <Box w="100%">
            <Box h="77px" bg="black" color="white" display="flex" justifyContent="center" alignItems="center">
                    <span>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</span>
                    <Button borderRadius="44px" ml="7px" bg="red">Start Order</Button>
            </Box> 
            <Box h="333px" bg="white">
                <Image src={bgImage} h="100%" w="100%"></Image>
            </Box>
        </Box>
    )
}