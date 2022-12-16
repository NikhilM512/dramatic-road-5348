import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Button,
  Flex,
  Center,
  Image,
  Text,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { Container, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar({ price, handleClick, ID, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  const navigate = useNavigate();

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4"></Stack>
      </RadioGroup>
      <Button
        w="50px"
        colorScheme="red"
        bgColor="black"
        color="white"
        onClick={onOpen}
      >
        <HamburgerIcon w="50px" />{" "}
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justifyContent="space-between">
              <Flex>
                <Center>
                  <span>
                    <img src="/login2.png" alt="" />
                  </span>
                  <Link
                    className="link"
                    onClick={onClose}
                    to={ID ? "/" : "/signup"}
                  >
                    {name}
                  </Link>
                  {ID ? (
                    <Link onClick={onClose}>
                      <Button
                        colorScheme="red"
                        onClick={handleClick}
                        color="white"
                        bgColor="black"
                      >
                        Signout
                      </Button>
                    </Link>
                  ) : (
                    ""
                  )}{" "}
                </Center>
              </Flex>

              <Flex>
                <Center>
                  <h6>₹ {price}</h6>
                  <Link to="/cart" bgColor="white" w="70px" onClick={onClose}>
                    <Image w="45px" src="/cart.svg" alt="" />
                  </Link>{" "}
                </Center>
              </Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Center>
              <Grid gap="20px">
                <Button bgColor="grey">
                  <Link className="link" to="/menu" onClick={onClose}>
                    Menu
                  </Link>
                </Button>
                <Button bgColor="grey">
                  <Link className="link" to="/deals" onClick={onClose}>
                    Deals
                  </Link>{" "}
                </Button>{" "}
              </Grid>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
