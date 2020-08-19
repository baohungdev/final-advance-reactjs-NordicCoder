import { Flex, FlexProps } from '@chakra-ui/core';

export const FlexContainer: React.FC<FlexProps> = (props) => (
  <Flex flex='0 1 80rem' {...props}></Flex>
);
