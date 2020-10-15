// Three components
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
let renderer = new THREE.WebGLRenderer({ antialias: true })

// Set up components
camera.position.x = 9
camera.position.y = 9
camera.position.z = 35
renderer.setSize(window.innerWidth, window.innerHeight)

// Add to the document, and add a window resize listener
document.body.appendChild(renderer.domElement)
window.onresize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Geometry to be cloned
let geometry = new THREE.BoxBufferGeometry(1, 1, 1)
let material = new THREE.MeshNormalMaterial()
let cube = new THREE.Mesh(geometry, material)


// Create all cubes
let cubes = []
let cubeCount = 10
let spacing = 2

for (let i = 0; i < cubeCount; i++) {
    for (let j = 0; j < cubeCount; j++) {
        for (let k = 0; k < cubeCount; k++) {
            box = cube.clone()

            box.position.x = i * spacing
            box.position.y = j * spacing
            box.position.z = k * spacing

            cubes.push(box)
            scene.add(box)
        }
    }
}

// Render
function animate() {
    requestAnimationFrame(animate)

    for(let i of cubes){
        i.rotateX(Math.random() * 0.02)
        i.rotateY(Math.random() * 0.02)
    }

    renderer.render(scene, camera)
}
animate()