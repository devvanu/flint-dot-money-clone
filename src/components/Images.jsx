import { Box, Image, keyframes } from "@chakra-ui/react"

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const Images = () => {

  const rotate = keyframes`
    0% { transform: translateY(6px); }
    25% { transform: translateY(10px); }
    50% { transform: translateY(15px); }
    75% { transform: translateY(10px); }
    100% { transform: translateY(6px); }
  `;

  const imageStyle = {
    w:'150px',
    h:'150px',
    // maxW: '10vw',
    // minW: '5vw',
    pos: 'absolute',
    animation: `${rotate} 4s linear infinite`
  }

  return (
    <Box pos='absolute' w='100vw'>
        <Image src={image1} sx={imageStyle} top='80px' left='130px' /> 
        <Image src={image2} sx={imageStyle} top='80px' right='130px' /> 
        <Image src={image3} sx={imageStyle} bottom='-580px' /> 
        <Image src={image4} sx={imageStyle} bottom='-580px' right='0px' /> 
    </Box>
  )
}

export default Images