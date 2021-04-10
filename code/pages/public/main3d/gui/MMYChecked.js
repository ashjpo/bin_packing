/**
 * 
 */
function MMYChecked(root){
    //---properties---
    //类前缀
    this.class_prefix='check_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.check_group=null;
    //this.radio=null;
    //---functions---
    /**
     * 
     */
    this.create_check=function(r_px,text,text_width,text_height,if_checked,font_size,color,background){
        this.check_group = new BABYLON.GUI.StackPanel();
        this.check_group.width = (text_width+r_px+10)+"px";
        this.check_group.height=text_height+"px";
        this.check_group.isVertical = false;
        this.check_group.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.check_group.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.root.addControl(this.check_group);

        var checkbox = new BABYLON.GUI.Checkbox(this.class_prefix+"_check");
        checkbox.height = r_px+"px";
        checkbox.width = r_px+"px";
        checkbox.isChecked = if_checked;
        checkbox.color = "#F5F5F5";
        //checkbox.background = "#F5F5F5";

        var header = new BABYLON.GUI.TextBlock();
        header.text = text;
        header.width = text_width+"px";
        header.marginLeft = "5px";
        header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        header.color = "#000000";
        header.height = text_height+"px";
        if(font_size){
            header.fontSize=font_size;
        }else{
            header.fontSize=12;
        }
        if(this.check_group){
            this.check_group.addControl(checkbox);
            this.check_group.addControl(header);
        }
    }

}