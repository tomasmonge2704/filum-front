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
const weedTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      backgroundContrast:"#108944"
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
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
                      dark: darkTheme.className,
                      weed: weedTheme.className
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
