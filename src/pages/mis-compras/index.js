import NavbarComponent from "@/components/navbar";
import { UserContext } from "@/context/userContext";
import React from "react";
import MisCompras from "@/components/misCompras";
import {
  Container,
  Spacer,
  Grid,
} from "@nextui-org/react";
export default function App() {
  const compras = [
    {
      nombre: "orange",
      status: "Entregado",
      precio: 500,
      imageURL: "/images/fruit-1.jpeg",
      cantidad: 1,
      fechaCompra:"28/04/2023",
      fechaRecibido:"01/05/2023",
      descripcion:
        "adsaddssdadadadasdadadasdafdgdddfmnsjasdadghashhajgasdasdads",
    },
    {
      nombre: "orange",
      status: "Pendiente",
      precio: 500,
      imageURL: "/images/fruit-1.jpeg",
      cantidad: 1,
      fechaCompra:"29/04/2023",
      fechaRecibido:"01/05/2023",
      descripcion:
        "adsaddssdadadadasdadadasdafdgdddfmnsjasdadghashhajgasdasdads",
    },
    {
      nombre: "orange",
      status: "Entregado",
      precio: 500,
      imageURL: "/images/fruit-1.jpeg",
      cantidad: 1,
      fechaCompra:"01/05/2023",
      fechaRecibido:"01/05/2023",
      descripcion:
        "adsaddssdadadadasdadadasdafdgdddfmnsjasdadghashhajgasdasdads",
    },
    {
      nombre: "orange",
      status: "Pendiente",
      precio: 500,
      imageURL: "/images/fruit-1.jpeg",
      cantidad: 1,
      fechaCompra:"03/05/2023",
      fechaRecibido:"01/05/2023",
      descripcion:
        "adsaddssdadadadasdadadasdafdgdddfmnsjasdadghashhajgasdasdads",
    },
  ];
  return (
    <>
      <NavbarComponent/>
      <Spacer y={2} />
      <Container css={{ display: "flex", justifyContent: "center" }}>
        <Grid.Container gap={2}>
          <Grid xs={12}>
                <MisCompras
                  compras={compras}
                  totalPagination={compras.length / 2}
                />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
