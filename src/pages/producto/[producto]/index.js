import NavbarComponent from "@/components/navbar";
import { useContext } from "react";
import { useRouter } from 'next/router';
import { ProductsContext } from "@/context/productsContext";
import { CartContext } from "@/context/cartContext";
import { Text,Button } from "@nextui-org/react";

export default function App() {
  const { products, setProducts } = useContext(ProductsContext);
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const router = useRouter();
  const productoBuscado = products.find(producto => producto._id === router.query.producto);
  const handleAddToCart = () => {
    addToCart(productoBuscado);
  };

  return (
    <>
      <NavbarComponent page="/productos" />
      <Text >{productoBuscado ? productoBuscado.nombre : 'test'}</Text>
      <Button onPress={handleAddToCart} >Agregar al carrito</Button>
    </>
  );
}