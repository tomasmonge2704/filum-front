import React, { useEffect, useRef } from "react";
import {
  Text,
  Button,
  Container,
  Input,
  Grid,
  Loading,
  Spacer,
} from "@nextui-org/react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CartContext } from "@/context/cartContext";
import Router from "next/router";
import { isMobile } from "react-device-detect";

export default function ProductDetail({ product }) {
  const { addToCart } = React.useContext(CartContext);
  const [cantidad, setCantidad] = React.useState([1]);

  React.useMemo(() => {
    if (product) {
      if (cantidad <= product.stock && cantidad >= 1) {
        product.cantidad = Number(cantidad);
      } else {
        setCantidad(product.stock);
      }
    }
  }, [cantidad]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToCartCheckout = () => {
    addToCart(product);
    Router.push("/checkout");
  };

  const containerRef = useRef(null);

  let scene, camera, renderer, object;

useEffect(() => {
  function init() {
    scene = new THREE.Scene();
    scene.background = null; // Establecer el fondo como transparente

    camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      10000
    );
    camera.position.z = 10;

    renderer = new THREE.WebGLRenderer({ alpha: true }); // Habilitar el canal alfa para renderizar con transparencia
    renderer.setSize(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight
    );
    renderer.setClearColor(0x000000, 0); // Establecer el color de fondo y la transparencia
    containerRef.current.appendChild(renderer.domElement);

    scene.add(object);

    let control = new OrbitControls(camera, renderer.domElement);

    let light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 0, 10);
    scene.add(light);

    let light2 = new THREE.DirectionalLight(0xffffff);
    light2.position.set(0, 0, -10);
    scene.add(light2);

    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  let loader = new STLLoader();
  loader.load("/Baby_Yoda_v2.2.stl", (model) => {
    object = new THREE.Mesh(
      model,
      new THREE.MeshLambertMaterial({ color: 0x00ff01 })
    );
    object.scale.set(0.1, 0.1, 0.1);
    object.position.set(0, -5, 0);
    object.rotation.x = -Math.PI / 2;
    init();
  });

  return () => {
    if (containerRef.current) {
      containerRef.current.removeChild(renderer.domElement);
    }
  };
}, []);

  return (
    <>
      {product ? (
        <Grid.Container gap={isMobile ? 1 : 4} justify="center">
          {!isMobile ? (
            <></>
          ) : (
            <Text h1>{product.nombre}</Text>
          )}
          <Grid xs={isMobile ? 12 : 5}>
            <div
              ref={containerRef}
              style={{ width: "100%", height: 400, borderRadius: "4%" }}
            />
          </Grid>
          <Grid xs={isMobile ? 12 : 6}>
            <Container css={isMobile && { display: "grid" }}>
              {isMobile ? (
                <></>
              ) : (
                <Text h1>{product.nombre}</Text>
              )}
              <Text size="$xl">${product.precio}</Text>
              <Text size="$xl">{product.descripcion}</Text>
              <Text size="$xl">Stock disponible: {product.stock}</Text>
              {!isMobile && <Spacer y={1} />}
              <Input
                labelLeft="Cantidad"
                width="160px"
                type="Number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <Spacer y={isMobile ? 1 : 2} />
              <Button onPress={handleAddToCart}>Agregar al carrito</Button>
              <Spacer y={1} />
              <Button onPress={handleAddToCartCheckout}>Comprar</Button>
            </Container>
          </Grid>
        </Grid.Container>
      ) : (
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "60vh",
          }}
        >
          <Loading />
        </Container>
      )}
    </>
  );
}