import { Container,Grid,Tooltip,Text } from "@nextui-org/react"
import { InstagramIcon } from "@/components/icons/instagramIcon";
import Image from "next/image";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MailIcon } from "@/components/icons/MailIcon";
export default function SocialMedia({isClient,isMobile}){
    return(
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
                    width={isClient && isMobile ? 0 : 270}
                    height={isClient && isMobile ? 0 : 270}
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
                </Container>
    )
}