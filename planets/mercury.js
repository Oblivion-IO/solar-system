import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const mercuryGeometry = new THREE.SphereGeometry(0.4, 32, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 	0xB6B6B6 });

export const Mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
export const MercuryOrbitRadius = 15;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * MercuryOrbitRadius, 0, Math.sin(theta) * MercuryOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const MercuryOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let mercuryAngle = 0;
const MERCURY_SPEED = 0.04;

export function rotateMercury() {
  mercuryAngle += MERCURY_SPEED;

  Mercury.position.x = Math.cos(mercuryAngle) * MercuryOrbitRadius;
  Mercury.position.z = Math.sin(mercuryAngle) * MercuryOrbitRadius;
}