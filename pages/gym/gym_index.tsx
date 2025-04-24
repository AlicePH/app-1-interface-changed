import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { NextPage } from "next";
import NextLink from 'next/link';
import { Container, Flex, Heading, Button, Text, Box, VStack } from "@chakra-ui/react";

// Keyframe для анимации градиента
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Кастомный компонент кнопки с правильными типами
const MotionLinkButton = motion(
  React.forwardRef<HTMLButtonElement, any>((props, ref) => (
    <Button 
      as={NextLink} 
      ref={ref}
      {...props}
    />
  ))
);

// Варианты анимации с правильными типами
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6, // Перенесено сюда
      ease: "easeOut"
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const Home: NextPage = () => {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, #6366f1, #8b5cf6, #ec4899)"
      css={{
        backgroundSize: '400% 400%',
        animation: `${gradient} 15s ease infinite`,
      }}
      position="relative"
    >
      <Container 
        maxW="container.xl" 
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <VStack 
          spacing={8} 
          textAlign="center"
          maxW="800px"
        >
          <Box 
            as={motion.div}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/dumbbell.png"
              width={200}
              height={200} 
              alt="Gym Logo"
              priority
            />
          </Box>

          <Heading
            as={motion.h1}
            variants={itemVariants}
            fontSize={{ base: '4xl', md: '6xl' }}
            bgGradient="linear(to-r, white, #f0abfc)"
            bgClip="text"
            fontWeight="extrabold"
            lineHeight="1.2"
          >
            Gym NFT Marketplace
          </Heading>

          <Text
            as={motion.p}
            variants={itemVariants}
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.800"
            maxW="600px"
          >
            Buy, sell, or trade your gym memberships as NFTs in our decentralized marketplace.
          </Text>

          <Flex 
            direction={{ base: 'column', md: 'row' }}
            gap={4}
            as={motion.div}
            variants={itemVariants}
          >
            <MotionLinkButton
              href="/gym/buy"
              size="lg"
              colorScheme="whiteAlpha"
              variant="outline"
              _hover={{ bg: 'whiteAlpha.200' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Membership
            </MotionLinkButton>

            <MotionLinkButton
              href="/gym/sell"
              size="lg"
              bgGradient="linear(to-r, #ec4899, #8b5cf6)"
              _hover={{ bgGradient: 'linear(to-r, #db2777, #7c3aed)' }}
              color="white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sell Membership
            </MotionLinkButton>
          </Flex>

          <Box
            as={motion.div}
            variants={itemVariants}
            mt={8}
          >
            <ConnectWallet 
              theme="dark"
              btnTitle="Connect Wallet"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Home;