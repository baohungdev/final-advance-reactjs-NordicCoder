import { Box } from "@chakra-ui/core";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Box>
  );
};
