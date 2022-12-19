import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/home/Home";
import Account from "../Pages/Account";
import Cart from "../Pages/Cart";
import { Menu } from "../Pages/Menu";
import { Box, Image } from "@chakra-ui/react";
import { Deals } from "../Pages/Deals";
import Login from "../Pages/signup_login/Login";
import SignUp from "../Pages/signup_login/signup";
import { Admin } from "../Components/Admin/Admin";
import PaymentOption from "../Pages/payment/paymentOption";
import CardPayment from "../Pages/payment/CardPayment";
import Confirmation from "../Pages/payment/Confirmationpage";
import RequireAuth from "../Components/RequireAuth/RequireAuth";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={ <RequireAuth>< Menu /></RequireAuth> }/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<PaymentOption />} />
        <Route path="/payment" element={<CardPayment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Box align='center'><Image src="https://webartdevelopers.com/blog/wp-content/uploads/2020/02/404-Error-Lost-And-Alone.gif" alt="Error" /></Box>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;