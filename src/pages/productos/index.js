import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "@/context/productsContext";
import { Grid, Spacer, Container, Card, Text } from "@nextui-org/react";
import SearchBar from "@/components/searchBar";
import ItemProductCard from "@/components/producto/item";
import Categorias from "@/components/producto/categorias";
import { isMobile } from "react-device-detect";

export default function App() {
  const { products } = useContext(ProductsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState([]);
  
  const filteredProducts = products.filter(
    (product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategoria.length == 0 ||
        selectedCategoria.includes(product.categoria))
  );
  
  useEffect(() => {
    const obtenerCategorias = () => {
      const categoriasObj = {};

      products.forEach((product) => {
        if (!categoriasObj[product.linea]) {
          categoriasObj[product.linea] = [];
        }
        categoriasObj[product.linea].push(product.categoria);
      });

      const categoriasArray = Object.keys(categoriasObj).map((linea) => {
        if (categoriasObj[linea].length > 0) {
          return {
            linea,
            categorias: [...new Set(categoriasObj[linea])],
          };
        }
        return null;
      }).filter(Boolean);

      setCategorias(categoriasArray);
    };

    obtenerCategorias();
  }, [products]);
  

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Container css={{ padding: "0px" }}>
      <Spacer y={isClient && isMobile ? 1 : 3} />
      <Container
        css={{
          padding: isClient && isMobile ? "3%" : "0px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <SearchBar setSearchTerm={setSearchTerm} />
        <Spacer y={isClient && isMobile ? 1 : 2} />
      </Container>
      <Grid.Container gap={0}>
        {isClient && isMobile ? (<></>) : (<Grid xs={3}>
          <Container>
            <Text h4>Lineas</Text>
            <Spacer y={1} />
            <Categorias
              categorias={categorias}
              selectedCategoria={selectedCategoria}
              setSelectedCategoria={setSelectedCategoria}
            />
          </Container>
        </Grid>)}
        <Grid xs={isClient && isMobile ? 12 : 9}>
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
