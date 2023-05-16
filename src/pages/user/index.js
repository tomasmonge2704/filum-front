import NavbarComponent from "@/components/navbar";
import { UserContext } from "@/context/userContext";
import React from "react";
import MisComprasContenedor from "@/components/compras/contenedor";
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
  return (
    <>
      <NavbarComponent />
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
                {user.role == "admin" ? (
                  <>
                    <Input
                      readOnly
                      label="Rol"
                      fullWidth
                      initialValue={user.role}
                    />
                    <Spacer y={1} />
                  </>
                ) : (
                  <></>
                )}

                <Input
                  readOnly
                  label="Mail"
                  fullWidth
                  initialValue={user.mail}
                />
                <Spacer y={1} />
                <Input
                  readOnly
                  label="Telefono"
                  fullWidth
                  initialValue={user.celular}
                />
              </Collapse>
              <Collapse title="Mis compras">
                <MisComprasContenedor />
              </Collapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
}
