import NavbarComponent from "@/components/navbar";
import { UserContext } from "@/context/userContext";
import React from "react";

export default function App() {
  const { user, setUser } = React.useContext(UserContext);
  return (
    <>
    <NavbarComponent page="/" />
    {JSON.stringify(user)}
    </>
        );
}