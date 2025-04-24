import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import '../components_new/Sidebar.css';
import { Sidebar } from "../components_new/Sidebar";

export function Navbar() {
    const address = useAddress();

    return(
        <Box
            position="fixed"
            w="100%"
            top={0}
            zIndex="sticky"
            bg="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(10px)"
            borderBottom="1px solid"
            borderColor="gray.100"
            boxShadow="sm"
        >
            <Box maxW="1200px" m="auto" py="10px" px={{ base: "20px", md: "40px" }}>
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center" gap={4}>
                        {/* Sidebar with fixed positioning */}
                        <Box position="relative" mr={4}>
                            <Sidebar />
                        </Box>
                        
                        <Link as={NextLink} href='/'>
                            <Heading size="lg">SubCrypt</Heading>
                        </Link>
                    </Flex>
                    
                    <Flex alignItems="center" gap={6}>
                        <Flex display={{ base: "none", md: "flex" }} gap={6}>
                            <Link as={NextLink} href="/buy">
                                <Text fontWeight="medium">Buy</Text>
                            </Link>
                            <Link as={NextLink} href="/sell">
                                <Text fontWeight="medium">Sell</Text>
                            </Link>
                        </Flex>
                        
                        <ConnectWallet />
                        
                        {address && (
                            <Link as={NextLink} href={`/profile/${address}`}>
                                <Avatar src='https://bit.ly/broken-link' ml="20px" size="sm"/>
                            </Link>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}