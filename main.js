const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

//слайдер
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

let rotY = 0;

slider.addEventListener('input', (event) => {
  rotY = event.target.value / 1000;
  sliderValue.textContent = rotY.toFixed(4);
  

const animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.00;
  cube.rotation.y += rotY;
  renderer.render(scene, camera);
};

animate();
