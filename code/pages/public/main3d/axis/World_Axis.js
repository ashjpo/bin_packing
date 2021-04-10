/*
用于描述世界坐标系


*/
function World_Axis(scene,size){
    //---properties---
    //类前缀
    this.class_prefix='world_axis_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //size
    this.size=size;
    this.mesh=null;
}

World_Axis.prototype = new Axis(this.sence,this.size);
World_Axis.prototype.create_axis=function(){
    //X
    var axisX = BABYLON.Mesh.CreateLines(this.class_prefix+"_axisX", [ 
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(this.size, 0, 0), new BABYLON.Vector3(this.size * 0.98, 0.02 * this.size, 0), 
        new BABYLON.Vector3(this.size, 0, 0), new BABYLON.Vector3(this.size * 0.98, -0.02 * this.size, 0)
        ], this.scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = this._makeTextPlane("X", "red", this.size / 10);
    xChar.position = new BABYLON.Vector3(0.96 * this.size, -0.05 * this.size, 0);
    //Y
    var axisY = BABYLON.Mesh.CreateLines("axisY", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, this.size, 0), new BABYLON.Vector3( -0.02 * this.size, this.size * 0.98, 0), 
        new BABYLON.Vector3(0, this.size, 0), new BABYLON.Vector3( 0.02 * this.size, this.size * 0.98, 0)
        ], scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = this._makeTextPlane("Y", "green", this.size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.96 * this.size, -0.05 * this.size);
    //Z
    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, this.size), new BABYLON.Vector3( 0 , -0.02 * this.size, this.size * 0.98),
        new BABYLON.Vector3(0, 0, this.size), new BABYLON.Vector3( 0, 0.02 * this.size, this.size * 0.98)
        ], scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = this._makeTextPlane("Z", "blue", this.size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * this.size, 0.98 * this.size);

    this.if_create_world_axis=true;
    this.if_show_world_axis=true;
    
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_axisX",axisX);
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_axisY",axisY);
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_axisZ",axisZ);

    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_planX",xChar);
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_planY",yChar);
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_planZ",zChar);
}
