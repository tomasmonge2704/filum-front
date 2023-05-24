import { useState, useEffect } from "react";
import { Button, Input, Spacer,Text, Link, Row, Container } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { GoogleIcon } from "@/components/icons/googleIcon";
import { useSession } from "next-auth/react";
import { isMobile } from "react-device-detect";
import Head from "next/head";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, status } = useSession();
  const [errorMessage, setErrorMessage] = useState("");
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        window.location.href = "/";
      } else {
        const res = await response.json();
        console.log(res.message);
        setErrorMessage(res.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
    }
  };

  async function getToken(username, imageURL) {
    try {
      const response = await fetch(`${API_URL}/user/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, imageURL }),
      });
      const data = await response.json();
      return data.token;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el token");
    }
  }

  const googleAuth = async () => {
    try {
      const token = await getToken(session.user.email, session.user.image);
      console.log(token);
      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setErrorMessage("TypeError: Failed to fetch");
    }
  };

  useEffect(() => {
    if (status == "authenticated" && session) {
      googleAuth();
    }
  }, [status]);

  return (
    <>
      <Head>
        <style>
          {`
          body {
            background-image: url('/logo.png');
            background-repeat:no-repeat;
            background-position:${isMobile ? 'top' : '80%'};
            background-size:${isMobile ? '75%' : '38%'};
          }
        `}
        </style>
      </Head>
      <Container
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <form
          style={{
            backgroundColor: "rgb(216 115 42 / 26%)",
            backdropFilter: "blur(30px) contrast(90%)",
            WebkitBackdropFilter:"blur(30px)",
            borderRadius: "5%",
            width:'22rem'
           
          }}
          onSubmit={handleSubmit}
        >
          <Container css={{padding:'5%'}}>
          {errorMessage == "TypeError: Failed to fetch" && <Text color="error" blockquote>Hemos tenido un error en el servidor, lo sentimos.</Text>}
          <Input
            value={username}
            onChange={handleUsernameChange}
            fullWidth
            status={errorMessage == "Usuario no encontrado" ? "error" : ""}
            label={
              errorMessage == "Usuario no encontrado"
                ? errorMessage
                : "Username"
            }
          />
          <Spacer y={1} />
          <Input.Password
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            status={errorMessage == "Contraseña incorrecta" ? "error" : ""}
            label={
              errorMessage == "Contraseña incorrecta"
                ? errorMessage
                : "Contraseña"
            }
          />
          <Spacer y={0.5} />
          <Link block href="/signup">
            Olvidaste tu contraseña?
          </Link>
          <Spacer y={0.5} />
          <Button
            type="submit"
            shadow
            variant="contained"
            color="primary"
            css={{ width: "100%" }}
          >
            Iniciar sesión
          </Button>
          <Spacer y={1} />
          <div className="separator">
            <hr className="line" />
            <span>Or</span>
            <hr className="line" />
          </div>
          <Spacer y={1} />
          <Button
            bordered
            variant="contained"
            icon={<GoogleIcon />}
            onClick={() => signIn("google")}
            css={{ width: "100%" }}
          >
            Iniciar sesión con Google
          </Button>
          <Spacer y={1} />
          <Row css={{ display:"flex",justifyContent:"center",alignItems: "center" }}>
            No tenes una cuenta?
            <Link block href="/signup">
              Signup
            </Link>
          </Row>
          <Row css={{ display:"flex",justifyContent:"center",alignItems: "center" }}>
          <Link block href="/">
              Inicia sesión como Invitado
            </Link>
          </Row>
          
          </Container>
        </form>
      </Container>
    </>
  );
}
