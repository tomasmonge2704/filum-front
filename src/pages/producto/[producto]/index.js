import { useContext } from "react";
import { useRouter } from 'next/router';
import { ProductsContext } from "@/context/productsContext";
import { Spacer } from "@nextui-org/react";
import { isMobile } from "react-device-detect";
import ProductDetail from "@/components/producto/detail";
import Layout from "@/components/layouts/article";

export default function App() {
  const { products } = useContext(ProductsContext);
  const router = useRouter();
  const productoBuscado = products.find(producto => producto._id === router.query.producto);

  return (
  <Layout title={productoBuscado ? productoBuscado.nombre : "producto"}>
    <Spacer y={isMobile ? 1 : 3} />
    <ProductDetail product={productoBuscado}/>
    <Spacer y={isMobile ? 4 : 0} />
  </Layout>
  );
}