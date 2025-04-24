// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Container, Heading, Text, Select, Flex, Box, VStack } from "@chakra-ui/react";
// import { keyframes } from "@emotion/react";
// import NFTGrid from "../../components_new/NFTGrids/gym_NFTGrid";
// import { GYM_NFT_COLLECTION_ADDRESS, MARKETPLACE_ADDRESS } from "../../const/addresses";
// import { useContract, useNFTs, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
// import { NFT as NFTType } from "@thirdweb-dev/sdk";

// // Keyframe for gradient animation
// const gradient = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// // Animation variants for elements
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.5 },
//   },
// };

// export default function Buy() {
//     const { contract } = useContract(GYM_NFT_COLLECTION_ADDRESS);
//     const { data: nfts, isLoading } = useNFTs(contract);
//     const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");
//     const [sortOption, setSortOption] = useState<string>("default");
//     const [sortedNFTs, setSortedNFTs] = useState<NFTType[] | undefined>(undefined);

//     const { data: directListings } = useValidDirectListings(marketplace, {
//         tokenContract: GYM_NFT_COLLECTION_ADDRESS,
//     });
//     const { data: auctionListings } = useValidEnglishAuctions(marketplace, {
//         tokenContract: GYM_NFT_COLLECTION_ADDRESS,
//     });

//     useEffect(() => {
//         if (!nfts) {
//             setSortedNFTs(undefined);
//             return;
//         }

//         const priceMap = new Map<string, number>();

//         directListings?.forEach(listing => {
//             priceMap.set(listing.tokenId, parseFloat(listing.currencyValuePerToken.displayValue));
//         });

//         auctionListings?.forEach(listing => {
//             if (!priceMap.has(listing.tokenId)) {
//                 priceMap.set(listing.tokenId, parseFloat(listing.minimumBidCurrencyValue.displayValue));
//             }
//         });

//         const nftsWithPrices = nfts.map(nft => ({
//             ...nft,
//             price: priceMap.get(nft.metadata.id) || 0
//         }));

//         let sorted;
//         switch (sortOption) {
//             case "priceLowHigh":
//                 sorted = [...nftsWithPrices].sort((a, b) => a.price - b.price);
//                 break;
//             case "priceHighLow":
//                 sorted = [...nftsWithPrices].sort((a, b) => b.price - a.price);
//                 break;
//             default:
//                 sorted = nfts;
//         }
//         setSortedNFTs(sorted);
//     }, [nfts, sortOption, directListings, auctionListings]);

//     return (
//         <Box
//             minH="100vh"
//             bgGradient="linear(to-br, #6366f1, #8b5cf6, #ec4899)"
//             css={{
//                 backgroundSize: '400% 400%',
//                 animation: `${gradient} 15s ease infinite`,
//             }}
//             position="relative"
//             pt="80px"
//         >
//             <Container 
//                 maxW="1400px" 
//                 py={12} 
//                 as={motion.div} 
//                 variants={containerVariants} 
//                 initial="hidden" 
//                 animate="visible"
//             >
//                 {/* Header Section */}
//                 <VStack spacing={6} textAlign="center" mb={12}>
//                     <Heading
//                         as={motion.h1}
//                         variants={itemVariants}
//                         fontSize={{ base: '4xl', md: '6xl' }}
//                         bgGradient="linear(to-r, white, #f0abfc)"
//                         bgClip="text"
//                         fontWeight="extrabold"
//                     >
//                         Discover & Collect Gym NFTs
//                     </Heading>
//                     <Text
//                         as={motion.p}
//                         variants={itemVariants}
//                         fontSize={{ base: 'lg', md: 'xl' }}
//                         color="whiteAlpha.800"
//                         maxW="600px"
//                     >
//                         Own a piece of the fitness revolution with our exclusive collection of Gym NFTs.
//                     </Text>
//                 </VStack>

//                 {/* Sort Controls */}
//                 <Flex 
//                     justify="flex-end" 
//                     mb={8}
//                     as={motion.div}
//                     variants={itemVariants}
//                 >
//                     <Flex align="center">
//                         <Text whiteSpace="nowrap" mr={2} color="whiteAlpha.800">Sort by:</Text>
//                         <Select
//                             width="200px"
//                             value={sortOption}
//                             onChange={(e) => setSortOption(e.target.value)}
//                             bg="whiteAlpha.200"
//                             color="white"
//                             borderColor="whiteAlpha.300"
//                             _hover={{ borderColor: 'whiteAlpha.400' }}
//                             _focus={{ borderColor: 'whiteAlpha.500' }}
//                         >
//                             <option value="default" style={{ background: '#4f46e5' }}>Default</option>
//                             <option value="priceLowHigh" style={{ background: '#4f46e5' }}>Price: Low to High</option>
//                             <option value="priceHighLow" style={{ background: '#4f46e5' }}>Price: High to Low</option>
//                         </Select>
//                     </Flex>
//                 </Flex>

//                 {/* NFT Grid Section */}
//                 <Box as={motion.div} variants={itemVariants}>
//                     <NFTGrid
//                         isLoading={isLoading}
//                         data={sortedNFTs || nfts}
//                         emptyText={"No NFTs found"}
//                     />
//                 </Box>
//             </Container>
//         </Box>
//     );
// }


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Heading, Text, Select, Flex, Box, VStack, Center } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import NFTGrid from "../../components_new/NFTGrids/gym_NFTGrid";
import { GYM_NFT_COLLECTION_ADDRESS, MARKETPLACE_ADDRESS } from "../../const/addresses";
import { useContract, useNFTs, useValidDirectListings, useValidEnglishAuctions } from "@thirdweb-dev/react";
import { NFT as NFTType } from "@thirdweb-dev/sdk";

// Keyframe for gradient animation
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Animation variants for elements
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

export default function Buy() {
    const { contract } = useContract(GYM_NFT_COLLECTION_ADDRESS);
    const { data: nfts, isLoading } = useNFTs(contract);
    const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");
    const [sortOption, setSortOption] = useState<string>("default");
    const [sortedNFTs, setSortedNFTs] = useState<NFTType[] | undefined>(undefined);

    const { data: directListings } = useValidDirectListings(marketplace, {
        tokenContract: GYM_NFT_COLLECTION_ADDRESS,
    });
    const { data: auctionListings } = useValidEnglishAuctions(marketplace, {
        tokenContract: GYM_NFT_COLLECTION_ADDRESS,
    });

    useEffect(() => {
        if (!nfts) {
            setSortedNFTs(undefined);
            return;
        }

        const priceMap = new Map<string, number>();

        directListings?.forEach(listing => {
            priceMap.set(listing.tokenId, parseFloat(listing.currencyValuePerToken.displayValue));
        });

        auctionListings?.forEach(listing => {
            if (!priceMap.has(listing.tokenId)) {
                priceMap.set(listing.tokenId, parseFloat(listing.minimumBidCurrencyValue.displayValue));
            }
        });

        const nftsWithPrices = nfts.map(nft => ({
            ...nft,
            price: priceMap.get(nft.metadata.id) || 0
        }));

        let sorted;
        switch (sortOption) {
            case "priceLowHigh":
                sorted = [...nftsWithPrices].sort((a, b) => a.price - b.price);
                break;
            case "priceHighLow":
                sorted = [...nftsWithPrices].sort((a, b) => b.price - a.price);
                break;
            default:
                sorted = nfts;
        }
        setSortedNFTs(sorted);
    }, [nfts, sortOption, directListings, auctionListings]);

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
            pb={12}
        >
            <Container 
                maxW="1400px" 
                py={12} 
                as={motion.div} 
                variants={containerVariants} 
                initial="hidden" 
                animate="visible"
            >
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
                        Revolutionize Your Gym Experience
                    </Heading>
                    <Text
                        as={motion.p}
                        variants={itemVariants}
                        fontSize={{ base: 'lg', md: 'xl' }}
                        color="whiteAlpha.800"
                        maxW="800px"
                    >
                        NFT-powered memberships that give you unprecedented freedom and flexibility
                    </Text>
                </VStack>

                {/* Value Proposition Section */}
                <Center mb={12}>
                    <Box
                        bg="whiteAlpha.100"
                        backdropFilter="blur(10px)"
                        borderRadius="2xl"
                        p={8}
                        maxW="900px"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                        as={motion.div}
                        variants={itemVariants}
                    >
                        <VStack spacing={6} textAlign="center">
                            <Heading size="lg" color="white">
                                Why NFT Gym Memberships?
                            </Heading>
                            <Text color="whiteAlpha.800">
                                Traditional gym memberships lock you into rigid contracts with no flexibility. 
                                With NFT memberships, you own your subscription as a digital asset that you 
                                can sell or transfer anytime.
                            </Text>
                            <Text color="whiteAlpha.800">
                                For gym owners, NFT memberships eliminate paperwork, reduce administrative 
                                costs, and create new revenue streams from secondary market transactions.
                            </Text>
                            <Text color="whiteAlpha.800" fontWeight="bold">
                                Your fitness journey, your rules. Buy, sell, or trade your membership 
                                without restrictions.
                            </Text>
                        </VStack>
                    </Box>
                </Center>

                {/* Sort Controls - Centered */}
                <Center mb={8}>
                    <Flex 
                        align="center"
                        as={motion.div}
                        variants={itemVariants}
                    >
                        <Text whiteSpace="nowrap" mr={2} color="whiteAlpha.800">Sort by:</Text>
                        <Select
                            width="200px"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            bg="whiteAlpha.200"
                            color="white"
                            borderColor="whiteAlpha.300"
                            _hover={{ borderColor: 'whiteAlpha.400' }}
                            _focus={{ borderColor: 'whiteAlpha.500' }}
                        >
                            <option value="default" style={{ background: '#4f46e5' }}>Default</option>
                            <option value="priceLowHigh" style={{ background: '#4f46e5' }}>Price: Low to High</option>
                            <option value="priceHighLow" style={{ background: '#4f46e5' }}>Price: High to Low</option>
                        </Select>
                    </Flex>
                </Center>

                {/* NFT Grid Section with Background */}
                <Box 
                    as={motion.div} 
                    variants={itemVariants}
                    bg="whiteAlpha.100"
                    backdropFilter="blur(10px)"
                    borderRadius="3xl"
                    p={8}
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                >
                    <NFTGrid
                        isLoading={isLoading}
                        data={sortedNFTs || nfts}
                        emptyText={"No NFTs found"}
                    />
                </Box>

                {/* Call to Action */}
                <Center mt={12}>
                    <Box textAlign="center" maxW="800px">
                        <Heading size="lg" color="white" mb={4}>
                            Ready to Transform Your Fitness Journey?
                        </Heading>
                        <Text fontSize="xl" color="whiteAlpha.800" mb={6}>
                            Browse our collection of NFT gym memberships and experience the future 
                            of flexible fitness subscriptions today.
                        </Text>
                    </Box>
                </Center>
            </Container>
        </Box>
    );
}