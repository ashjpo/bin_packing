/**
 * 
 */
function MMYLabel(root){
    //---properties---
    //类前缀
    this.class_prefix='label_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.label=null;
    this.rect1=null;
    //---functions---
    this.create_label_st1=function(mestext,width_px,height_px,font_color,font_size){
        this.label = new BABYLON.GUI.TextBlock(this.class_prefix);
        
        this.label.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.label.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.label.text = mestext;
        this.label.height = height_px+"px";
        this.label.width = width_px+"px";
        this.label.lineSpacing = "2px";
        this.label.textWrapping=true;
        this.label.color = font_color;
        this.label.fontSize = font_size;
        this.root.addControl(this.label);
    }

    this.create_label_st2=function(mestext,width_px,height_px,font_color,font_size){
        

        this.rect1 = new BABYLON.GUI.Rectangle(this.class_prefix+"_r");
        this.rect1.alpha=0.4
        this.rect1.height = height_px+"px";
        this.rect1.width = width_px+"px";
        this.rect1.thickness = 0;
        this.rect1.background = "#000000";
        this.root.addControl(this.rect1);
        this.rect1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.rect1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        this.label = new BABYLON.GUI.TextBlock(this.class_prefix+"_t");
        this.label.text = mestext;
        this.label.height = height_px+"px";
        this.label.width = width_px+"px";
        this.label.lineSpacing = "2px";
        this.label.textWrapping=true;
        this.label.color = font_color;
        this.label.fontSize = font_size;
        this.rect1.addControl(this.label);
        
    }

    /**
     * 设置位置
     */
    this.set_position=function(left,top){
        if(this.rect1){
            this.rect1.left=left;
            this.rect1.top=top;
        }else{
            this.label.left=left;
            this.label.top=top;
        }
    }
    

    /**
     * 连接物体
     */
    this.link_obj=function(obj){
        if(this.rect1){
            this.rect1.linkWithMesh(obj.mesh);
        }else{
            this.label.linkWithMesh(obj.mesh);
        }
    }
    this.set_link_offset=function(offset_x,offset_y){
        if(this.rect1){
            this.rect1.linkOffsetX=offset_x;
            this.rect1.linkOffsetY=offset_y;
        }else{
            this.label.linkOffsetX=offset_x;
            this.label.linkOffsetY=offset_y;
        }
        
    }

    

    /**
     * 颜色 -> 字体
     */
    this.set_font_color=function(font_color){
        this.label.color = font_color;
    }

}