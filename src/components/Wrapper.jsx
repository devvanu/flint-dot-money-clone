import { VStack, Stack} from "@chakra-ui/react";

const Wrapper = (props) => {
    return (
        <Stack bg="black" pt='60px' color="white" position='relative' overflow='hidden'>
          {props.shades}
    
          <VStack h='90vh' align="center" justify="center">
            {props.content}
            
            <Stack direction="row" spacing="8" justify="space-between">
              {props.form}
            </Stack>
          </VStack>
        </Stack>
    );
}

export default Wrapper