import NavbarComponent from "@/components/navbar";
import { useContext } from "react";
import { useRouter } from 'next/router';
import { ProductsContext } from "@/context/productsContext";
import { CartContext } from "@/context/cartContext";
import { Spacer } from "@nextui-org/react";
import ProductDetail from "@/components/producto/detail";

export default function App() {
  const { products, setProducts } = useContext(ProductsContext);
  const {  addToCart } = useContext(CartContext);
  const router = useRouter();
  const productoBuscado = products.find(producto => producto._id === router.query.producto);
  const handleAddToCart = () => {
    addToCart(productoBuscado);
  };

  return (
    <>
    <NavbarComponent page="/productos" />
    <Spacer y={3} />
    <ProductDetail product={productoBuscado} handleAddToCart={handleAddToCart}/>
  </>
  );
}