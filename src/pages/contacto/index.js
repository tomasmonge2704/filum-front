import Layout from "@/components/layouts/article";
import {
  Card,
  Container,
  Grid,
  Textarea,
  Spacer,
  Text,
  Button,
  Tooltip,
  Input,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { isMobile } from "react-device-detect";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { InstagramIcon } from "@/components/icons/instagramIcon";
import Image from "next/image";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MailIcon } from "@/components/icons/MailIcon";
export default function Contacto() {
  const { user, setUser } = useContext(UserContext);
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsClient(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <Layout title="contacto">
      <Spacer y={isClient && isMobile ? 1 : 3} />
      <Container
        css={isClient && isMobile ? { padding: "3%" } : { padding: "0.5%" }}
      >
        <Card variant="bordered">
          <Card.Body>
            <Grid.Container gap={2}>
              <Grid xs={isClient && isMobile ? 12 : 6}>
                <Container>
                  <Text h2>Contacto</Text>
                  <Input
                    initialValue={user.mail && user.mail}
                    label="Mail"
                    fullWidth
                  />
                  <Spacer y={1} />
                  <Textarea
                    width="100%"
                    label="En que podemos ayudarte?"
                    placeholder="No dudes en escribirnos."
                  />
                  <Spacer y={1} />
                  <Button css={{ width: "100%" }}>Enviar</Button>
                </Container>
              </Grid>
              <Grid xs={isClient && isMobile ? 12 : 6}>
                <Container
                  css={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/logo.png"
                    objectFit="contain"
                    width={270}
                    height={270}
                    alt="logo"
                  />
                  <Grid.Container gap={2}>
                    <Grid xs={isClient && isMobile ? 6 :4} justify="center">
                      <Tooltip
                        content={"Seguinos en instagram!"}
                        placement="top"
                        rounded
                        color="secondary"
                      >
                        <Container
                          css={{
                            display: "grid",
                            justifyItems: "center",
                            padding: "0px",
                          }}
                        >
                          <InstagramIcon height={50} width={50} />
                          <Text>@Filum</Text>
                        </Container>
                      </Tooltip>
                    </Grid>
                    <Grid xs={isClient && isMobile ? 6 :4} justify="center">
                      <Container
                        css={{
                          display: "grid",
                          justifyContent: "center",
                          justifyItems: "center",
                          padding: "0px",
                        }}
                      >
                        <PhoneIcon height={50} width={50} />
                        <Text size={15} b>
                          +11 5678 8943
                        </Text>
                      </Container>
                    </Grid>
                    <Grid xs={isClient && isMobile ? 12 : 4} justify="center">
                      <Container
                        css={{
                          display: "grid",
                          justifyContent: "center",
                          justifyItems: "center",
                          padding: "0px",
                        }}
                      >
                        <MailIcon height={50} width={50} />
                        <Text>info@filum.com</Text>
                      </Container>
                    </Grid>
                  </Grid.Container>
                </Container>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Container>
      {isLoaded && (
        <FloatingWhatsApp
          accountName="Filum"
          avatar="/logo.png"
          chatMessage="Hola! somos Filum, ¿en qué podemos ayudarte?"
        />
      )}
    </Layout>
  );
}
