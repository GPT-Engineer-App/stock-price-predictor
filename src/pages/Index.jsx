import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

const Index = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const toast = useToast();

  const handlePredictClick = () => {
    if (!stockSymbol.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid stock symbol.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Mock prediction logic
    const randomPrice = (Math.random() * 1000).toFixed(2);
    setPredictedPrice(randomPrice);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Box>
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            NSE Stock Price Predictor <FaChartLine />
          </Text>
        </Box>
        <FormControl id="stock-symbol">
          <FormLabel>Enter Stock Symbol (NSE)</FormLabel>
          <Input type="text" value={stockSymbol} onChange={(e) => setStockSymbol(e.target.value)} placeholder="e.g., RELIANCE" />
        </FormControl>
        <Button colorScheme="blue" onClick={handlePredictClick}>
          Predict Price
        </Button>
        {predictedPrice && (
          <Text fontSize="xl" textAlign="center">
            Predicted Price: ₹ {predictedPrice}
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
