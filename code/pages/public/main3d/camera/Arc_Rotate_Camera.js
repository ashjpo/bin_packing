/**
 *      Universal_Camera类 
 *      *Arc_Rotate_Camera类
 *      Follow_Camera类
 *      DeviceOrientationCamera类
 */
function Arc_Rotate_Camera(scene,canvas){
    //---properties---
    //类前缀
    this.class_prefix='Arc_Rotate_Camera_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //canvas
    this.canvas=canvas;
    //camera
    var camera=null;

    //---functions---
    /**
     * 创建摄像机(可移动)
     */
    this.create_camera=function(){
        this.camera = new BABYLON.ArcRotateCamera(this.class_prefix+"_ArcRotateCamera", 0, 0, 0, new BABYLON.Vector3(20, 20, 50), scene);
        //default param
        this.camera.minZ=0.001;
        this.camera.speed=0.5;
        this.camera.wheelPrecision = 20;
        this.camera.setTarget(new BABYLON.Vector3(0,0,0));
        this.camera.checkCollisions = true;
        this.camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        this.camera.attachControl(this.canvas, true);
        return this.camera;
    };

    /**
     * 摄像机位置(纵向旋转角度alpha、横向旋转角度beta、半径)
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
     * 摄像机radius
     */
    this.set_radius=function(radius){
        if(!this.camera){
            return false;
        }else{
            this.camera.radius=radius;
            return true;
        }
    }
    this.get_radius=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.radius;
        }
    }

    /**
     * 摄像机alpha
     */
    this.set_alpha=function(alpha){
        if(!this.camera){
            return false;
        }else{
            this.camera.alpha=alpha;
            return true;
        }
    }
    this.get_alpha=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.alpha;
        }
    }

    /**
     * 摄像机beta
     */
    this.set_beta=function(beta){
        if(!this.camera){
            return false;
        }else{
            this.camera.beta=beta;
            return true;
        }
    }
    this.get_beta=function(){
        if(!this.camera){
            return null;
        }else{
            return this.camera.beta;
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