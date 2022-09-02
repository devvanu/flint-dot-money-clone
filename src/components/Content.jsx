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
          fontSize={{base: '4xl', md: '5xl', lg: '7xl'}}
          letterSpacing="-1.5px"
          fontWeight="800"
        >
          {title1} <br /> {title2}
        </Heading>
        <Text px='10' pb="10" textAlign='center' fontSize={{base: 'md', md: 'xl', lg: '2xl'}}>
          {details.text}
        </Text>
    </>
  )
}

export default Content