import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import axios from "axios";


const Home = () =>{

    const checkoutHandler = async (amount) => {

        const {data} = await axios.post("https://localhost:4000/api/checkout",{
             amount 
        })
        console.log(data);
    }

    return (
        <>
            <Box>
                <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column","row"]}>
                    <ProductCard amount={5000} img={"./Logo.png"} checkoutHandler={checkoutHandler}/>
                    <ProductCard amount={5000} img={"./Logo.png"} checkoutHandler={checkoutHandler}/>
                </Stack>
            </Box>
        </>
    )
};
export default Home;