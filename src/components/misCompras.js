import { useState } from "react";
import { Pagination, Container, Spacer } from "@nextui-org/react";
import CompraItem from "./compraItem";
import moment from "moment";

export default function MisCompras({ compras, totalPagination }) {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedCompras = compras.sort((a, b) => {
    const fechaA = moment(a.fechaCompra, "DD/MM/YYYY").toDate();
    const fechaB = moment(b.fechaCompra, "DD/MM/YYYY").toDate();
    return fechaB.getTime() - fechaA.getTime();
  });

  return (
    <Container>
      <Spacer y={1} />
      {sortedCompras
        .slice((currentPage - 1) * totalPagination, currentPage * totalPagination)
        .map((item, index) => (
          <>
            <CompraItem item={item} index={index} />
            <Spacer y={1} />
          </>
        ))}
      <Spacer y={1} />
      <Container css={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          total={Math.ceil(compras.length / totalPagination)}
          initialPage={1}
          onChange={(newPage) => setCurrentPage(newPage)}
        />
      </Container>
    </Container>
  );
}
