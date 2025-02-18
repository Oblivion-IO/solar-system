import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const neptuneGeometry = new THREE.SphereGeometry(3.8, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x2443A8 });

export const Neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
export const NeptuneOrbitRadius = 150;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * NeptuneOrbitRadius, 0, Math.sin(theta) * NeptuneOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const NeptuneOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let neptuneAngle = 0;
const NEPTUNE_SPEED = 0.0001;

export function rotateNeptune() {
  neptuneAngle += NEPTUNE_SPEED;
  
  Neptune.position.x = Math.cos(neptuneAngle) * NeptuneOrbitRadius;
  Neptune.position.z = Math.sin(neptuneAngle) * NeptuneOrbitRadius;
}
