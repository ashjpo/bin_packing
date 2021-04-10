/**
 * 
 */
function Mesh_Axis(sence,size){
    //---properties---
    //类前缀
    this.class_prefix='mesh_axis_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.sence=sence;
    this.size=size;


}
Mesh_Axis.prototype = new Axis(this.sence,this.size);
Mesh_Axis.prototype.create_axis=function(mesh){
    this.mesh=mesh;
    //X
    var axisX = BABYLON.Mesh.CreateLines(this.class_prefix+"_axisX", [ 
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(this.size, 0, 0), new BABYLON.Vector3(this.size * 0.98, 0.02 * this.size, 0), 
        new BABYLON.Vector3(this.size, 0, 0), new BABYLON.Vector3(this.size * 0.98, -0.02 * this.size, 0)
        ], this.scene);
    axisX.color = new BABYLON.Color3(1, 0.6, 0.6);
    //var xChar = this._makeTextPlane("X", axisX.color, this.size / 10);
    //xChar.position = new BABYLON.Vector3(0.96 * this.size, -0.05 * this.size, 0);
    //Y
    var axisY = BABYLON.Mesh.CreateLines(this.class_prefix+"axisY", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, this.size, 0), new BABYLON.Vector3( -0.02 * this.size, this.size * 0.98, 0), 
        new BABYLON.Vector3(0, this.size, 0), new BABYLON.Vector3( 0.02 * this.size, this.size * 0.98, 0)
        ], scene);
    axisY.color = new BABYLON.Color3(0.6, 1, 0.6);
    //var yChar = this._makeTextPlane("Y", axisY.color, this.size / 10);
    //yChar.position = new BABYLON.Vector3(0, 0.96 * this.size, -0.05 * this.size);
    //Z
    var axisZ = BABYLON.Mesh.CreateLines(this.class_prefix+"axisZ", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, this.size), new BABYLON.Vector3( 0 , -0.02 * this.size, this.size * 0.98),
        new BABYLON.Vector3(0, 0, this.size), new BABYLON.Vector3( 0, 0.02 * this.size, this.size * 0.98)
        ], scene);
    axisZ.color = new BABYLON.Color3(0.6, 0.6, 1);
    //var zChar = this._makeTextPlane("Z", new BABYLON.Vector3(255, 255, 255), this.size / 10);
    //zChar.position = new BABYLON.Vector3(0, 0.05 * this.size, 0.98 * this.size);

    axisX.parent=mesh;
    axisY.parent=mesh;
    axisZ.parent=mesh;
    //xChar.parent=mesh;
    //yChar.parent=mesh;
    //zChar.parent=mesh;

    this.if_create_world_axis=true;
    this.if_show_world_axis=true;
    
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_axisX",axisX);
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_axisY",axisY);
    this.Mesh_Group_obj.set_mesh(this.class_prefix+"_axisZ",axisZ);

    //this.Mesh_Group_obj.set_mesh(this.class_prefix+"_planX",xChar);
    //this.Mesh_Group_obj.set_mesh(this.class_prefix+"_planY",yChar);
    //this.Mesh_Group_obj.set_mesh(this.class_prefix+"_planZ",zChar);
    
}



