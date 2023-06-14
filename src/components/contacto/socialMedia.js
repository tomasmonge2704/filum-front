import { Container, Grid, Tooltip, Text, Row, Spacer } from "@nextui-org/react";
import { InstagramIcon } from "@/components/icons/instagramIcon";
import Image from "next/image";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MailIcon } from "@/components/icons/MailIcon";
export default function SocialMedia({ isClient, isMobile }) {
  return (
    <Grid.Container gap={2}>
      {isClient && isMobile ? (
            <Container css={{ display: "grid" }}>
                <Spacer x={1} />
              <Row align="center">
                <InstagramIcon height={50} width={50} />
                <Spacer x={1} />
                <Text>@Filum</Text>
              </Row>
              <Spacer y={1} />
              <Row align="center">
                <PhoneIcon height={50} width={50} />
                <Spacer x={1} />
                <Text>+11 5678 8943</Text>
              </Row>
              <Spacer y={1} />
              <Row align="center">
                <MailIcon height={50} width={50} />
                <Spacer x={1} />
                <Text>info@filum.com</Text>
              </Row>
            </Container>
      ) : (<Container
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
          <Grid xs={4} justify="center">
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
          <Grid xs={4} justify="center">
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
          <Grid xs={4} justify="center">
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
      </Container>)}
    </Grid.Container>
  );
}
