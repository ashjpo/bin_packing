
/*
用于描述世界Ground


*/
function World_Ground(scene,size){
    //---properties---
    //类前缀
    this.class_prefix='world_ground_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //size
    this.size=size;
}

World_Ground.prototype = new Ground(this.sence,this.size);
