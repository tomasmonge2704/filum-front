import React, { useState } from "react";
import { Checkbox, Spacer, Collapse, Container } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

export default function Categorias({ categorias, selectedCategoria, setSelectedCategoria }) {
  const { setTheme } = useNextTheme();
  const [collapseIndex, setCollapseIndex] = useState(4);
  const handleCollapseChange = (index,linea,categorias) => {
    if(index === collapseIndex) {
      setSelectedCategoria([]);
      setTheme("light")
      setCollapseIndex(4)
    }else{
      if(linea == "420 🍁") setTheme("weed");
      if(linea == "Garden 🪴") setTheme("light");
      setCollapseIndex(index)
      setSelectedCategoria(categorias)
    }
  };

  return (
    <Container css={{ padding: "0px", width: "100%" }}>
      <Collapse.Group bordered css={{ width: "100%" }}>
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
