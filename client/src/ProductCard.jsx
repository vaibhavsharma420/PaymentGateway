import { Button, Image, VStack, Text } from "@chakra-ui/react"
import React from "react";

const ProductCard = ({amount,img,checkoutHandler}) =>{
    return (
       
            <VStack>
                <Image src={img}/>
                <Text>{amount}</Text>
                <Button onClick={checkoutHandler}>Buy Now</Button>
            </VStack>
      
    )
}

export default ProductCard;