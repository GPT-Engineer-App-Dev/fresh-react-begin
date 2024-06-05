import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Text fontSize="xl" fontWeight="bold">My Website</Text>
          <Flex>
            <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Home</Link>
            <Link as={RouterLink} to="/about" p={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>About</Link>
            <Link as={RouterLink} to="/contact" p={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Contact</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" minH="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is a simple, responsive layout using Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" p={4}>
        <Container maxW="container.lg">
          <Text textAlign="center">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;