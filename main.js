import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Sun } from "./planets/sun";
import { Mercury, MercuryOrbitLine, rotateMercury } from "./planets/mercury";
import { rotateVenus, Venus, VenusOrbitLine } from "./planets/venus";
import { Earth, EarthOrbitLine, rotateEarth } from "./planets/earth";
import { Mars, MarsOrbitLine, rotateMars } from "./planets/mars";
import { Jupiter, JupiterOrbitLine, rotateJupiter } from "./planets/jupiter";
import { rotateSaturn, Saturn, SaturnOrbitLine } from "./planets/saturn";
import { rotateUranus, Uranus, UranusOrbitLine } from "./planets/uranus";
import { Neptune, NeptuneOrbitLine, rotateNeptune } from "./planets/neptune";

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 30, 75);

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 0, 0);
scene.add(light);

scene.add(Sun);

scene.add(Mercury);
scene.add(MercuryOrbitLine);

scene.add(Venus);
scene.add(VenusOrbitLine);

scene.add(Earth);
scene.add(EarthOrbitLine);

scene.add(Mars);
scene.add(MarsOrbitLine);

scene.add(Jupiter);
scene.add(JupiterOrbitLine);

scene.add(Saturn);
scene.add(SaturnOrbitLine);

scene.add(Uranus);
scene.add(UranusOrbitLine);

scene.add(Neptune);
scene.add(NeptuneOrbitLine);

function animate() {
  requestAnimationFrame(animate);

  rotateMercury();
  rotateVenus();
  rotateEarth();
  rotateMars();
  rotateJupiter();
  rotateSaturn();
  rotateUranus();
  rotateNeptune();

  controls.update();
  renderer.render(scene, camera);
}

animate();

renderer.render(scene, camera);
