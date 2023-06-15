import {
  Container,
  Spacer,
  Textarea,
  Button,
  Text,
  Input,
  Loading,
  Card,
} from "@nextui-org/react";
import { useState } from "react";
import { motion } from 'framer-motion'

export default function SendMail({ mail }) {
  const [text, setText] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);
    setIsLoading(false);
    setCompleted(true);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  }
  return (
    <Container>
      <Text h2>Contacto</Text>
      {completed ? (
        <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", stiffness: 100 }}
      >
            <Spacer y={2} />
        <Card variant="flat" css={{background:"$green500"}}>
        <Card.Body css={{display:"grid",justifyItems:"center",textAlign:"center"}}>
        <Text h4>Se ha enviado su mensaje con exito!</Text>
        <Spacer y={1} />
        <Button onClick={()=> setCompleted(false)} color="success" rounded bordered>Volver</Button>
        </Card.Body>
        </Card>
        </motion.article>
      ) : (
        <>
          <Input initialValue={mail && mail} label="Mail" fullWidth />
          <Spacer y={1} />
          <Textarea
            width="100%"
            label="En qué podemos ayudarte?"
            placeholder="No dudes en escribirnos."
            onChange={handleText}
          />
          <Spacer y={1} />
          {isLoading ? (
            <Button
              disabled
              shadow
              color="secondary"
              css={{ px: "$13", width: "100%" }}
            >
              <Loading type="spinner" color="currentColor" size="sm" />
            </Button>
          ) : (
            <div style={{display:"flex",justifyContent:"center"}}>
            <Button css={{ width: "40%" }} onClick={handleSubmit}>
              Enviar
            </Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
}
