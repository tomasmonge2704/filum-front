import { Card, Grid } from "@nextui-org/react";
import SendMail from "./sendMail";
import SocialMedia from "./socialMedia";
export default function ContactForm({ mail, isClient, isMobile }) {
  return (
      <Card variant="bordered">
        <Card.Body>
          <Grid.Container gap={2}>
            <Grid xs={isClient && isMobile ? 12 : 6}>
              <SendMail mail={mail} />
            </Grid>
            <Grid xs={isClient && isMobile ? 12 : 6}>
              <SocialMedia isClient={isClient} isMobile={isMobile} />
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
  );
}
