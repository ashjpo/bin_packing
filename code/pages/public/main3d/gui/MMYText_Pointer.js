/**
 * 
 */
function MMYText_Pointer(root){
    //---properties---
    //类前缀
    this.class_prefix='text_pointer_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.pointer=null;
    this.target=null;
    this.line=null;
    this.label=null;


    
    
    //---functions---
    /**
     * style1 标签形式
     */
    this.create_text_pointer=function(target_obj,text,text_height,text_width,line_length,font_size){
        this.pointer = new BABYLON.GUI.Rectangle(this.class_prefix+"_pointer");
        this.pointer.width = text_width+"px";
        this.pointer.height = text_height+"px";
        this.pointer.cornerRadius = Math.ceil(text_height/2);
        this.pointer.color = "#000000";
        this.pointer.thickness = 1;
        this.pointer.background = "#000000";
        this.root.addControl(this.pointer);
        this.pointer.linkWithMesh(target_obj);   
        this.pointer.linkOffsetY = -1*line_length+"px";
        this.pointer.alpha=0.5;

        this.label = new BABYLON.GUI.TextBlock(this.class_prefix+"_label");
        this.label.text = text;
        this.label.color="#F5F5F5";
        if(font_size){
            this.label.fontSize=font_size;
        }else{
            this.label.fontSize=12;
        }
        this.label.lineSpacing = "2px";
        this.label.textWrapping=true;
        this.pointer.addControl(this.label);

        this.target = new BABYLON.GUI.Ellipse(this.class_prefix+"_target");
        this.target.width = "6px";
        this.target.height = "6px";
        this.target.color = "#000000";
        this.target.thickness = 1;
        this.target.background = "#000000";
        this.root.addControl(this.target);
        this.target.linkWithMesh(target_obj);   

        this.line = new BABYLON.GUI.Line(this.class_prefix+"_line");
        this.line.lineWidth = 2;
        this.line.color = "#000000";
        this.line.y2 = Math.ceil(text_height/2);
        this.line.linkOffsetY = -3;
        this.root.addControl(this.line);
        this.line.linkWithMesh(target_obj); 
        this.line.connectedControl = this.pointer;  
        this.line.alpha=0.5;
    }

    /**
     * style1 标签形式(没有背景和边框)
     */
    this.create_text_pointer_ori=function(target_obj,text,text_height,text_width,line_length,font_size){
        this.create_text_pointer(target_obj,text,text_height,text_width,line_length,font_size);
        this.pointer.color = null;
        this.pointer.thickness = 0;
        this.pointer.background = null;
        this.label.color = "#000000";
        this.pointer.alpha=1;
    }

    /**
     * 隐藏
     */
    this.hidden_pointer=function(){
        this.pointer.isVisible=false;
        this.target.isVisible=false;
        this.line.isVisible=false;
        this.label.isVisible=false;
    }

    /**
     * 显示
     */
    this.show_pointer=function(){
        this.pointer.isVisible=true;
        this.target.isVisible=true;
        this.line.isVisible=true;
        this.label.isVisible=true;
    }
    
    /**
     * radius
     */
    this.set_radius=function(radius){
        this.pointer.cornerRadius=radius;
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
        this.pointer.color=color;
    }
    this.set_pointer_bg_color=function(color){
        this.pointer.background=color;
    }
    this.set_alpha=function(alpha){
        this.pointer.alpha=alpha;
    }
}