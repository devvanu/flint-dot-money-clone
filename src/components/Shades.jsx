import {Box} from "@chakra-ui/react";

const Shades = () => {
  return (
    <>
        <Box
          position="absolute"
          left='10%'
          top="10%"
          bgGradient="radial-gradient(rgb(209 111 151 / 30%),transparent, transparent);"
          w="60%"
          h="900"
        ></Box>
        <Box
          position="absolute"
          right='10%'
          top="10%"
          bgGradient="radial-gradient(rgb(91 128 200 / 30%),transparent, transparent);"
          w="60%"
          h="900"
        ></Box>
    </>
  )
}

export default Shades