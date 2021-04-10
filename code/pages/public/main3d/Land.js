var ground_size=100;
/**
 * 创建天空盒
 * @param {*} sence 
 */
function create_skybox(scene){
    var texture = new BABYLON.CubeTexture("/WEB3D/skybox/st2/st2", scene);
    scene.createDefaultSkybox(texture, true, ground_size);
    return texture;
}

/**
 * 创建陆地
 * @param {*} scene 
 */
function create_ground(scene){
    var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
    groundMaterial.alpha=1;
    groundMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
    var ground = BABYLON.Mesh.CreateGround("ground", ground_size, ground_size, 1, scene);
    ground.material = groundMaterial;
    ground.receiveShadows = true;
}

function axis_and_ground(scene){
    var wa=new World_Axis(scene,300);
    wa.create_axis();

    //TEST
    var wg=new World_Ground(scene,300);
    wg.create_ground();
}