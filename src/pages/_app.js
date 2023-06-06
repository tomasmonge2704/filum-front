import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/context/userContext";
import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productsContext";
import { ComprasProvider } from "@/context/comprasContext";
import { CompraProvider } from "@/context/compraContext";
import { SessionProvider } from "next-auth/react";
import { CheckAuth } from "@/components/auth";
import { useRouter } from "next/router";
import NavbarComponent from "@/components/navbar";
import "../styles/globals.css";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      backgroundContrast: "#2b2d2f",
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <CheckAuth>
          <CompraProvider>
            <ComprasProvider>
              <CartProvider>
                <ProductProvider>
                  <NextThemesProvider
                    defaultTheme="system"
                    attribute="class"
                    value={{
                      light: lightTheme.className,
                      dark: darkTheme.className
                    }}
                  >
                    <NextUIProvider>
                      {router.pathname == "/signup" ||
                      router.pathname == "/login" ? (
                        <></>
                      ) : (
                        <NavbarComponent />
                      )}
                      <Component {...pageProps} />
                    </NextUIProvider>
                  </NextThemesProvider>
                </ProductProvider>
              </CartProvider>
            </ComprasProvider>
          </CompraProvider>
        </CheckAuth>
      </UserProvider>
    </SessionProvider>
  );
}

export default MyApp;
