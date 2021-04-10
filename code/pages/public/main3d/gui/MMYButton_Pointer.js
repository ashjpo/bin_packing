/**
 * 
 */
function MMYButton_Pointer(root){
    //---properties---
    //类前缀
    this.class_prefix='button_pointer_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.pointer=null;
    this.target=null;
    this.line=null;
    this.label=null;


    
    
    //---functions---
    /**
     * style1 按钮形式
     */
    this.create_button_pointer=function(target_obj,text,text_height,text_width,line_length,font_size){
        this.button = BABYLON.GUI.Button.CreateSimpleButton(this.class_prefix+"_button_pointer",text);
        this.button.adaptWidthToChildren = true;
        this.button.height = text_height+"px";
        this.button.width = text_width+"px";
        if (typeof(radius) != "undefined"){
            this.button.cornerRadius = radius;
        }
        this.button.cornerRadius = Math.ceil(text_height/2);
        this.button.color = "#000000";
        this.button.thickness = 1;
        this.button.background = "#000000";
        this.root.addControl(this.button);
        this.button.linkWithMesh(target_obj.mesh);   
        this.button.linkOffsetY = -1*line_length+"px";
        this.button.alpha=0.5;
        this.button.color="#F5F5F5";

        if(font_size){
            this.button.fontSize=font_size;
        }else{
            this.button.fontSize=12;
        }

        this.target = new BABYLON.GUI.Ellipse(this.class_prefix+"_target");
        this.target.width = "6px";
        this.target.height = "6px";
        this.target.color = "#000000";
        this.target.thickness = 1;
        this.target.background = "#000000";
        this.root.addControl(this.target);
        this.target.linkWithMesh(target_obj.mesh);   

        this.line = new BABYLON.GUI.Line(this.class_prefix+"_line");
        this.line.lineWidth = 2;
        this.line.color = "#000000";
        this.line.y2 = Math.ceil(text_height/2);
        this.line.linkOffsetY = -3;
        this.root.addControl(this.line);
        this.line.linkWithMesh(target_obj.mesh); 
        this.line.connectedControl = this.button;  
        this.line.alpha=0.5;
    }

    /**
     * style1 按钮形式
     */
    this.create_image_button_pointer=function(target_obj,img_path,text_height,text_width,line_length,font_size){
        this.button = BABYLON.GUI.Button.CreateImageOnlyButton(this.class_prefix+"_image_button_pointer",img_path);
        this.button.adaptWidthToChildren = true;
        this.button.height = text_height+"px";
        this.button.width = text_width+"px";
        if (typeof(radius) != "undefined"){
            this.button.cornerRadius = radius;
        }
        this.button.cornerRadius = Math.ceil(text_height/2);
        this.button.color = "#000000";
        this.button.thickness = 1;
        this.button.background = "#000000";
        this.root.addControl(this.button);
        this.button.linkWithMesh(target_obj.mesh);   
        this.button.linkOffsetY = -1*line_length+"px";
        this.button.alpha=0.5;
        this.button.color="#F5F5F5";

        if(font_size){
            this.button.fontSize=font_size;
        }else{
            this.button.fontSize=12;
        }

        this.target = new BABYLON.GUI.Ellipse(this.class_prefix+"_target");
        this.target.width = "6px";
        this.target.height = "6px";
        this.target.color = "#000000";
        this.target.thickness = 1;
        this.target.background = "#000000";
        this.root.addControl(this.target);
        this.target.linkWithMesh(target_obj.mesh);   

        this.line = new BABYLON.GUI.Line(this.class_prefix+"_line");
        this.line.lineWidth = 2;
        this.line.color = "#000000";
        this.line.y2 = Math.ceil(text_height/2);
        this.line.linkOffsetY = -3;
        this.root.addControl(this.line);
        this.line.linkWithMesh(target_obj.mesh); 
        this.line.connectedControl = this.button;  
        this.line.alpha=0.5;
    }

    /**
     * 隐藏
     */
    this.hidden_pointer=function(){
        this.button.isVisible=false;
        this.target.isVisible=false;
        this.line.isVisible=false;
        this.label.isVisible=false;
    }

    /**
     * 显示
     */
    this.show_pointer=function(){
        this.button.isVisible=true;
        this.target.isVisible=true;
        this.line.isVisible=true;
        this.label.isVisible=true;
    }

    /**
     * radius
     */
    this.set_radius=function(radius){
        this.button.cornerRadius=radius;
    }



    /**
     * 颜色
     */
    this.set_text_color=function(color){
        this.label.color=color;
    }
    this.set_line_color=function(color){
        this.line.color=color;
        this.target.color=color;
        this.target.background=color;
        this.button.color=color;
    }
    this.set_pointer_bg_color=function(color){
        this.button.background=color;
    }
    this.set_alpha=function(alpha){
        this.button.alpha=alpha;
    }
}