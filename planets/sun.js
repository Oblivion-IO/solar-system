import * as THREE from "three";
import { GRAY_LINE } from "../constants";

const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });

export const Sun = new THREE.Mesh(sunGeometry, sunMaterial);
