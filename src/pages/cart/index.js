import NavbarComponent from "@/components/navbar";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import { Text } from "@nextui-org/react";
export default function App() {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  return (
    <>
    <NavbarComponent page="/cart" />
    <Text>{JSON.stringify(cart)}</Text>
    </>
  );
}