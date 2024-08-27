import React from "react";
import {Box, Stack} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";


const Home = () =>{

    const checkoutHandler = () => {

    }

    return (
        <>
            <Box>
                <Stack direction={"row"}>
                    <Card amount={5000} img={"https://www.pexels.com/photo/abstract-background-with-swirls-multicolor-splashes-of-paints-3844788/"} checkoutHandler={checkoutHandler}/>
                </Stack>
            </Box>
        </>
    )
};
export default Home;