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
                      src="/images/charity.png"
                      width={200}
                      height={200} 
                      alt={""}          />
          <Heading>Charity Donations Marketplace</Heading>
          <Text>Donate your NFTs or buy one to donate money.</Text>
          <Button
            as={NextLink} href='/charity/buy'
          >Buy NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
