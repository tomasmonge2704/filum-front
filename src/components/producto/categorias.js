import { Checkbox } from "@nextui-org/react";
import React from "react";

export default function Categorias({categorias,selectedCategoria,setSelectedCategoria}) {
  
  return (
<Checkbox.Group
      color="secondary"
      value={selectedCategoria}
        onChange={setSelectedCategoria}
    >
      {categorias.map((item) => (
        <Checkbox key={item} value={item}>{item}</Checkbox>
        ))}
    </Checkbox.Group>
  );
}
