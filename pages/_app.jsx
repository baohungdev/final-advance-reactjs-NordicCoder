import React from "react";
import NextApp from "next/app";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { theme } from "../theme/theme";
import CartProvider from "../providers/cart/cart.provider";
class App extends NextApp {
  render() {
    const { Component } = this.props;
    return (
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ColorModeProvider>
            <Component />
          </ColorModeProvider>
        </ThemeProvider>
      </CartProvider>
    );
  }
}

export default App;
