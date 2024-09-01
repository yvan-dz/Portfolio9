document.addEventListener('DOMContentLoaded', function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('particle-container').appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const particleCount = 5000;

    for (let i = 0; i < particleCount; i++) {
        const x = THREE.MathUtils.randFloatSpread(200);
        const y = THREE.MathUtils.randFloatSpread(200);
        const z = THREE.MathUtils.randFloatSpread(200);

        vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0xff4500, size: 2 });
    const particles = new THREE.Points(geometry, material);

    scene.add(particles);

    camera.position.z = 100;

    function animate() {
        requestAnimationFrame(animate);

        particles.rotation.x += 0.002;
        particles.rotation.y += 0.002;

        renderer.render(scene, camera);
    }

    animate();
});
