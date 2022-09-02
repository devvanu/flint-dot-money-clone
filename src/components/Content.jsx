import { Heading, Text} from "@chakra-ui/react";

const Content = ({details}) => {
  const title1 = details.title.split(' ').slice(0, 3).join(' ');
  const title2 = details.title.split(' ').slice(3).join(' ');

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
          {title1} <br /> {title2}
        </Heading>
        <Text pb="10" fontSize="2xl">
          {details.text}
        </Text>
    </>
  )
}

export default Content