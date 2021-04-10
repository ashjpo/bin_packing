
/*
用于描述Ground


*/
function Mesh_Ground(scene,size){
    //---properties---
    //类前缀
    this.class_prefix='mesh_ground_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //size
    this.size=size;
    this.mesh=null;
    this.ground=null;

}

Mesh_Ground.prototype = new Ground(this.sence,this.size);
Mesh_Ground.prototype.create_ground=function(mesh){
    this.mesh=mesh;
    var ground = BABYLON.Mesh.CreateBox(this.class_prefix+"_ground_mesh", 1.0, scene);
    ground.scaling = new BABYLON.Vector3(this.size, 0.01, this.size);
    ground.material = new BABYLON.StandardMaterial(this.class_prefix+"ground_material", scene);
    //ground.position = new BABYLON.Vector3(mesh.position.x, mesh.position.y, mesh.position.z);
    ground.material.alpha=0.5;
    ground.material.diffuseColor=new BABYLON.Color3(0.5,0.5,0.5);
    this.ground=ground;
    this.if_create_world_ground=true;
    this.if_show_world_ground=true;
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_ground",ground);
    ground.parent=mesh;
}