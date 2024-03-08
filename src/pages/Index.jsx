import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

import { Select } from "@chakra-ui/react";

const Index = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [timePeriod, setTimePeriod] = useState("1d");
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

    // Simulate more realistic prediction based on the selected time period
    const basePrice = 500;

    const fluctuationPercentage =
      {
        "1d": 0.05,
        "1w": 0.1,
        "1m": 0.15,
        "3m": 0.2,
        "6m": 0.25,
        "1y": 0.3,
      }[timePeriod] || 0.05;
    const fluctuation = (basePrice * fluctuationPercentage * (Math.random() - 0.5) * 2).toFixed(2);
    const realisticPrice = (basePrice + parseFloat(fluctuation)).toFixed(2);
    setPredictedPrice(realisticPrice);
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
        <FormControl id="time-period">
          <FormLabel>Select Time Period</FormLabel>
          <Select placeholder="Select time period" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
            <option value="1d">1 Day</option>
            <option value="1w">1 Week</option>
            <option value="1m">1 Month</option>
            <option value="3m">3 Months</option>
            <option value="6m">6 Months</option>
            <option value="1y">1 Year</option>
          </Select>
        </FormControl>
        <Button colorScheme="blue" onClick={handlePredictClick}>
          Predict Price
        </Button>
        {predictedPrice && (
          <Box>
            <Text fontSize="xl" textAlign="center">
              Predicted Price for {timePeriod}: ₹ {predictedPrice}
            </Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
