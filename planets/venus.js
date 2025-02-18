import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const venusGeometry = new THREE.SphereGeometry(0.95, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({ color: 0xEAC27B });

export const Venus = new THREE.Mesh(venusGeometry, venusMaterial);
export const VenusOrbitRadius = 25;

const orbitPoints = [];
const segments = 100;
for (let i = 0; i <= segments; i++) {
  const theta = (i / segments) * 2 * Math.PI;
  orbitPoints.push(new THREE.Vector3(Math.cos(theta) * VenusOrbitRadius, 0, Math.sin(theta) * VenusOrbitRadius));
}

const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
const orbitMaterial = new THREE.LineBasicMaterial({ color: GRAY_LINE });
export const VenusOrbitLine = new THREE.Line(orbitGeometry, orbitMaterial);

let venusAngle = 0;
const VENUS_SPEED = 0.016;

export function rotateVenus() {
  venusAngle += VENUS_SPEED;
  
  Venus.position.x = Math.cos(venusAngle) * VenusOrbitRadius;
  Venus.position.z = Math.sin(venusAngle) * VenusOrbitRadius;
}

