/*
用于存储Mesh得集合


*/
function Mesh_Group(scene){
    //---properties---
    //类前缀
    this.class_prefix='world_axis_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //用于存储Mesh
    this.mesh_array=new Array();
    //整个组的mesh
    //this.group_mesh=BABYLON.Mesh.CreateSphere(this.class_prefix+"_group_mesh", 10.0, 0.5, scene);
    //this.group_mesh.isVisible=false;
    //sphere.position=BABYLON.Vector3.Zero();

    //---functions---
    /*
    向group内添加mesh
    name->mesh的名字(不可重复)
    mesh->BABYLON.Mesh

    [RETURN:]
        注册过返回false 未注册返回true

    */
    this.set_mesh=function(name,mesh){
        if(this._if_has_name(name)){
            return false;
        }else{
            var temp=new Mesh_Group_Mesh(name,mesh);
            this.mesh_array.push(temp);
            return true
        }
        
    };

    /*
    获取group内得mesh,按name查找
    mesh
    没有返回null
    */
    this.get_mesh=function(name){
        if(!this._if_has_name(name)){
            return null;
        }else{
            for(var i=0;i<this.mesh_array.length;i++){
                if(name==this.mesh_array[i].name){
                    return this.mesh_array[i].mesh;
                }
            }
            return null;
        }
    };

    /**
     * 通过名字查找mesh并且移除 [是从group中移除，不是删除]
     */
    this.remove_mesh_by_name=function(name){
        var temp=-1;
        for(var i=0;i<this.mesh_array.length;i++){
            if(name==this.mesh_array[i].name){
                temp=i;
                break;
            }
        }
        if(temp!=-1){
            this.mesh_array.splice(temp,1);
            return true;
        }else{
            return false;
        }
    };

    /**
     * group_mesh位置更新
     
    this.update_group_mesh=function(){
        var min_x=-Infinity;
        var max_x=Infinity;
        for(var i=0;i<this.mesh_array.length;i++){
            var temp_x=this.mesh_array[i].mesh.position.x;
            if(temp_x>max_x){
                max_x=temp_x;
            }

            if(temp_x<min_x){
                min_x=temp_x;
            }
        }
        alert(min_x);
        alert(max_x);
        
    };*/

    /**
     * 通过名字查找mesh并且删除 [是从group中移除并且删除]
     
    this.delete_mesh_by_name=function(name){
        var remove_obj=this.get_mesh(name);
        if(remove_obj){
            alert(remove_obj);
            remove_obj=null;
            return true;
        }else{
            return false;
        }
    }
    */

    /**
     * 隐藏mesh
     */
    this.hidden_mesh_by_name=function(name){
        var remove_obj=this.get_mesh(name);
        if(remove_obj){
            remove_obj.isVisible = false;
            return true;
        }else{
            return false;
        }
    };

    /**
     * 显示mesh
     */
    this.show_mesh_by_name=function(name){
        var remove_obj=this.get_mesh(name);
        if(remove_obj){
            remove_obj.isVisible = true;
            return true;
        }else{
            return false;
        }
    };

    /**
     * 隐藏group
     */
    this.hidden_group=function(){
        for(var i=0;i<this.mesh_array.length;i++){
            this.mesh_array[i].mesh.isVisible=false;
        }
    };

    /**
     * 显示group
     */
    this.show_group=function(){
        for(var i=0;i<this.mesh_array.length;i++){
            this.mesh_array[i].mesh.isVisible=true;
        }
    };


   /**
    * 用于判断是否注册过这个name
    * @param {*} name 
    */
   this._if_has_name=function(name){
       for(var i=0;i<this.mesh_array.length;i++){
            if(name==this.mesh_array[i].name){
                return true;
            }else{
                return false;
            }
       }
   };







}



/**
 * 
 * @param {*} name 
 * @param {*} mesh 
 */
function Mesh_Group_Mesh(name,mesh){
    this.name=name
    this.mesh=mesh
}