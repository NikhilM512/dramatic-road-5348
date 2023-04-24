import {
    Box,
    Center,
    Button,
    Image,
    Heading,
    Stack,
    StackDivider,
    Radio,
    Flex,
    RadioGroup,
} from "@chakra-ui/react";


import React from "react";

import { NavLink } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

const PaymentOption = () => {
    const toast = useToast()
    return (
        <Box margin="30px auto">

            <Flex

                m="auto"
                boxShadow="base"
                justifyContent="center"

                gap={10}
                direction="column"
                p={{ base: "5%" }} w={{ base: "90%", md: "50%" }}
            >
                <Heading size={{ sm: "sm", md: "md" }} color="#e4002b" >Select Your Payment Method..</Heading>
                <RadioGroup  >
                    <Radio color="#e4002b" m="20px auto" value="1">
                        <Flex alignItems="center" gap={4}>
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/3037/3037247.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/2922/2922888.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/177/177025.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/147/147258.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/24/24695.png"
                            />
                        </Flex>
                    </Radio>
                    <hr />
                    <Radio m="20px auto" value="2">
                        <Flex alignItems="center" gap={4}>
                            <Image
                                w="10%"
                                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23fe7a09%22%20d%3D%22M26.26%2045.867a13.116%2013.116%200%200%200-2.483%202.115c-3.234%202.936-6.439%205.904-9.663%208.85a1.042%201.042%200%200%201-.987.518L28.1%205.028l6.455%2012.138c2.225%204.28%204.409%208.581%206.703%2012.823a1.593%201.593%200%200%201-.385%202.37c-4.851%204.375-9.635%208.826-14.442%2013.25a.233.233%200%200%200-.19.275Z%22%2F%3E%3Cpath%20fill%3D%22%23028c3c%22%20d%3D%22M26.432%2045.61c4.807-4.425%209.59-8.876%2014.442-13.252a1.593%201.593%200%200%200%20.385-2.37c-2.294-4.241-4.478-8.542-6.703-12.822l2.757-9.37.27-.918a.679.679%200%200%201%20.51.591q6.47%2012.338%2012.936%2024.679a.953.953%200%200%201-.183%201.41q-13.81%2012.61-27.58%2025.264a.793.793%200%200%201-.6.217c.307-1.09.61-2.181.921-3.27.858-3%201.725-5.996%202.57-8.998a1.024%201.024%200%200%200%20.103-.904l-.018.017c.25.037.174-.15.19-.274Z%22%2F%3E%3Cpath%20fill%3D%22%23fefefe%22%20d%3D%22M26.432%2045.61c-.016.124.06.311-.19.274a.233.233%200%200%201%20.19-.274Z%22%2F%3E%3C%2Fsvg%3E"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png"
                            />
                            <Image
                                w="10%"
                                h="10%"
                                src="https://pixlok.com/wp-content/uploads/2021/05/PhonePe-Icons-PNG-Image-300x300.jpg"
                            />
                        </Flex>
                    </Radio>
                    <hr />
                    <Radio m="20px auto" value="3">
                        <Flex gap={4}>
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/8756/8756558.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/5790/5790705.png"
                            />
                            <Image
                                w="10%"
                                src="https://cdn-icons-png.flaticon.com/512/3262/3262303.png"
                            />
                        </Flex>
                    </Radio>
                    <hr />
                    <Radio m="20px auto" value="4">
                        <Flex gap={4}>
                            <Heading size="md">Cash on Delivery</Heading>
                        </Flex>
                    </Radio>
                    <hr />
                    <><NavLink to="/payment" ><Box w="100%" onClick={() =>
                        toast({
                            position: 'bottom',
                            status: 'success',
                            isClosable: true,
                            duration: 9000,
                            render: () => (
                                <Box p="10px 20px" color='white' bg='green' borderRadius="10px">
                                    <b>Order in Progress Please make payment.</b><br />
                                    <b>We will serve you within 15 minutes</b>
                                </Box>
                            ),
                        })
                    } className="btn_pill">Pay your bill</Box></NavLink></>
                </RadioGroup>
            </Flex>
        </Box>
    );
}

export default PaymentOption