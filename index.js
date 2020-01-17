import * as THREE from '../../three.js/build/three.module.js';

import Stats from '../../three.js/examples/jsm/libs/stats.module.js';
// import { GUI } from '../../three.js/examples/jsm/libs/dat.gui.module.js';
import { OrbitControls } from '../../three.js/examples/jsm/controls/OrbitControls.js';

let container = document.querySelector('#scene-container');
container.width = 800;
container.height = 500;

let container_width = container_width;
let container_height = container_height;

let camera, scene, renderer
let controls;

//建立場景
function init() {

    scene = new THREE.Scene();

    let axes = new THREE.AxesHelper(5);
    scene.add(axes);

    createCamera();
    createLights();
    createRenderer();
    createEvent();
    createControls();

    renderer.setAnimationLoop(() => {
        // update();
        render();
    });
}

// 創建相機
function createCamera() {

    let fov = 65;
    let aspect = container_width / container_height;
    let near = 0.1;
    let far = 1000;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.lookAt(scene.position);
    camera.position.z = 50;

    // let left = - container_width * 3;
    // let right = container_width * 3;
    // let top = container_height * 3;
    // let bottom = - container_height * 3;
    // let near = 1, far = 1000;
    // camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
    // camera.position.z = 1000;

}

// 創建光源
function createLights() {

    scene.add(new THREE.AmbientLight(0xffffff));

}

function createRenderer() {

    renderer = new THREE.WebGLRenderer({ canvas: container });
    renderer.setSize(container_width, container_height);
    renderer.setPixelRatio(window.devicePixelRatio);

}

function createEvent(){

}

// 渲染更新
function render() {

    renderer.render(scene, camera);

}

init();

function createControls() {

    controls = new OrbitControls(camera, renderer.domElement);
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 1;
    controls.addEventListener('change', renderer);
    controls.panSpeed = 0.1;
    controls.rotateSpeed = 0.1;
    controls.update();

}