// Three components
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
let renderer = new THREE.WebGLRenderer({antialias: true})

// Set up components
camera.position.z = 5
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

// Geometry
let geometry = new THREE.BoxGeometry()
let material = new THREE.MeshNormalMaterial()
let cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// Render
function animate(){
    requestAnimationFrame(animate)

    cube.rotateY(0.01)

    renderer.render(scene, camera)
}
animate()