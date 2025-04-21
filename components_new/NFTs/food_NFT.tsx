// import React, { useState, useEffect } from "react";
// import { NFT } from "@thirdweb-dev/sdk";
// import { MARKETPLACE_ADDRESS } from "../../const/addresses";
// import { ThirdwebNftMedia, useContract, useValidDirectListings, useValidEnglishAuctions, useAddress } from "@thirdweb-dev/react";
// import { Box, Flex, Skeleton, Text, HStack } from "@chakra-ui/react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

// type Props = {
//     nft: NFT;
//     contractAddress: string; // Add contract address as prop
//     onClick?: () => void;
// };

// export default function NFTComponent({ nft, contractAddress }: Props) {
//     const address = useAddress();
    
//     const { contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

//     const { data: directListing, isLoading: loadingDirectListing } =
//         useValidDirectListings(marketplace, {
//             tokenContract: contractAddress, // Use passed contract address
//             tokenId: nft.metadata.id,
//         });

//     const { data: auctionListing, isLoading: loadingAuction } =
//         useValidEnglishAuctions(marketplace, {
//             tokenContract: contractAddress, // Use passed contract address
//             tokenId: nft.metadata.id,
//         });


//     return (
//         <Flex direction={"column"} backgroundColor={"EEE"} justifyContent={"center"} padding={"40px"}>
//             <Box borderRadius={"4px"} overflow={"hidden"}>
//                 <ThirdwebNftMedia metadata={nft.metadata} height={"100%"} width={"100%"} />
//             </Box>
            
//             <Text fontSize={"small"} color={"darkgray"}>Token ID #{nft.metadata.id}</Text>
//             <Text fontWeight={"bold"}>{nft.metadata.name}</Text>
//             <Box>
//                 {loadingMarketplace || loadingDirectListing || loadingAuction ? (
//                     <Skeleton></Skeleton>
//                 ) : directListing && directListing[0] ? (
//                     <Box>
//                         <Flex direction={"column"}>
//                             <Text fontSize={"small"}>Price</Text>
//                             <Text fontSize={"small"}>{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</Text>
//                         </Flex>
//                     </Box>
//                 ) : auctionListing && auctionListing[0] ? (
//                     <Box>
//                         <Flex direction={"column"}>
//                             <Text fontSize={"small"}>Minimum Bid</Text>
//                             <Text fontSize={"small"}>{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</Text>
//                         </Flex>
//                     </Box>
//                 ) : (
//                     <Box>
//                         <Flex direction={"column"}>
//                             <Text fontSize={"small"}>Price</Text>
//                             <Text fontSize={"small"}>Not listed</Text>
//                         </Flex>
//                     </Box>
//                 )}
//             </Box>
//         </Flex>
//     )
// }

import React, { useState, useEffect } from "react";
import { NFT } from "@thirdweb-dev/sdk";
import { MARKETPLACE_ADDRESS } from "../../const/addresses";
import { ThirdwebNftMedia, useContract, useValidDirectListings, useValidEnglishAuctions, useAddress } from "@thirdweb-dev/react";
import { Box, Flex, Skeleton, Text, HStack } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type Props = {
    nft: NFT;
    contractAddress: string;
    onClick?: () => void; // Add contract address as prop
};

export default function NFTComponent({ nft, contractAddress }: Props) {
    const address = useAddress();
    const [isFavorite, setIsFavorite] = useState(false);
    
    const { contract: marketplace, isLoading: loadingMarketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const { data: directListing, isLoading: loadingDirectListing } =
        useValidDirectListings(marketplace, {
            tokenContract: contractAddress, // Use passed contract address
            tokenId: nft.metadata.id,
        });

    const { data: auctionListing, isLoading: loadingAuction } =
        useValidEnglishAuctions(marketplace, {
            tokenContract: contractAddress, // Use passed contract address
            tokenId: nft.metadata.id,
        });

    useEffect(() => {
        if (address) {
            const favorites = JSON.parse(localStorage.getItem(`favorites_${address}`) || '{}');
            const compositeKey = `${contractAddress}_${nft.metadata.id}`;
            setIsFavorite(!!favorites[compositeKey]);
        }
    }, [address, contractAddress, nft.metadata.id]);

    const toggleFavorite = () => {
        if (!address) return;
        
        const favorites = JSON.parse(localStorage.getItem(`favorites_${address}`) || '{}');
        const newFavorites = {...favorites};
        const compositeKey = `${contractAddress}_${nft.metadata.id}`;
        
        if (isFavorite) {
            delete newFavorites[compositeKey];
        } else {
            newFavorites[compositeKey] = {
                id: nft.metadata.id,
                name: nft.metadata.name,
                image: nft.metadata.image,
                contractAddress: contractAddress
            };
        }
        
        localStorage.setItem(`favorites_${address}`, JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <Flex direction={"column"} backgroundColor={"EEE"} justifyContent={"center"} padding={"40px"}>
            <Box borderRadius={"4px"} overflow={"hidden"}>
                <ThirdwebNftMedia metadata={nft.metadata} height={"100%"} width={"100%"} />
            </Box>
            
            <HStack spacing={2} align="center" mt={2}>
                <Text fontSize={"small"} color={"darkgray"}>Token ID #{nft.metadata.id}</Text>
                <Box 
                    cursor="pointer"
                    onClick={toggleFavorite}
                    ml={2}
                >
                    {isFavorite ? (
                        <FaHeart color="red" size={16} />
                    ) : (
                        <FaRegHeart color="gray" size={16} />
                    )}
                </Box>
            </HStack>
            
            <Text fontWeight={"bold"}>{nft.metadata.name}</Text>
            <Box>
                {loadingMarketplace || loadingDirectListing || loadingAuction ? (
                    <Skeleton></Skeleton>
                ) : directListing && directListing[0] ? (
                    <Box>
                        <Flex direction={"column"}>
                            <Text fontSize={"small"}>Price</Text>
                            <Text fontSize={"small"}>{`${directListing[0]?.currencyValuePerToken.displayValue} ${directListing[0]?.currencyValuePerToken.symbol}`}</Text>
                        </Flex>
                    </Box>
                ) : auctionListing && auctionListing[0] ? (
                    <Box>
                        <Flex direction={"column"}>
                            <Text fontSize={"small"}>Minimum Bid</Text>
                            <Text fontSize={"small"}>{`${auctionListing[0]?.minimumBidCurrencyValue.displayValue} ${auctionListing[0]?.minimumBidCurrencyValue.symbol}`}</Text>
                        </Flex>
                    </Box>
                ) : (
                    <Box>
                        <Flex direction={"column"}>
                            <Text fontSize={"small"}>Price</Text>
                            <Text fontSize={"small"}>Not listed</Text>
                        </Flex>
                    </Box>
                )}
            </Box>
        </Flex>
    )
}