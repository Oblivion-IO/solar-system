import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const saturnGeometry = new THREE.SphereGeometry(5, 32, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xD9C099 });

export const Saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
export const SaturnOrbitRadius = 100;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * SaturnOrbitRadius, 0, Math.sin(theta) * SaturnOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const SaturnOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let saturnAngle = 0;
const SATURN_SPEED = 0.0008;

export function rotateSaturn() {
  saturnAngle += SATURN_SPEED;

  Saturn.position.x = Math.cos(saturnAngle) * SaturnOrbitRadius;
  Saturn.position.z = Math.sin(saturnAngle) * SaturnOrbitRadius;
}

