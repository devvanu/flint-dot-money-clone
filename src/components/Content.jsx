import { Heading, Text} from "@chakra-ui/react";

const Content = () => {
  return (
    <>
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
    </>
  )
}

export default Content