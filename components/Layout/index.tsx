import { Box } from "@chakra-ui/core";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "@emotion/styled";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box fontFamily="Open Sans Condensed , sans-serif">
      <Header></Header>
      {children}
      <StyledFooter></StyledFooter>
    </Box>
  );
};

const StyledFooter = styled(Footer)`
  flex: 0;
  background-color: green;
`;
