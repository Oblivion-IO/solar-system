import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const uranusGeometry = new THREE.SphereGeometry(4, 32, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x77C7E5 });

export const Uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
export const UranusOrbitRadius = 125;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * UranusOrbitRadius, 0, Math.sin(theta) * UranusOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const UranusOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let uranusAngle = 0;
const URANUS_SPEED = 0.0003;

export function rotateUranus() {
  uranusAngle += URANUS_SPEED;
  
  Uranus.position.x = Math.cos(uranusAngle) * UranusOrbitRadius;
  Uranus.position.z = Math.sin(uranusAngle) * UranusOrbitRadius;
}
