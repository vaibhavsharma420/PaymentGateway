import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import ProductCard from "./ProductCard";


const Home = () =>{

    const checkoutHandler = () => {

    }

    return (
        <>
            <Box>
                <Stack>
                    <ProductCard amount={5000} img={"./Logo.png"} checkoutHandler={checkoutHandler}/>
                </Stack>
            </Box>
        </>
    )
};
export default Home;  