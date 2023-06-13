import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "@/context/productsContext";
import {
  Grid,
  Spacer,
  Container,
  Card,
  Text,
  Button,
  Modal,
} from "@nextui-org/react";
import Layout from "@/components/layouts/article";
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

      const categoriasArray = Object.keys(categoriasObj)
        .map((linea) => {
          if (categoriasObj[linea].length > 0) {
            return {
              linea,
              categorias: [...new Set(categoriasObj[linea])],
            };
          }
          return null;
        })
        .filter(Boolean);

      setCategorias(categoriasArray);
    };

    obtenerCategorias();
  }, [products]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  //modal
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Layout title={"Productos"}>
      <Container css={{ padding: "0px" }}>
        <Spacer y={1} />
        <Container
          css={{
            padding: isClient && isMobile ? "3%" : "0px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {isClient && isMobile && (
            <div style={{ width: "70%" }}>
              <SearchBar setSearchTerm={setSearchTerm} />
            </div>
          )}
          {isClient && isMobile && (
            <Button
              auto
              flat
              color="primary"
              onPress={handler}
              css={{ marginLeft: "4%" }}
            >
              Filtros
            </Button>
          )}
          <Spacer y={isClient && isMobile ? 1 : 2} />
        </Container>
        {isClient && isMobile && (
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text b>Categorias</Text>
              <Spacer y={1} />
            </Modal.Header>
            <Modal.Body>
              <Categorias
                categorias={categorias}
                selectedCategoria={selectedCategoria}
                setSelectedCategoria={setSelectedCategoria}
              />
            </Modal.Body>
          </Modal>
        )}
        <Grid.Container gap={0}>
          {isClient && isMobile ? (
            <></>
          ) : (
            <Grid xs={3}>
              <Container css={{paddingLeft:"12px"}}>
                <Categorias
                  categorias={categorias}
                  selectedCategoria={selectedCategoria}
                  setSelectedCategoria={setSelectedCategoria}
                />
              </Container>
            </Grid>
          )}
          <Grid xs={isClient && isMobile ? 12 : 9}>
            <Grid.Container gap={2} alignContent="flex-start">
            {isClient && !isMobile && (
                    <Container css={{padding:"0px"}}>
                      <SearchBar setSearchTerm={setSearchTerm} />
                      <Spacer y={1}/>
                    </Container>
                  )}
              {filteredProducts.length < 1 ? (
                <Card
                  variant="flat"
                  css={{ maxHeight: "250px", justifyContent: "center" }}
                >
                  <Card.Body>
                    <Container
                      css={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text b>No se ha encontrado ningun producto.</Text>
                    </Container>
                  </Card.Body>
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
        <Spacer y={5} />
      </Container>
    </Layout>
  );
}
