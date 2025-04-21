import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import NextLink from 'next/link';
import { Container, Flex, Stack, Heading, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";



const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
      <Stack align={"center"} spacing={4}>
        <Image
                              src="/images/card.png"
                              width={200}
                              height={200} 
                              alt={""}          />
      <Heading>Marketplace</Heading>
      <Stack direction={"row"} spacing={"8"}>
      <Button
            as={NextLink} href='/gym/gym_index'
          >Gym</Button>
      <Button
            as={NextLink} href='/food_delivery/food_delivery_index'
          >Food delivery</Button>
      <Button
            as={NextLink} href='/charity/charity_index'
          >Charity</Button>
      </Stack>
      </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
