import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import NextLink from 'next/link';
import { Container, Flex, Stack, Heading, Button, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Image
                      src="/images/delivery.png"
                      width={200}
                      height={200} 
                      alt={""}          />
          <Heading>Food Delivery Marketplace</Heading>
          <Text>Subscribe to food delivery or sell your subscription.</Text>
          <Button
            as={NextLink} href='/food_delivery/buy'
          >Buy a subscription</Button>
          <Button
            as={NextLink} href='/food_delivery/sell'
          >Sell a subscription</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
