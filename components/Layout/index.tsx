import { Box } from "@chakra-ui/core";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box fontFamily="Open Sans Condensed, sans-serif">
      <Header></Header>
      {children}
      <Footer></Footer>
    </Box>
  );
};
