// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000022);
document.body.appendChild(renderer.domElement);

// Rocket Body
const bodyGeometry = new THREE.CylinderGeometry(1, 1, 2, 10);
const bodyMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff
});
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);



// Nose Cone
const noseGeometry = new THREE.ConeGeometry(1, 1, 5);
const noseMaterial = new THREE.MeshBasicMaterial({
    color: 0x7f00ff
});
const nose = new THREE.Mesh(noseGeometry, noseMaterial);
nose.position.y = 1.5;
scene.add(nose);


// Flame
const flameGeometry = new THREE.ConeGeometry(0.8,1,8,16);
const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xff8800});
const flame = new THREE.Mesh(flameGeometry, flameMaterial);
scene.add(flame);
flame.rotation.z = Math.PI;
flame.position.y = -1.5;

// Window (Bonus)
const windowGeometry = new THREE.CircleGeometry(0.3, 32);
const windowMaterial = new THREE.MeshBasicMaterial({
    color: 0x000080
});
const rocketWindow = new THREE.Mesh(
    windowGeometry,
    windowMaterial
);
rocketWindow.position.set(0, 0.0, 1);
scene.add(rocketWindow);

// Left Fin (Bonus)
const leftFinGeometry = new THREE.BoxGeometry(0.1,0.6,2);
const leftFinMaterial = new THREE.MeshBasicMaterial({ color: 0x555050});
const leftFin = new THREE.Mesh(leftFinGeometry, leftFinMaterial);
scene.add(leftFin);
leftFin.position.y = -1;
leftFin.position.x = -1;

// Right Fin (Bonus)
const rightFinGeometry = new THREE.BoxGeometry(0.1,0.6,2);
const rightFinMaterial = new THREE.MeshBasicMaterial({ color: 0x555050});
const rightFin = new THREE.Mesh(rightFinGeometry, rightFinMaterial);
scene.add(rightFin);
rightFin.position.y = -1;
rightFin.position.x = 1;
// Ring
const ringGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xa52a2a });
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(ring);
ring.position.y = -0.5;
ring.rotation.x = Math.PI / 2;

//Saturn
const planetGeometry = new THREE.SphereGeometry(10, 32, 16);
const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xead6b8 });
const saturn = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(saturn);
saturn.position.set(15, 2, -10);
saturn.scale.set(0.2, 0.2, 0.2);

//Ring on planet
const saturnRingGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
const saturnRingMaterial = new THREE.MeshBasicMaterial({ color: 0xb89c72 });
const planetRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
scene.add(planetRing);
planetRing.position.set(15, 2, -10);
planetRing.scale.set(2, 2, 2);
planetRing.rotation.x = Math.PI / 2;

//moon
const moonGeometry = new THREE.SphereGeometry(0.5, 32, 16);
const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
const moonGroup = new THREE.Group();
scene.add(moonGroup);
moonGroup.position.set(-20, -10, -12);
moonGroup.add(moon);
moon.scale.set(30, 15, 10);

// Flag on the moon
const flagPoleGeometry = new THREE.CylinderGeometry(0.025, 0.025, 1.3, 8);
const flagPoleMaterial = new THREE.MeshBasicMaterial({ color: 0xdddddd });
const flagPole = new THREE.Mesh(flagPoleGeometry, flagPoleMaterial);
moonGroup.add(flagPole);
flagPole.scale.set(5, 5, 5);
flagPole.position.set(0, 10, 2.03);

const flagGeometry = new THREE.PlaneGeometry(0.75, 0.45);
const flagMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });
const flag = new THREE.Mesh(flagGeometry, flagMaterial);
moonGroup.add(flag);
flag.scale.set(8, 8, 8);
flag.position.set(3, 11, 2);


// Camera Position
camera.position.z = 5;

// Animation
function animate() {
    requestAnimationFrame(animate);

    saturn.rotation.y += 0.01;
    planetRing.rotation.y -= 0.01;

    renderer.render(scene, camera);
}

animate();

// Resize Support
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});