import NavbarComponent from "@/components/navbar";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {
  return (
    <>
      <FloatingWhatsApp accountName="Test" />
      <NavbarComponent />
    </>
  );
}
