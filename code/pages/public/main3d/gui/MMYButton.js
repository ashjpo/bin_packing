/**
 * 
 */
function MMYButton(root){
    //---properties---
    //类前缀
    this.class_prefix='button_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.button=null;
    //---functions---

    /**
     * style1
     * 创建空心nomal按钮
     * 
     * width_px,height_px,font_size,radius,border 单位px
     */
    this.create_button_st1=function(mestext,width_px,height_px,button_type,font_size,radius,border,icon_path){
        if (typeof(icon_path) != "undefined"){
            this.button = BABYLON.GUI.Button.CreateImageButton(this.class_prefix+"_simple_button",mestext,icon_path);
        }else{
            this.button = BABYLON.GUI.Button.CreateSimpleButton(this.class_prefix+"_simple_button",mestext);
        }
        this.button.adaptWidthToChildren = true;
        this.button.height = height_px+"px";
        this.button.width = width_px+"px";
        this.button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        if (typeof(radius) != "undefined"){
            this.button.cornerRadius = radius;
        }
        //设置颜色
        if(button_type=="error"){
            this.button.color = "#8B0000";
        }else if(button_type=="warning"){
            this.button.color = "#FFA500";
        }else if(button_type=="info"){
            this.button.color = "#00BFFF";
        }else{
            this.button.color = "#C0C0C0";
        }
        
        if (typeof(border) != "undefined"){
            this.button.thickness = border;
        }
        //this.button.background = "red";
        this.root.addControl(this.button);    
        if (typeof(font_size) != "undefined"){
            this.button.fontSize = font_size;
        }   
    }

    /**
     * style2
     * 创建实心nomal按钮
     * 
     * width_px,height_px,font_size,radius,border 单位px
     */
    this.create_button_st2=function(mestext,width_px,height_px,button_type,font_size,radius,border){
        if (typeof(icon_path) != "undefined"){
            this.button = BABYLON.GUI.Button.CreateImageButton(this.class_prefix+"_simple_button",mestext,icon_path);
        }else{
            this.button = BABYLON.GUI.Button.CreateSimpleButton(this.class_prefix+"_simple_button",mestext);
        }
        this.button.adaptWidthToChildren = true;
        this.button.height = height_px+"px";
        this.button.width = width_px+"px";
        this.button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        if (typeof(radius) != "undefined"){
            this.button.cornerRadius = radius;
        }
        //设置颜色
        if(button_type=="error"){
            this.button.color = "#8B0000";
        }else if(button_type=="warning"){
            this.button.color = "#FFA500";
        }else if(button_type=="info"){
            this.button.color = "#00BFFF";
        }else{
            this.button.color = "#C0C0C0";
        }
        
        if (typeof(border) != "undefined"){
            this.button.thickness = border;
        }

        if(button_type=="error"){
            this.button.background = "#F08080";
        }else if(button_type=="warning"){
            this.button.background = "#FFDEAD";
        }else if(button_type=="info"){
            this.button.background = "#87CEFA";
        }else{
            this.button.background = "#F5F5F5";
        }
        //this.button.background = "red";
        this.root.addControl(this.button);    
        if (typeof(font_size) != "undefined"){
            this.button.fontSize = font_size;
        }   
    }

    /**
     * style3
     * 创建全图片按钮
     * 
     * width_px,height_px,radius,border 单位px
     */
    this.create_button_image=function(img_path,width_px,height_px,radius,button_type,border){
        this.button = BABYLON.GUI.Button.CreateImageOnlyButton(this.class_prefix+"_image_button",img_path);
        this.button.adaptWidthToChildren = true;
        this.button.height = height_px+"px";
        this.button.width = width_px+"px";
        this.button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        if (typeof(radius) != "undefined"){
            this.button.cornerRadius = radius;
        }
        //设置颜色
        if(button_type=="error"){
            this.button.color = "#8B0000";
        }else if(button_type=="warning"){
            this.button.color = "#FFA500";
        }else if(button_type=="info"){
            this.button.color = "#00BFFF";
        }else{
            this.button.color = "#C0C0C0";
        }
        
        if (typeof(border) != "undefined"){
            this.button.thickness = border;
        }else{
            this.button.thickness = 0;
        }
        //this.button.background = "red";
        this.root.addControl(this.button);    

    }

    /**
     * 设置位置
     */
    this.set_position=function(left,top){
        this.button.left=left;
        this.button.top=top;
    }
    

    /**
     * 连接物体
     */
    this.link_obj=function(obj){
        this.button.linkWithMesh(obj.mesh);
    }
    this.set_link_offset=function(offset_x,offset_y){
        this.button.linkOffsetX=offset_x;
        this.button.linkOffsetY=offset_y;
    }

    

    /**
     * 颜色 -> 背景，边框，字体
     */
    this.set_button_color=function(txtcolor){
        this.button.color=txtcolor;
    }
    this.set_background_color=function(txtcolor){
        this.button.background=txtcolor;
    }
    this.set_alpha=function(alpha){
        this.button.alpha=alpha;
    }


}