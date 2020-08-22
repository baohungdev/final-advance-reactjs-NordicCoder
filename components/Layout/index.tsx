import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: React.FC = ({ children }) => {
  return (
    <Box fontFamily='Open Sans Condensed , sans-serif'>
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
