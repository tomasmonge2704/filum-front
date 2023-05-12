import React from "react";
import { useState, useEffect } from "react";
import { Pagination, Container, Spacer,Image,Text } from "@nextui-org/react";
import CompraItem from "./item";
import moment from "moment";
import { useContext } from "react";
import { ComprasContext } from "@/context/comprasContext";

export default function MisComprasContenedor() {
  const { compras } = useContext(ComprasContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedCompras, setSortedCompras] = useState([]);
  const [comprasLoaded, setComprasLoaded] = useState(false);

  useEffect(() => {
    const sortCompras = (compras) => {
      const compareFn = (a, b) => {
        const fechaA = moment(a.fechaCompra, "DD/MM/YYYY").toDate();
        const fechaB = moment(b.fechaCompra, "DD/MM/YYYY").toDate();
        return fechaB.getTime() - fechaA.getTime();
      };
      return [...compras].sort(compareFn);
    };

    if (compras.length > 0) {
      const sorted = sortCompras(compras);
      setSortedCompras(sorted);
      setComprasLoaded(true);
    }
  }, [compras]);

  if (!comprasLoaded) {
    return <Container css={{display:"flex",justifyContent:"center"}}>
      <Text h1 size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold">No tienes compras actualmente</Text>
      <Image
    src="/emptyCart.png"
    objectFit="contain"
    width="100%"
    height={400}
    css={{ borderRadius: "4%" }}
    alt='carritoVacio'
  /></Container>
  }

  return (
    <Container>
      <Spacer y={1} />
      {sortedCompras
        .slice((currentPage - 1) * 2, currentPage * 2)
        .map((item, index) => (
          <React.Fragment key={index}>
            <CompraItem item={item} index={index} />
            <Spacer y={1} />
          </React.Fragment>
        ))}
      <Spacer y={1} />
      <Container css={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={Math.ceil(sortedCompras.length / 2)}
          initialPage={1}
          onChange={(newPage) => setCurrentPage(newPage)}
        />
      </Container>
    </Container>
  );
}
