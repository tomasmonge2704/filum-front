import NavbarComponent from "@/components/navbar";
import { UserContext } from "@/context/userContext";
import React from "react";
import MisCompras from "@/components/misCompras";
import {
  Avatar,
  Container,
  Spacer,
  Grid,
  Text,
  Collapse,
  Input,
} from "@nextui-org/react";
export default function App() {
  const { user, setUser } = React.useContext(UserContext);
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
            <Collapse.Group splitted css={{ width: "100%" }}>
              <Collapse
                title={<Text h4>{user.username}</Text>}
                subtitle="Datos personales"
                contentLeft={
                  <Avatar
                    size="lg"
                    src={user.avatar}
                    color="secondary"
                    bordered
                    squared
                  />
                }
              >
                <Input
                  readOnly
                  label="Username"
                  fullWidth
                  initialValue={user.username}
                />
                <Spacer y={1} />
                <Input
                  readOnly
                  label="Rol"
                  fullWidth
                  initialValue={user.role}
                />
                <Spacer y={1} />
                <Input
                  readOnly
                  label="Mail"
                  fullWidth
                  initialValue={user.mail}
                />
                <Spacer y={1} />
              </Collapse>
              <Collapse title="Mis compras">
                <MisCompras
                  compras={compras}
                  totalPagination={compras.length / 2}
                />
              </Collapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
