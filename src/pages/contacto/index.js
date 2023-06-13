import Layout from "@/components/layouts/article";
import {
  Container,
  Spacer
} from "@nextui-org/react";
import { useEffect, useState,useContext } from "react";
import { isMobile } from "react-device-detect";
import ContactForm from "@/components/contacto/form";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { UserContext } from "@/context/userContext";

export default function Contacto() {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { user, setUser } = useContext(UserContext);

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
        css={isClient && isMobile ? { padding: "3%" } : { padding: "0px" }}
      >
        <ContactForm mail={user.mail} isClient={isClient} isMobile={isMobile}/>
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
