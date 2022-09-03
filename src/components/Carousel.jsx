import { Stack, keyframes, Box, Image } from "@chakra-ui/react"

import binance from '../assets/binance.png';
import coinbase from '../assets/coinbase.png';
import ftx from '../assets/ftx.png';
import polygon from '../assets/polygon.png';
import solana from '../assets/solana.png';

const Carousel = () => {

    const rotate = keyframes`
    0% { transform: translate(7px); }
    25% { transform: translate(14px); }
    50% { transform: translate(21px); }
    75% { transform: translate(14px); }
    100% { transform: translate(7px); }
  `;

  const styles = {
    pos: 'absolute',
    boxSize: '80px',
    animation: `${rotate} 3s linear infinite`
  }

  return (
    <Stack pos='absolute' left='130px' w='100%' h='50%' border='1px dashed grey' borderRadius='50% 60%' transform='rotate(10deg)' >
        <Image sx={styles} src={ftx} top='-30px' left='55%' />
        <Image sx={styles} src={solana} top='-35px' left='22%' />
        <Image sx={styles} src={binance} top='35%' left='-35px' />
        <Image sx={styles} src={coinbase} top='75%' left='20%' />
        <Image sx={styles} src={polygon} top='80%' left='55%' />
    </Stack>
  )
}

export default Carousel