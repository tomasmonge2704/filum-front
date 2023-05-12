import {
  Container,
  Input,
  Card,
  Button,
  Spacer,
  Text,
} from "@nextui-org/react";
export default function Domicilio({ tipoEnvio }) {
  return (
    <Container>
      <Text h3>¿Cómo querés recibir o retirar tu compra?</Text>
      <Spacer y={1} />
      <Text size={20}>Domicilio</Text>
      <Spacer y={1} />
      <Card>
        <Card.Body>
          {tipoEnvio == "a domicilio" ? (
            <>
              <Input clearable label="Calle" placeholder="" />
              <Spacer y={1} />
              <Container
                css={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-evenly",
                  alignItems: "flex-end",
                  padding: "0px",
                }}
              >
                <Input clearable label="Altura" placeholder="" />
                <Spacer x={1} />
                <Input clearable label="Piso" placeholder="" />
                <Spacer x={1} />
                <Button shadow>Guardar domicilio</Button>
              </Container>
            </>
          ) : (
            <Container css={{ display: "flex", justifyContent: "center",textAlign:"center" }}>
              <Text blockquote css={{width:"100%"}}>No aplica</Text>
            </Container>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
