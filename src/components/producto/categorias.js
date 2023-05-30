import { Checkbox, Spacer } from "@nextui-org/react";
import React from "react";

export default function Categorias({ categorias, selectedCategoria, setSelectedCategoria }) {
  const handleCategoriaChange = (linea, categoria) => {
    setSelectedCategoria(categoria);
    if (linea === "420 🍁") {
      
    }
  };

  return (
    <>
      {categorias.map((e) => (
        <Checkbox.Group
          key={e.linea}
          label={e.linea}
          color="secondary"
          value={selectedCategoria}
          onChange={(value) => handleCategoriaChange(e.linea, value)}
        >
          {e.categorias.map((item) => (
            <Checkbox key={item} value={item}>
              {item}
            </Checkbox>
          ))}
          <Spacer y={1} />
        </Checkbox.Group>
      ))}
    </>
  );
}