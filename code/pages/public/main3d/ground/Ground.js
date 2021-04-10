/**
 * GROUND
 */
function Ground(scene,size){
    //---properties---
    //类前缀
    this.class_prefix='ground_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //是否显示世界坐标
    this.if_show_world_ground=false;
    //是否创建坐标轴
    this.if_create_world_ground=false;
    //scene
    this.scene=scene;
    //size
    this.size=size;
    //Mesh_Group
    this.Mesh_Group_obj=new Mesh_Group(scene);

    //---functions---
    this.create_ground=function(){
        var ground = BABYLON.Mesh.CreateBox(this.class_prefix+"_ground_mesh", 1.0, scene);
        ground.scaling = new BABYLON.Vector3(this.size, 0.01, this.size);
        ground.material = new BABYLON.StandardMaterial(this.class_prefix+"ground_material", scene);
        ground.position = new BABYLON.Vector3(0, 0, 0);
        ground.material.alpha=0.5;

        this.if_create_world_ground=true;
        this.if_show_world_ground=true;
        this.Mesh_Group_obj.set_mesh(this.class_prefix+"_ground",ground);
    }

    /**
     * 显示
     */
    this.show_ground=function(){
        if(self.if_create_world_ground==false){
            this.create_ground();
            this.if_show_world_ground=true;
        }else{
            
            if(this.if_show_world_ground==false){
                this.Mesh_Group_obj.show_group();
                this.if_show_world_ground=true;
            }
        }
    }

    /**
     * 隐藏
     */
    this.hidden_ground=function(){
        if(self.if_create_world_ground==false){
            this.create_ground();
            this.if_show_world_ground=true;
        }
        if(this.if_show_world_ground==true){
            this.Mesh_Group_obj.hidden_group();
            this.if_show_world_ground=false;
        }
    }



}