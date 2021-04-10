/**
 * 
 * 
 * 
 */
function MMYObject(scene){
    //---properties---
    //类前缀
    this.class_prefix='mmy_object_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //mesh
    this.mesh=null;
    //axis
    this.axis=new Mesh_Axis(scene,3);
    //ground
    this.ground=new Mesh_Ground(scene,5);
    //transform
    this._position=new BABYLON.Vector3(0,0,0);
    this._scale=new BABYLON.Vector3(0,0,0);
    this._rotation=new BABYLON.Vector3(0,0,0);
    //material
    this.material=null;

    //---functions---
    /**
     * 向MMYObject设置mesh
     */
    this.set_mesh=function(mesh){
        this.mesh=mesh;
        this.axis.create_axis(this.mesh);
        this.ground.create_ground(this.mesh);
        this.axis.hidden_axis();
        this.ground.hidden_ground();
    }
    this.get_mesh=function(){
        return this.mesh;
    }

    /**
     * 设置材质
     */
    this.set_material=function(material_obj){
        this.material=material_obj.material;
        this.mesh.material=this.material;
    }

    /**
     * 可边材质
     */
    this.set_low_material=function(mco){
        this.mesh.material=mco.material_low;
    }
    this.set_high_material=function(mco){
        this.mesh.material=mco.material_high;
    }

    /**
     * axis
     * ground
     */
    this.hidden_axis=function(){
        this.axis.hidden_axis();
    }

    this.hidden_ground=function(){
        this.ground.hidden_ground();
    }

    this.show_axis=function(){
        this.axis.show_axis();
    }

    this.show_ground=function(){
        this.ground.show_ground();
    }



    /**
     * show hidden
     */
    this.show_obj=function(){
        this.mesh.isVisible=true;
    }
    this.hidden_obj=function(){
        //this.mesh.position=new BABYLON.Vector3(-10,0,0);
        this.mesh.isVisible=false;
    }

    /**
     * transform
     */
    //position
    this.set_position=function(ax,num){
        if(!this.mesh){
            return false;
        }
        if(ax=="x" || ax=="X"){
            this.mesh.position.x=num;
            return true;
        }else if(ax=="y" || ax=="Y"){
            this.mesh.position.y=num;
            return true;
        }else if(ax=="z" || ax=="Z"){
            this.mesh.position.z=num;
            return true;
        }
        return false
    }
    this.set_position_all=function(vec){
        if(!this.mesh){
            return false;
        }else{
            this.mesh.position=vec;
            return true;
        }
        
    }
    this.get_position=function(ax){
        if(!this.mesh){
            return NaN;
        }
        return new BABYLON.Vector3(this.mesh.position.x,this.mesh.position.y,this.mesh.position.z);
    }
    //scale
    this.set_scale=function(ax,num){
        if(!this.mesh){
            return false;
        }
        if(ax=="x" || ax=="X"){
            this.mesh.scaling.x=num;
            return true;
        }else if(ax=="y" || ax=="Y"){
            this.mesh.scaling.y=num;
            return true;
        }else if(ax=="z" || ax=="Z"){
            this.mesh.scaling.z=num;
            return true;
        }
        return false
    }
    this.get_scale=function(ax){
        if(!this.mesh){
            return NaN;
        }
        if(ax=="x" || ax=="X"){
            return this.mesh.scaling.x;
        }else if(ax=="y" || ax=="Y"){
            return this.mesh.scaling.y;
        }else if(ax=="z" || ax=="Z"){
            return this.mesh.scaling.z;
        }
    }
    this.set_scale_all=function(vec){
        if(!this.mesh){
            return false;
        }
        this.mesh.scaling=vec;
        return true;
    }
    this.get_scale=function(ax){
        if(!this.mesh){
            return NaN;
        }
        return new BABYLON.Vector3(this.mesh.scaling.x,this.mesh.scaling.y,this.mesh.scaling.z);
    }
    //rotation
    this.set_rotation=function(ax,num){
        if(!this.mesh){
            return false;
        }
        if(ax=="x" || ax=="X"){
            this.mesh.rotation.x=num;
            return true;
        }else if(ax=="y" || ax=="Y"){
            this.mesh.rotation.y=num;
            return true;
        }else if(ax=="z" || ax=="Z"){
            this.mesh.rotation.z=num;
            return true;
        }
        return false
    }
    this.get_rotation=function(ax){
        if(!this.mesh){
            return NaN;
        }
        if(ax=="x" || ax=="X"){
            return this.mesh.rotation.x;
        }else if(ax=="y" || ax=="Y"){
            return this.mesh.rotation.y;
        }else if(ax=="z" || ax=="Z"){
            return this.mesh.rotation.z;
        }
    }
    this.set_rotation_all=function(vec){
        if(!this.mesh){
            return false;
        }
        this.mesh.rotation=vec;
        return true;
    }
    this.get_rotation=function(ax){
        if(!this.mesh){
            return NaN;
        }
        return new BABYLON.Vector3(this.mesh.rotation.x,this.mesh.rotation.y,this.mesh.rotation.z);
    }

    /**
     * 碰撞
     */
    this.set_collision=function(if_ok){
        if(!this.mesh){
            return false;
        }else{
            this.mesh.checkCollisions=if_ok;
            return true;
        }
    }

    /**
     * 重力
     * [TODO]
     * 
     */

     //---回调---







}