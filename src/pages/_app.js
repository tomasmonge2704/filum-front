import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/context/userContext";
import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productsContext";
import { ComprasProvider } from "@/context/comprasContext";
import { CheckAuth } from "@/components/auth";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
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
      <ComprasProvider>
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
              <FloatingWhatsApp accountName="Test" />
              <Component {...pageProps} />
              </CheckAuth>
            </NextUIProvider>
          </NextThemesProvider>
      </ProductProvider>
      </CartProvider>
      </ComprasProvider>
    </UserProvider>
  );
}

export default MyApp;
