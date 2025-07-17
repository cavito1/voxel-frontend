import * as THREE from './libs/three.min.js';

const canvas = document.getElementById('gameCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerGeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();