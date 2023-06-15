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
  Pagination
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
  const [currentPage, setCurrentPage] = useState(1);
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
        <Grid.Container
        gap={2}
        >
          <Grid xs={isClient && isMobile ? 3 : 2}>
            <Button
              auto={isClient && isMobile ? true : false}
              css={isClient && isMobile && {width:"100%"}}
              flat
              color="primary"
              onPress={handler}
            >
              Filtros
            </Button>
            </Grid>
            <Grid xs={isClient && isMobile ? 9 : 10}>
              <SearchBar setSearchTerm={setSearchTerm} />
            </Grid>
        </Grid.Container>
        <Spacer y={1} />
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
            <Grid.Container gap={2} alignContent="flex-start">
              {filteredProducts.length < 1 ? (
                <Card
                  variant="flat"
                  css={isClient && isMobile ? { maxHeight: "250px", justifyContent: "center",margin:"3%"} : { maxHeight: "250px", justifyContent: "center"}}
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
                  {filteredProducts.slice((currentPage - 1) * 8, currentPage * 8).map((item, index) => (
                    <ItemProductCard key={index} item={item} index={index} />
                  ))}
                  <Container css={{ display: "flex", justifyContent: "center" }}>
                  <Pagination
                    total={Math.ceil(filteredProducts.length / 8)}
                    initialPage={1}
                    onChange={(newPage) => setCurrentPage(newPage)}
                  />
                </Container>
                </>
              )}
            </Grid.Container>
        <Spacer y={5} />
      </Container>
    </Layout>
  );
}
