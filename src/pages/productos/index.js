import { useState, useContext,useEffect } from "react";
import { ProductsContext } from "@/context/productsContext";
import { Grid, Spacer, Container, Input, Card, Text } from "@nextui-org/react";
import SearchBar from "@/components/searchBar";
import ItemProductCard from "@/components/producto/item";
import Categorias from "@/components/producto/categorias";

export default function App() {
  const { products } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [categorias, setCategorias] = useState(["Todas"]);
  const [selectedCategoria, setSelectedCategoria] = useState(["Todas"]);

  const filteredProducts = products.filter((product) =>
  product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (selectedCategoria.includes("Todas") || selectedCategoria.includes(product.categoria))
  );

  useEffect(() => {
    const obtenerCategorias = () => {
      const categoriasSet = new Set(["Todas"]);
      products.forEach((product) => {
        categoriasSet.add(product.categoria);
      });
      setCategorias(Array.from(categoriasSet));
    };

    obtenerCategorias();
  }, [products]);

  return (
    <Container css={{ padding: "0px" }}>
      <Spacer y={3} />
      <Container css={{ padding: "0px" }}>
        <SearchBar setSearchTerm={setSearchTerm} />
        <Spacer y={2} />
      </Container>
      <Grid.Container gap={0} justify="flex-start">
        <Grid xs={3}>
          <Container>
          <Text>Categorias</Text>
          <Spacer y={1}/>
          <Categorias categorias={categorias} selectedCategoria={selectedCategoria} setSelectedCategoria={setSelectedCategoria} />
          </Container>
        </Grid>
        <Grid xs={9}>
          <Grid.Container gap={2}>
          {filteredProducts.length < 1 ? (
            <Card variant="flat">
              <Card.Body>No se ha encontrado ningun producto.</Card.Body>
            </Card>
          ) : (
            <>
              {filteredProducts.map((item, index) => (
                <ItemProductCard key={index} item={item} index={index} />
              ))}
            </>
          )}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
