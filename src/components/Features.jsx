import { VStack, Flex, Stack, Heading, Text, Image } from "@chakra-ui/react";

import { featureDetails } from "../data";
import image from '../assets/img.png'

const Features = () => {
  return (
    <Flex bg="black" px="8%" pt='8%' w="100%" color='white'>
      <Stack w="50%">
        <VStack w="100%" position="sticky" top="50px" h="100vh" justify='center'>
            <Image src={image} alt='image' boxSize='300px'  />
        </VStack>
      </Stack>
      <VStack w="50%" >
        {
            featureDetails.map(item=> 
                <VStack key={item.title} w='100%' h="100vh" justify='center' p='6%' spacing='6'>
                    <Heading letterSpacing='-2px' fontSize='5xl'>{item.title}</Heading>
                    <Text color='whiteAlpha.600' fontSize='xl'>{item.text}</Text>
                </VStack>
            )
        }
      </VStack>
    </Flex>
  );
};

export default Features;
