import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

const Index = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const toast = useToast();

  // Simulated more realistic stock price prediction
  const simulatePricePrediction = (symbol) => {
    const basePrice = 500;
    const dailyFluctuation = Math.random() * 20 - 10;
    const simulatedPrice = (basePrice + dailyFluctuation).toFixed(2);
    return simulatedPrice;
  };

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

    const predictedPrice = simulatePricePrediction(stockSymbol);
    setPredictedPrice(predictedPrice);
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
          <VStack spacing={4}>
            <Text fontSize="xl" textAlign="center">
              Predicted Price: ₹ {predictedPrice}
            </Text>
            <Box boxSize="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/static/stock-graph-placeholder.png" alt="Stock graph" />
            </Box>
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
