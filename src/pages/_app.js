import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/context/userContext";
import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productsContext";
// 2. Call `createTheme` and pass your custom values
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
              <Component {...pageProps} />
            </NextUIProvider>
          </NextThemesProvider>
      </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp;
