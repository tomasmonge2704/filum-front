import { useState } from "react";
import { Password } from "@/components/icons/Password";
import { Button, Input, Spacer,Link,Row,Container } from "@nextui-org/react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
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
      const res = await response.json()
      setErrorMessage(res.message)
    }
  };
  return (
      <Container css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}>
        <form style={{width:"20rem"}} onSubmit={handleSubmit}>
          <Input
            value={username}
            onChange={handleUsernameChange}
            fullWidth
            status={errorMessage == "Usuario no encontrado" ? "error" : "" }
            label={errorMessage == "Usuario no encontrado" ? errorMessage : "Username" }
          />
          <Spacer y={1} />
          <Input.Password
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            status={errorMessage == "Contraseña incorrecta" ? "error" : "" }
            label={errorMessage == "Contraseña incorrecta" ? errorMessage : "Contraseña" }
          />
          <Spacer y={0.5} />
          <Link block href="/signup">Olvidaste tu contraseña?</Link>
          <Spacer y={0.5} />
          <Button
            type="submit"
            shadow
            variant="contained"
            color="success"
            css={{ width: "100%" }}
          >
            Iniciar sesión
          </Button>
          <Spacer y={1} />
          <div className="separator">
            <hr className="line"/>
            <span>Or</span>
            <hr className="line"/>
          </div>
          <Spacer y={1} />
          <Row css={{alignItems:'center'}}>No tenes una cuenta?<Link block href="/signup">Signup</Link></Row>
          <Spacer y={1} />
        </form>
        </Container>
  );
}
