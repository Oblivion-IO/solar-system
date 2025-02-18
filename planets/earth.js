import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x2A5F9E });

export const Earth = new THREE.Mesh(earthGeometry, earthMaterial);
export const EarthOrbitRadius = 35;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * EarthOrbitRadius, 0, Math.sin(theta) * EarthOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const EarthOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let earthAngle = 0;
const EARTH_SPEED = 0.01;

export function rotateEarth() {
  earthAngle += EARTH_SPEED;

  Earth.position.x = Math.cos(earthAngle) * EarthOrbitRadius;
  Earth.position.z = Math.sin(earthAngle) * EarthOrbitRadius;
}

