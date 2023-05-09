import NavbarComponent from "@/components/navbar";
import { useContext } from "react";
import { useRouter } from 'next/router';
import { ProductsContext } from "@/context/productsContext";
import { Spacer } from "@nextui-org/react";
import ProductDetail from "@/components/producto/detail";

export default function App() {
  const { products } = useContext(ProductsContext);
  const router = useRouter();
  const productoBuscado = products.find(producto => producto._id === router.query.producto);

  return (
    <>
    <NavbarComponent page="/productos" />
    <Spacer y={3} />
    <ProductDetail product={productoBuscado}/>
  </>
  );
}