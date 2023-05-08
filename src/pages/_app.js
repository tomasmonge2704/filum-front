import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/context/userContext";
import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productsContext";
import { CheckAuth } from "@/components/auth";
import '../styles/globals.css'

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartProvider>
      <ProductProvider>
          <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
              light: lightTheme.className,
              dark: darkTheme.className,
            }}
          >
            <NextUIProvider>
              <CheckAuth>
              <Component {...pageProps} />
              </CheckAuth>
            </NextUIProvider>
          </NextThemesProvider>
      </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
