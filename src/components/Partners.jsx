import { Flex, VStack, Heading, Text } from "@chakra-ui/react";

import { partnerDetails } from "../data";
import Carousel from "./Carousel";

const Partners = () => {
  return (
    <>
      <Flex
        h="85vh"
        bg="black"
        w="100%"
        color="white"
        align="center"
        justify="space-between"
      >
        <VStack pl="140px" pr="15" w="50%" align="left" spacing="10">
          <Heading fontSize="5xl">{partnerDetails[0].title}</Heading>
          <Text
            color="whiteAlpha.700"
            letterSpacing="0.5px"
            lineHeight="2"
            fontSize="xl"
          >
            {partnerDetails[0].text}
          </Text>
        </VStack>
        <VStack
          w="40%"
          h="100%"
          pos="relative"
          overflow="hidden"
          align="flex-end"
          justify="center"
        >
          <Carousel />
        </VStack>
      </Flex>
    </>
  );
};

export default Partners;
