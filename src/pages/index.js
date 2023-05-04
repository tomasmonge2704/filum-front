import NavbarComponent from "@/components/navbar";
import {CheckAuth} from "@/components/auth";

export default function App() {
  CheckAuth()
  return (
      <NavbarComponent page="/" />
  );
}

