/**
 *      *Universal_Camera类 
 *      Arc_Rotate_Camera类
 *      Follow_Camera类
 *      DeviceOrientationCamera类
 */
function Universal_Camera(scene,canvas){
    //---properties---
    //类前缀
    this.class_prefix='Universal_Camera_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //canvas
    this.canvas=canvas;
    //camera
    this.camera=null;

    //---functions---
    /**
     * 创建摄像机(可移动)
     */
    this.create_camera=function(){
        this.camera = new BABYLON.UniversalCamera(this.class_prefix+"_UniversalCamera", new BABYLON.Vector3(0,0,0), scene);
        //default param
        this.camera.minZ=0.001;
        this.camera.speed=1;
        this.camera.setTarget(new BABYLON.Vector3(1,0,1));
        this.camera.checkCollisions = true;
        this.camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        this.camera.attachControl(this.canvas, true);
        return this.camera;
    };

    /**
     * 创建摄像机(不可移动)
     * target->mesh/vector
     */
    this.create_camera_target=function(target){
        this.camera = new BABYLON.UniversalCamera(this.class_prefix+"_UniversalCamera", new BABYLON.Vector3(0, 0, 0), scene);
        //default param
        this.camera.lockedTarget=target;
        this.camera.minZ=0.001;
        this.camera.speed=5;
        this.camera.setTarget(new BABYLON.Vector3(0,0,0));
        this.camera.checkCollisions = true;
        this.camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        this.camera.attachControl(this.canvas, true);
        return this.camera;
    }

    /**
     * 摄像机位置
     */
    this.set_position=function(vector){
        if(!this.camera){
            return false;
        }else{
            this.camera.position=vector;
            return true;
        }
    }
    this.get_position=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.position;
        }
    }

    /**
     * 摄像机目标
     * target->mesh/vector
     */
    this.set_target=function(target){
        if(!this.camera){
            return false;
        }else{
            this.camera.setTarget(target);
            return true;
        }
    }

    /**
     * 摄像机移动速度
     */
    this.set_speed=function(speed){
        if(!this.camera){
            return false;
        }else{
            this.camera.speed=speed;
            return true;
        }
    }
    this.get_speed=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.speed;
        }
    }

    /**
     * 摄像机刚体大小
     */
    this.set_ellipsoid=function(ellipsoid){
        if(!this.camera){
            return false;
        }else{
            this.camera.ellipsoid=ellipsoid;
            return true;
        }
    }
    this.get_ellipsoid=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.ellipsoid;
        }
    }

    /**
     * 摄像机角度
     */
    this.set_rotation=function(rotation){
        if(!this.camera){
            return false;
        }else{
            this.camera.rotation=rotation;
            return true;
        }
    }
    this.get_rotation=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.rotation;
        }
    }

    /**
     * 摄像机碰撞
     */
    this.set_collide=function(collide){
        if(!this.camera){
            return false;
        }else{
            this.camera.checkCollisions=collide;
            return true;
        }
    }



    //---回调---

    //---移动---
}