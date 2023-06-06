import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <FloatingWhatsApp
          accountName="Filum"
          avatar="/logo.png"
          chatMessage="Hola! somos Filum, ¿en qué podemos ayudarte?"
        />
      )}
    </>
  );
}

