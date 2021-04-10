/**
 * 
 */
function MMYObject_Group(scene){
    //---properties---
    this.scene=scene;
    //类前缀
    this.class_prefix='mmy_object_group_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.mesh=new BABYLON.Mesh(this.class_prefix+"_mesh",scene);
    
    //
    this.mesh_child_array=Array();
    //---functions---
    this.set_obj=function(mmy_obj){
        //mmy_obj.mesh.parent=this.mesh;
        this.mesh.addChild(mmy_obj.mesh);
        this.mesh_child_array.push(mmy_obj);
    }
    this.remove_obj=function(mmy_obj){
        //mmy_obj.mesh.parent=null;
        this.mesh.removeChild(mmy_obj.mesh);
        var temp_i=-1;
        for(var i=0;i<this.mesh_child_array.length;i++){
            if(this.mesh_child_array[i]==mmy_obj){
                temp_i=i;
                break;
            }
        }
        this.mesh_child_array.splice(temp_i,1);
    }
    this.show_group=function(){
        this.mesh.isVisible=true;
        for(var i=0;i<this.mesh_child_array.length;i++){
            this.mesh_child_array[i].mesh.isVisible=true;
            //this.mesh_child_array[i].hidden_axis();
            //this.mesh_child_array[i].hidden_ground();
        }
    }
    this.hidden_group=function(){
        //this.mesh.position=new BABYLON.Vector3(-10,0,0);
        this.mesh.isVisible=false;
        for(var i=0;i<this.mesh_child_array.length;i++){
            this.mesh_child_array[i].mesh.isVisible=false;
            this.mesh_child_array[i].hidden_axis();
            this.mesh_child_array[i].hidden_ground();
        }
    }
}
MMYObject_Group.prototype = new MMYObject(this.sence);