import React from "react";
import { styled, Image, Grid, Dropdown } from "@nextui-org/react";
import { DeleteIcon } from "../icons/DeleteIcon";

const StyledButton = styled("button", {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    '&:active': {
      opacity: 0.8,
    }
  });

export default function CartItem({changeCantidad, item,index,removeFromCart }) {
    const [selected, setSelected] = React.useState(new Set([item.cantidad]));
    const selectedValue = React.useMemo(
      () =>Array.from(selected).join(", ").replaceAll("_", " "),
      [selected]
    );  
    React.useMemo(
        () =>{
            item.cantidad = selectedValue;
            changeCantidad(item);
        },
        [selectedValue]
      );  
    const handleDeleteItem = () =>{
        removeFromCart(item)
    }
  return (
    <Grid.Container gap={1} justify="center" css={{borderTop:'5px Black'}}>
      <Grid xs={2}>
        <Image
          src={"https://nextui.org" + item.imageURL}
          objectFit="cover"
          width="100%"
          height={150}
          css={{borderRadius:"4%"}}
          alt={item.nombre}
        />
      </Grid>
      <Grid xs={3} css={{textAlign:"start"}}>
        {item.nombre}
        <br/>
        ${item.precio}        
      </Grid>
      <Grid xs={3}>
      <Dropdown>
      <Dropdown.Button light color="default" css={{ tt: "capitalize" }}>
        Cantidad: {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="default"
        variant="light"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="1">1</Dropdown.Item>
        <Dropdown.Item key="2">2</Dropdown.Item>
        <Dropdown.Item key="3">3</Dropdown.Item>
        <Dropdown.Item key="4">4</Dropdown.Item>
        <Dropdown.Item key="5">5</Dropdown.Item>
        <Dropdown.Item key="6">6</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Grid>
      <Grid xs={3} css={{display:"flex",justifyContent:"flex-end",alignItems:"baseline"}}>
      <StyledButton onClick={handleDeleteItem}>
        <DeleteIcon size={20} fill="#FF0080"/>
      </StyledButton>
      </Grid>
    </Grid.Container>
  );
}
