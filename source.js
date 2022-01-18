import * as THREE from 'three'

// Add scene
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Add Cube
function addCube() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
};

addCube();
camera.position.x = 5;

function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();