import Layout from '@/components/layouts/article';
import React, { useEffect, useState } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <Layout title={"Home"}>
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

