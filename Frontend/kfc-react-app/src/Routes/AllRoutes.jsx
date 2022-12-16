import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/home/Home";
import { Box, Image } from "@chakra-ui/react";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Box align='center'><Image src="https://webartdevelopers.com/blog/wp-content/uploads/2020/02/404-Error-Lost-And-Alone.gif" alt="Error" /></Box>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
