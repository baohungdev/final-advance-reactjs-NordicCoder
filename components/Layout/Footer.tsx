import { Flex, Link, LinkProps } from "@chakra-ui/core";
import { FlexContainer } from "./FlexContainer";
import { Text } from "@chakra-ui/core";
import { NavMenu } from "./NavMenu";

const UnderlineLink: React.FC<LinkProps> = (props) => (
  <Link textDecoration="underline" {...props}></Link>
);

export const Footer: React.FC = () => {
  return (
    <>
      <NavMenu display={["flex", null, "none"]} position="fixed" bottom="0" />
      <Flex
        bottom="0"
        width={"100%"}
        as="footer"
        backgroundColor="black"
        justifyContent="center"
        marginBottom={["3rem", null, 0, 0]}
      >
        <FlexContainer flexWrap="wrap" padding="1rem">
          {/* prettier-ignore */}
          <Text color="white" width="full">
            Powered by <UnderlineLink href="https://vercel.com/">vercel</UnderlineLink>
          </Text>
          {/* prettier-ignore */}
          <Text color="white" width="full">
            <a>
              github: <UnderlineLink href="https://github.com/baohungdev">baohungdev</UnderlineLink>
            </a>
            <br/>
            <a>
            Made with ❤️
            </a>
          </Text>
        </FlexContainer>
      </Flex>
    </>
  );
};
