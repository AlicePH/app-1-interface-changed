import NextLink from 'next/link';
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Stack, Box, Text, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home: NextPage = () => {
  return (
    <Box>
      <Flex 
        minH="100vh" 
        alignItems="center" 
        justifyContent="center"
        bgGradient="linear(to-br, #6366f1, #8b5cf6, #ec4899)"
        css={{
          backgroundSize: "400% 400%",
          animation: `${gradient} 15s ease infinite`
        }}
        position="relative"
        overflow="hidden"
      >
        {/* PNG картинки поверх градиента */}
        <Box position="absolute" top="10%" left="5%" zIndex={1}>
          <Image 
            src="/images/abstract1.png"
            alt="Charity Icon"
            w={{ base: '100px', md: '150px' }}
            opacity={0.8}
          />
        </Box>
        
        <Box position="absolute" top="20%" right="10%" zIndex={1}>
          <Image 
            src="/images/abstract2.png"
            alt="Well-being Icon"
            w={{ base: '80px', md: '120px' }}
            opacity={0.7}
          />
        </Box>
        
        <Box position="absolute" bottom="15%" left="15%" zIndex={1}>
          <Image 
            src="/images/abstract3.png"
            alt="Delivery Icon"
            w={{ base: '120px', md: '180px' }}
            opacity={0.9}
          />
        </Box>

        <Container maxW="container.xl" position="relative" zIndex={2}>
          <Stack spacing={8} align="center" textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading 
                fontSize={{ base: '5xl', md: '7xl' }} 
                color="white"
                textShadow="0 4px 30px rgba(0,0,0,0.15)"
              >
                Revolutionize Subscriptions with NFTs
                <Text as="span" display="block" fontSize="2xl" mt={4}>
                Own, Trade, and Manage Your Subscriptions Like Never Before
                </Text>
              </Heading>
            </motion.div>

            <SimpleGrid 
              columns={{ base: 1, md: 3 }} 
              spacing={8} 
              mt={16}
              w="full"
            >
              {[
                { 
                  title: 'Well-being', 
                  image: '/images/title_wellbeing.png',
                  link: '/gym/gym_index'
                },
                { 
                  title: 'Food Delivery', 
                  image: '/images/title_delivery.png',
                  link: '/food_delivery/food_delivery_index'
                },
                { 
                  title: 'Charity', 
                  image: '/images/title_charity.png',
                  link: '/charity/charity_index'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                >
                  <Button
                    as={NextLink}
                    href={item.link}
                    variant="unstyled"
                    w="full"
                    h="full"
                  >
                    <Box
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      borderRadius="2xl"
                      p={6}
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      w="full"
                      h="full"
                    >
                      <Box
                        h="200px"
                        w="full"
                        borderRadius="xl"
                        mb={4}
                        overflow="hidden"
                      >
                        <Image 
                          src={item.image}
                          alt={item.title}
                          w="full"
                          h="full"
                          objectFit="contain"
                        />
                      </Box>
                      <Text fontSize="xl" color="white" fontWeight="bold">
                        {item.title}
                      </Text>
                    </Box>
                  </Button>
                </motion.div>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Flex>

      {/* Features Section
      <Box py={24} bg="gray.50">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={16}>
            Our Services
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { 
                title: 'Gym', 
                desc: 'Fitness and wellness services for your health'
              },
              { 
                title: 'Food Delivery', 
                desc: 'Fast and reliable food delivery to your door'
              },
              { 
                title: 'Charity', 
                desc: 'Support meaningful causes with our platform'
              }
            ].map((feature, i) => (
              <Box
                key={i}
                p={8}
                bg="white"
                borderRadius="2xl"
                boxShadow="xl"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl'
                }}
              >
                <Box
                  w={16}
                  h={16}
                  mb={6}
                  mx="auto"
                >
                  <Image 
                    src="/images/card.png"
                    alt={feature.title}
                    w="full"
                    h="full"
                    objectFit="contain"
                  />
                </Box>
                <Heading fontSize="xl" mb={4}>
                  {feature.title}
                </Heading>
                <Text color="gray.600">{feature.desc}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box> */}




      {/* Advantages Section */}
      <Box py={24} bg="gray.50">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={16}>
            Why Choose Our Platform?
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { 
                title: 'For Users', 
                desc: 'Full control over subscriptions - buy, sell or trade anytime. Manage all your subscriptions in one place with our intuitive mobile app.'
              },
              { 
                title: 'For Businesses', 
                desc: 'Reduce operational costs with blockchain automation. Access new revenue streams from secondary market transactions and reach wider audiences.'
              },
              { 
                title: 'For Everyone', 
                desc: 'First truly flexible subscription ecosystem powered by NFTs. No more rigid commitments - your subscriptions become liquid digital assets.'
              }
            ].map((feature, i) => (
              <Box
                key={i}
                p={8}
                bg="white"
                borderRadius="2xl"
                boxShadow="xl"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '2xl'
                }}
                minH="300px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading fontSize="xl" mb={4} color="#6366f1">
                  {feature.title}
                </Heading>
                <Text color="gray.600">{feature.desc}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;