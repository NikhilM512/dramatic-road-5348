import {
    Flex, Box, Text , Image, 
} from '@chakra-ui/react'
// import style from "./Admin.module.css"
import {RiDeleteBin5Line} from 'react-icons/ri'
// import axios from 'axios';

export const Product = ({data,handleClick}) => {
    const {image, title, type, categories, price, _id} = data;


    return <Flex bg='#fff' h='250px' borderRadius='25px' shadow={'lg '} p='15px' direction='column' justify='space-between'>
        <Flex justify='space-around' align='center'>
        <Box>
           <Image src={image} alt='image' w='100px' h="100px" 
           onMouseEnter={(e)=>{e.target.src=image}}
           onMouseLeave={(e)=>{e.target.src=image}}
           />
        </Box>
        <Flex direction={'column'}>
            <Box>Price: {price} ₹</Box>
            <Box>For Whom: {type}</Box>
        </Flex>
        </Flex>
        <Box>
            <Flex justify='center'><Text>Name :</Text><Text>{title}</Text></Flex>
            <Box>Categories: {categories}</Box>
        </Box>
        <Flex justify='center' align='baseline' justifySelf={'end'} m='0 auto' w='fit-content' cursor='pointer'>
            <RiDeleteBin5Line size='30px' onClick={()=>handleClick(_id)} />
        </Flex>
    </Flex>
}