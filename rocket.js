// Scene
const scene = new THREE.Scene();

const ambientLight = new THREE.AmbientLight(0x777777, 0.6);
scene.add(ambientLight);

const sunlight = new THREE.DirectionalLight(0xffffff, 1.2);
sunlight.position.set(40, 5, 10);
scene.add(sunlight);

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
const bodyMaterial = new THREE.MeshLambertMaterial({
    color: 0x301934
});
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
scene.add(body);



// Nose Cone
const noseGeometry = new THREE.ConeGeometry(1, 1, 5);
const noseMaterial = new THREE.MeshLambertMaterial({
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
const glassMaterial = new THREE.MeshBasicMaterial({
    color: 0x66ccff,
    transparent: true,
    opacity: 0.5,
});
// Window (Bonus)
const windowGeometry = new THREE.CircleGeometry(0.3, 32);

const rocketWindow = new THREE.Mesh(
    windowGeometry,
    glassMaterial
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
const planetMaterial = new THREE.MeshPhongMaterial({
    color: 0xead6b8,
    shininess: 100
});
const saturn = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(saturn);
saturn.position.set(15, 2, -10);
saturn.scale.set(0.2, 0.2, 0.2);

//Ring on planet
const saturnRingGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
const saturnRingMaterial = new THREE.MeshPhongMaterial({ color: 0xb89c72, shininess: 100 });
const planetRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
scene.add(planetRing);
planetRing.position.set(15, 2, -10);
planetRing.scale.set(2, 2, 2);
planetRing.rotation.x = Math.PI / 2;

//moon
const moonGeometry = new THREE.SphereGeometry(0.5, 32, 16);
const moonMaterial = new THREE.MeshStandardMaterial({
    color: 0x949799,
    roughness: 1,
    metalness: 0
});

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

//UFO
const ufo = new THREE.Group();
scene.add(ufo);
ufo.position.set(-10, 5, -5);

const saucerGeometry = new THREE.SphereGeometry(1, 32, 16);
const saucerMaterial = new THREE.MeshBasicMaterial({ color: 0xFFA500 });
const saucer = new THREE.Mesh(saucerGeometry, saucerMaterial);
ufo.add(saucer);
saucer.scale.set(0.5, 0.2, 0.5);

const domeGeometry = new THREE.SphereGeometry(
    0.42, 24, 12,
    0, Math.PI * 2,
    0, Math.PI / 2
);

const dome = new THREE.Mesh(domeGeometry, glassMaterial);
ufo.add(dome);
dome.scale.set(1, 0.9, 0.5);
dome.position.set(0, 0.2, 0);

const rimGeometry = new THREE.TorusGeometry(0.5, 0.05, 16, 100);
const rimMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const rim = new THREE.Mesh(rimGeometry, rimMaterial);
ufo.add(rim);
rim.scale.set(1.1, 1.1, 1.1);
rim.rotation.x = Math.PI / 2;
rim.position.set(0, 0.02, 0);

//stars
const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
for (let i = 0; i < 500; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
    );
    scene.add(star);
}
// Camera Position
camera.position.z = 5;

// Animation
const clock = new THREE.Clock();
const ufoBaseY = ufo.position.y;
function animate() {
    requestAnimationFrame(animate);

    saturn.rotation.y += 0.01;
    planetRing.rotation.y -= 0.01;

    ufo.position.y = ufoBaseY + Math.sin(clock.getElapsedTime() * 2) * 0.25;

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