import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Card, Container, Flex, Heading, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import NFTGrid from "../../components_new/NFTGrids/gym_NFTGrid";
import SaleInfo from "../../components_new/SaleInfos/gym_SaleInfo";
import { GYM_NFT_COLLECTION_ADDRESS } from "../../const/addresses";

// Keyframe for gradient animation
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function Sell() {
  const { contract } = useContract(GYM_NFT_COLLECTION_ADDRESS);
  const address = useAddress();
  const { data, isLoading } = useOwnedNFTs(contract, address);
  const [selectedNFT, setSelectedNFT] = useState<NFTType>();

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, #6366f1, #8b5cf6, #ec4899)"
      css={{
        backgroundSize: '400% 400%',
        animation: `${gradient} 15s ease infinite`,
      }}
      position="relative"
      pt="80px"
    >
      <Container maxW="1400px" py={12} as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <Heading
            as={motion.h1}
            variants={itemVariants}
            fontSize={{ base: '4xl', md: '6xl' }}
            bgGradient="linear(to-r, white, #f0abfc)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Sell Your NFTs
          </Heading>
          <Text
            as={motion.p}
            variants={itemVariants}
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.800"
            maxW="600px"
          >
            Select which NFT you want to sell from your collection below.
          </Text>
        </VStack>

        {!selectedNFT ? (
          <Box as={motion.div} variants={itemVariants}>
            <NFTGrid
              data={data}
              isLoading={isLoading}
              overrideOnclickBehavior={(nft) => {
                setSelectedNFT(nft);
              }}
              emptyText={"You don't own any NFTs yet from this collection."}
            />
          </Box>
        ) : (
          <Flex justifyContent={"center"} my={10} as={motion.div} variants={cardVariants}>
            <Card w={{ base: "100%", md: "75%" }} bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)" border="1px solid rgba(255, 255, 255, 0.2)">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={5}>
                <Box as={motion.div} whileHover={{ scale: 1.03 }}>
                  <ThirdwebNftMedia
                    metadata={selectedNFT.metadata}
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Stack spacing={4}>
                  <Flex justifyContent={"right"}>
                    <Button
                      onClick={() => {
                        setSelectedNFT(undefined);
                      }}
                      colorScheme="pink"
                      variant="ghost"
                      size="sm"
                      as={motion.button}
                      whileHover={{ scale: 1.1 }}
                    >
                      X
                    </Button>
                  </Flex>
                  <Heading
                    fontSize={{ base: "2xl", md: "3xl" }}
                    bgGradient="linear(to-r, white, #f0abfc)"
                    bgClip="text"
                  >
                    {selectedNFT.metadata.name}
                  </Heading>
                  <SaleInfo
                    nft={selectedNFT}
                  />
                </Stack>
              </SimpleGrid>
            </Card>
          </Flex>
        )}
      </Container>
    </Box>
  );
}