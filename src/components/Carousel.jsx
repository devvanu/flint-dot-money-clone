import { keyframes, Box, Image } from "@chakra-ui/react"
import { motion } from "framer-motion";

import binance from '../assets/binance.png';


const Carousel = () => {

    const rotate = keyframes`
    0% { transform: rotate(0deg) translate(-0px) rotate(0deg) }
    // 25% { transform: rotate(90deg) translate(-0px) rotate(-90deg) }
    // 50% { transform: rotate(180deg) translate(-0px) rotate(-1800deg) }
    // 75% { transform: rotate(270deg) translate(-0px) rotate(-270deg) }
    // 100% { transform: rotate(360deg) translate(-10px) rotate(-360deg) }
  `;

  const animation = `${rotate} 5s linear infinite`;

  return (
    <Box pos='absolute' left='130px' w='100%' h='50%' border='1px dashed grey' borderRadius='50% 60%' transform='rotate(10deg)' >
        <Box pos='absolute' top='-20px' left='55%' boxSize='50px' bg='red' as={motion.div} animation={animation} />
        <Box pos='absolute' top='-15px' left='22%' boxSize='50px' bg='yellow' as={motion.div} animation={animation} />
        <Box pos='absolute' top='35%' left='-25px' boxSize='50px' bg='pink' as={motion.div} animation={animation} />
        <Box pos='absolute' top='80%' left='20%' boxSize='50px' bg='green' as={motion.div} animation={animation} />
        <Box pos='absolute' top='90%' left='55%' boxSize='50px' bg='purple' as={motion.div} animation={animation} />
    </Box>
  )
}

export default Carousel