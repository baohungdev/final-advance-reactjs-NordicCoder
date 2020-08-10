import { Flex, Link, LinkProps } from "@chakra-ui/core";
import { FlexContainer } from "./FlexContainer";
import { Text } from "@chakra-ui/core";

const UnderlineLink: React.FC<LinkProps> = (props) => (
  <Link textDecoration="underline" {...props}></Link>
);

export const Footer: React.FC = () => {
  return (
    <Flex as="footer" backgroundColor="black" justifyContent="center">
      <FlexContainer flexWrap="wrap" padding="1rem">
        {/* prettier-ignore */}
        <Text color="white" width="full">
            Powered by <UnderlineLink href="https://vercel.com/">vercel</UnderlineLink>
          </Text>
        {/* prettier-ignore */}
        <Text color="white" width="full">
            github: <UnderlineLink href="https://github.com/baohungdev">baohungdev</UnderlineLink>
          </Text>
      </FlexContainer>
    </Flex>
  );
};
