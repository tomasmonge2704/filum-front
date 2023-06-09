import React, { useState } from "react";
import { Checkbox, Spacer, Collapse, Container } from "@nextui-org/react";

export default function Categorias({ categorias, selectedCategoria, setSelectedCategoria }) {
  const [collapseIndex, setCollapseIndex] = useState(4);
  const handleCollapseChange = (index,linea,categorias) => {
    if(index !== collapseIndex) {
      document.body.classList.value = '';
      if(linea == "420 🍁") {
        document.body.classList.add("weed");
      }
      if(linea == "Garden 🪴") {
        document.body.classList.add("garden");
      }
      if (linea == "Gaymer 👾"){
        document.body.classList.add("gaymer");
      }
      setCollapseIndex(index)
    }else{
      document.body.classList.value = '';
      setCollapseIndex(4)
    }
  };

  return (
    <Container css={{ padding: "0px", width: "100%"}}>
      <Collapse.Group shadow css={{ width: "100%",backdropFilter: "saturate(150%) blur(35px)" }}>
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
