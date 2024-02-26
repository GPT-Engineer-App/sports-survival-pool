import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaTrophy, FaUserFriends, FaClipboardList } from "react-icons/fa";

const Index = () => {
  const bannerImage = "https://images.unsplash.com/photo-1660006335321-5c523a58accf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMGFlcmlhbCUyMHZpZXd8ZW58MHx8fHwxNzA4OTE4MjUwfDA&ixlib=rb-4.0.3&q=80&w=1080";
  const cardBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.xl">
      <VStack spacing={8}>
        <Box w="full" h="400px" bgImage={bannerImage} bgPos="center" bgSize="cover" position="relative" borderRadius="lg" overflow="hidden">
          <Box bg="blackAlpha.600" w="full" h="full" position="absolute" top="0" left="0" />
          <Flex h="full" direction="column" justifyContent="center" alignItems="center" position="relative" textAlign="center">
            <Heading as="h1" size="2xl" color="white">
              Join the Ultimate Sports Survival Pool
            </Heading>
            <Text fontSize="xl" color="gray.200" mt={4}>
              Prove your sports knowledge and compete with friends!
            </Text>
            <Button mt={8} size="lg" colorScheme="blue" leftIcon={<FaUserFriends />}>
              Sign Up Now
            </Button>
          </Flex>
        </Box>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
          <Flex p={8} flex="1" direction="column" alignItems="center" justifyContent="center" bg={cardBg} borderRadius="xl" boxShadow="lg">
            <FaTrophy size="3rem" />
            <Heading as="h3" size="lg" mt={4}>
              Prizes
            </Heading>
            <Text mt={2} textAlign="center">
              Win big with our weekly and season-long prizes.
            </Text>
          </Flex>

          <Flex p={8} flex="1" direction="column" alignItems="center" justifyContent="center" bg={cardBg} borderRadius="xl" boxShadow="lg">
            <FaClipboardList size="3rem" />
            <Heading as="h3" size="lg" mt={4}>
              How to Play
            </Heading>
            <Text mt={2} textAlign="center">
              Pick a team to win each week and survive to the end.
            </Text>
          </Flex>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
