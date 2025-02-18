import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const jupiterGeometry = new THREE.SphereGeometry(6, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xE1A95F });

export const Jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
export const JupiterOrbitRadius = 75;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * JupiterOrbitRadius, 0, Math.sin(theta) * JupiterOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const JupiterOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let jupiterAngle = 0;
const JUPITER_SPEED = 0.0017;

export function rotateJupiter() {
  jupiterAngle += JUPITER_SPEED;
  
  Jupiter.position.x = Math.cos(jupiterAngle) * JupiterOrbitRadius;
  Jupiter.position.z = Math.sin(jupiterAngle) * JupiterOrbitRadius;
}
