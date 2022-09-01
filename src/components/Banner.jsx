import { Button, VStack, Heading, Flex, Input, Text, Stack} from "@chakra-ui/react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Banner = () => {
  return (
    <Stack h="100vh" bg="black" color="white">
      <VStack h="100%" align="center" justify="center">
        <Heading
          mb="5"
          textAlign="center"
          lineHeight="1.25"
          fontSize="7xl"
          letterSpacing="-1.5px"
          fontWeight="800"
        >
          Earn crypto every <br /> second on Flint
        </Heading>
        <Text pb="10" fontSize="2xl">
          No lock-in. No hidden fees. Only secure yields for your crypto.
        </Text>
        <Stack direction='row' spacing='8' justify="space-between" >
          <Input
            size="lg"
            borderColor="whiteAlpha.400"
            focusBorderColor="whiteAlpha.600"
            borderRadius="25px"
            bg="whiteAlpha.300"
            type="email"
            placeholder="Enter your email"
          />
          <Button px='20' py='6' borderRadius='25px' color='black' rightIcon={<MdOutlineArrowRightAlt style={{ fontSize: "35px" }} />}>
            Start earning
          </Button>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default Banner;
