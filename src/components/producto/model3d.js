import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect, useRef } from "react";
export default function Model3d (){
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
    object.position.set(0, -4, 0);
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
        <div
              ref={containerRef}
              style={{ width: "100%", height: 400, borderRadius: "4%" }}
            />
    )
}