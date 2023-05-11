import React from "react";
import { useState, useEffect,useContext } from "react";
import { Pagination, Container, Spacer } from "@nextui-org/react";
import CompraItem from "./item";
import moment from "moment";
import { datosCompras } from "./datos";
import { ComprasContext } from "@/context/comprasContext";
export default function MisComprasContenedor() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedCompras, setSortedCompras] = useState(datosCompras);

  useEffect(() => {
    const sortCompras = (compras) => {
      const compareFn = (a, b) => {
        const fechaA = moment(a.fechaCompra, "DD/MM/YYYY").toDate();
        const fechaB = moment(b.fechaCompra, "DD/MM/YYYY").toDate();
        return fechaB.getTime() - fechaA.getTime();
      };
      return [...compras].sort(compareFn);
    };

    if (sortedCompras.length > 1) {
      const sorted = sortCompras(sortedCompras);
      setSortedCompras(sorted);
    }
  }, [datosCompras]);

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
