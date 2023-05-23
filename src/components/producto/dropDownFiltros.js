import { Dropdown } from "@nextui-org/react";
import React from "react";
export default function DropDownFiltros(){
    const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
    return (
        <Dropdown>
              <Dropdown.Button
                flat
                color="secondary"
                css={{ tt: "capitalize" }}
              >
                {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="secondary"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="text">Text</Dropdown.Item>
                <Dropdown.Item key="number">Number</Dropdown.Item>
                <Dropdown.Item key="date">Date</Dropdown.Item>
                <Dropdown.Item key="single_date">Single Date</Dropdown.Item>
                <Dropdown.Item key="iteration">Iteration</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    )
}