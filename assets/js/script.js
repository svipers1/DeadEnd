const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bg3d").appendChild(renderer.domElement);

const starsGeometry = new THREE.BufferGeometry();
const stars = [];
for (let i = 0; i < 3000; i++) {
  stars.push(THREE.MathUtils.randFloatSpread(2000));
  stars.push(THREE.MathUtils.randFloatSpread(2000));
  stars.push(THREE.MathUtils.randFloatSpread(2000));
}
starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(stars, 3));

const starsMaterial = new THREE.PointsMaterial({ color: 0x00ffff });
const starField = new THREE.Points(starsGeometry, starsMaterial);
scene.add(starField);

camera.position.z = 400;
function animate() {
  requestAnimationFrame(animate);
  starField.rotation.y += 0.0008;
  starField.rotation.x += 0.0005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
