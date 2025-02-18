import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const marsGeometry = new THREE.SphereGeometry(0.53, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xB33F2A });

export const Mars = new THREE.Mesh(marsGeometry, marsMaterial);
export const MarsOrbitRadius = 50;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * MarsOrbitRadius, 0, Math.sin(theta) * MarsOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const MarsOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let marsAngle = 0;
const MARS_SPEED = 0.0053;

export function rotateMars() {
  marsAngle += MARS_SPEED;

  Mars.position.x = Math.cos(marsAngle) * MarsOrbitRadius;
  Mars.position.z = Math.sin(marsAngle) * MarsOrbitRadius;
}

