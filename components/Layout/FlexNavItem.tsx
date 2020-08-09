import { Flex, FlexProps } from "@chakra-ui/core";

export const FlexNavItem: React.FC<FlexProps> = (props) => (
  <Flex
    padding="1rem 0.5rem"
    justifyContent="center"
    alignItems="center"
    {...props}
  ></Flex>
);
