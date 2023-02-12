import * as THREE from './three.module.js';

// Setup: Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement); 

// Set Scene. 
scene.background = new THREE.Color(0xffd359); 

// Object: Light
const ambientLight = new THREE.AmbientLight(0xbda355);
const directionalLight = new THREE.DirectionalLight(0xffffff);
ambientLight.add(directionalLight);
scene.add(ambientLight); 

// Object: Texture
const textureLoader = new THREE.TextureLoader();

// Object: Box 
const boxTexture = textureLoader.load("src/textures/crate.gif");
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const boxMaterial = new THREE.MeshPhongMaterial({map: boxTexture});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(boxMesh);

// Object: Cone
const coneTexture = textureLoader.load("src/textures/crate.gif");
const coneGeometry = new THREE.ConeGeometry(5, 20, 32);
const coneMaterial = new THREE.MeshPhongMaterial({map: coneTexture});
const coneMesh = new THREE.Mesh(coneGeometry, coneMaterial);
coneMesh.translateX(-30); 
scene.add(coneMesh);

// Camera Transition
camera.translateZ(30); 

// Animation.
function animate() {
	boxMesh.rotateX(0.005);
	boxMesh.rotateY(0.01);

	coneMesh.rotateX(-0.005);
	coneMesh.rotateY(0.01); 

	// Rendering. 
	renderer.render(scene, camera); 
}

