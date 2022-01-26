import * as THREE from "https://threejs.org/build/three.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

// Add scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, -1, 20);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('webgl').appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Add Lights
function addLight(){
    const skycolor = 0xcfd7f8;
    const groundcolor = 0xcdb0b0;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skycolor, groundcolor, intensity);
    scene.add(light);
    // Checks if the light is in the scene, which it is right
    console.log(light.parent === scene)
}

// Add Cube
function addCube() {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.rotation.x += 0.4;
    cube.rotation.y += 0.4;
    // Checks if the cube is in the scene, which it is right
    console.log(cube.parent === scene)
};

// Add surface mesh
function addPane() {
    const geometry = new THREE.BoxGeometry(25, 1, 15);
    const material = new THREE.MeshBasicMaterial( {color: 0xccccff} );
    const pane = new THREE.Mesh(geometry, material);
    scene.add(pane);
    pane.position.y = -8;
     // Checks if the cube is in the scene, which it is right
    console.log(pane.parent === scene)
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
}   

function Main(){
    addLight();
    addCube();
    addPane();
    animate();
}

Main();