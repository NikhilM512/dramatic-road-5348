import "./home.css";
import React from 'react';
import { Carousels } from "../carousels/Carousels";
import { MenuCards } from "../MenuPageComponents/MenuCard";
import Offer from "../home_footer/Offer";
// import { Button } from '../main_button/Button';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, HStack, Text } from "@chakra-ui/react";

const Home = () => {

  const Auth = useSelector((store) => store.auth.isAuth);
  console.log(Auth)
    const navigate= useNavigate()
  return (
    <>
     <HStack h="77px" bg="black" color="white" display="flex" fontSize={[12,13,16,20]} justifyContent="center" alignItems="center">
                <Text mr="2%">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</Text>
                <Button onClick={() => { navigate('/menu') }} borderRadius="44px" ml="7px" bg="red" fontSize={[12,13,16,20]} _hover={{backgroundColor:"red"}}>Start Order</Button>
      </HStack>
      {/* <div className="black">
        <b>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</b>

        <Button onClick={() => {
          navigate('/menu')
        }}>Start Order</Button>
      </div> */}

      <div className="slider">
        <Carousels
          img1={"./kgf.webp"}
          img2={"./banner2.webp"}
          img3={"./banner3.webp"}
          img4={"./banner4.webp"}
          img5={"./banner5.webp"}
        ></Carousels>
      </div>

      <div className="userDiv">
        <img className="bandImg" src="./band.png" alt="" />
        <h1 className="welcome_text" style={{marginBottom:"2%"}}>
          WELCOME TO KING OF GOOD FOOD
        </h1>
      </div>

      <div className="home_menu">
        <h1 className="browse">BROWSE CATEGORIES</h1>
        <br />
        <div className="home_menu_item">
          <MenuCards img={"./hotdeals.jpg"} title={"HOT DEALS"} ></MenuCards>
          <MenuCards img={"./chickenbucket.jpg"} title={"CHICKEN BUCKETS"}></MenuCards>
          <MenuCards img={"./hotlauches.jpg"} title={"HOT LAUNCHES"}></MenuCards>
          <MenuCards img={"./boxmeal.jpg"} title={" BOX MEALS"}></MenuCards> 
        </div> 

        <div className="home_menu_item">
          <MenuCards img={"./burgers.jpg"} title={"BURGERS"}></MenuCards>
          <MenuCards img={"./biryanibucket.jpg"} title={"BIRIYANI BUCKETS"}></MenuCards>
          <MenuCards img={"./snack.jpg"} title={"SNACK"}></MenuCards>
          <MenuCards img={"./viewallmenu.svg"} title={"View All Menu"}></MenuCards>
        </div>

      </div>

      <Offer />
  
      
    </>
  )
}

export default Home