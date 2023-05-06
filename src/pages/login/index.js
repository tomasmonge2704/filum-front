import { useState } from "react";
import { Password } from "@/components/icons/Password";
import { Button, Input, Spacer, Card } from "@nextui-org/react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      // mostrar un error al usuario
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
        <form onSubmit={handleSubmit}>
          <Input
            value={username}
            onChange={handleUsernameChange}
            fullWidth
            label="Nombre de usuario"
          />
          <Spacer y={1} />
          <Input.Password
            value={password}
            onChange={handlePasswordChange}
            contentLeft={<Password fill="currentColor" />}
            fullWidth
            label="Contraseña"
          />
          <Spacer y={1} />
          <Button
            type="submit"
            shadow
            variant="contained"
            color="success"
            css={{ width: "100%" }}
          >
            Iniciar sesión
          </Button>
        </form>
    </div>
  );
}
