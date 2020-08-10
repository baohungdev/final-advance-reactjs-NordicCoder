import { Flex, FlexProps } from "@chakra-ui/core";

/**
 * FlexContainer is a flex <div> to set max width.
 * components having content should put in this FlexContainer
 *
 * Real world html structure:
 *
 * html -> body -> header || section || footer -> this FlexContainer component -> other UI components
 */
export const FlexContainer: React.FC<FlexProps> = (props) => (
  <Flex flex="0 1 80rem" {...props}></Flex>
);
