import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/context/userContext";
import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productsContext";
import { ComprasProvider } from "@/context/comprasContext";
import { SessionProvider } from "next-auth/react";
import { CheckAuth } from "@/components/auth";
import '../styles/globals.css'

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      backgroundContrast:"#2b2d2f"
    },
  }
});

function MyApp({ Component, pageProps: {session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
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
              <Component {...pageProps} />
              </CheckAuth>
            </NextUIProvider>
          </NextThemesProvider>
      </ProductProvider>
      </CartProvider>
      </ComprasProvider>
    </UserProvider>
    </SessionProvider>
  );
}

export default MyApp;
