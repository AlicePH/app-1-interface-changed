import { Avatar, Box, Flex, Heading, Link, Text, Stack } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';

export function BottomBar() {
    const address = useAddress();

    return(
        <Box position={"fixed"} 
        bottom={0} 
        width={"100%"} 
        bg={"black"} 
        color={"white"}
        borderTop={"1px solid"} 
        borderColor={"gray.300"} 
        py={"10px"} 
        px={"40px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Stack direction={"row"} spacing={"4"}>
                    <Link as={NextLink} href='/references' mx={2.5}>
                        <Text>References</Text>
                    </Link>
                    <Link as={NextLink} href='/about' mx={2.5}>
                        <Text>About us</Text>
                    </Link>
                    </Stack>
                    <Flex>
                        <Text>Moscow, 2025</Text>
                    </Flex>
            </Flex>
        </Box>
    )
}

