import React, { useState,useEffect } from "react";
import { Checkbox, Spacer, Collapse, Container } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

export default function Categorias({ categorias, selectedCategoria, setSelectedCategoria }) {
  const { theme,setTheme } = useNextTheme();
  const [temaAnterior, setTemaAnterior] = useState('');
  useEffect(() => {
    setTemaAnterior(theme)
  }, []);
  const [collapseIndex, setCollapseIndex] = useState(4);
  const handleCollapseChange = (index,linea,categorias) => {
    if(index !== collapseIndex) {
      document.body.classList.value = '';
      if(linea == "420 🍁") {
        setTheme("weed");
        document.body.classList.add("weed");
      }
      if(linea == "Garden 🪴") {
        setTheme("garden");
        document.body.classList.add("garden");
      }
      if (linea == "Gaymer 👾"){
        setTheme("gaymer");
        document.body.classList.add("gaymer");
      }
      setCollapseIndex(index)
      setSelectedCategoria(categorias)
    }else{
      setSelectedCategoria([]);
      document.body.classList.value = '';
      setTheme(temaAnterior)
      setCollapseIndex(4)
    }
  };

  return (
    <Container css={{ padding: "0px", width: "100%"}}>
      <Collapse.Group bordered css={{ width: "100%",backdropFilter: "blur(27px)" }}>
        {categorias.map((e, index) => (
          <Collapse
            key={e.linea}
            title={e.linea}
            onChange={() => handleCollapseChange(index,e.linea,e.categorias)}
          >
            <Checkbox.Group
              color="secondary"
              label="categorias"
              value={selectedCategoria}
              onChange={setSelectedCategoria}
            >
              {e.categorias.map((item) => (
                <Checkbox key={item} value={item}>
                  {item}
                </Checkbox>
              ))}
              <Spacer y={1} />
            </Checkbox.Group>
          </Collapse>
        ))}
      </Collapse.Group>
    </Container>
  );
}
