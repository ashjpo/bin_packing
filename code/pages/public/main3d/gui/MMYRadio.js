/**
 * 
 */
function MMYRadio(root){
    //---properties---
    //类前缀
    this.class_prefix='radio_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.radio_group=null;
    //this.radio=null;
    //---functions---
    /**
     * 
     */
    this.create_radio_group=function(){
        this.radio_group = new BABYLON.GUI.StackPanel();
        this.root.addControl(this.radio_group);
    }
    /**
     * 
     */
    this.create_radio=function(r_px,text,line_width,line_height,font_size,color,background){
        var radio = new BABYLON.GUI.RadioButton(this.class_prefix+"_radio");
        radio.height = r_px+"px";
        radio.width = r_px+"px";
        radio.color = "#000000";
        radio.background = "#F5F5F5";
        var header = BABYLON.GUI.Control.AddHeader(radio, text, line_width+"px", { isHorizontal: true, controlFirst: true });
        header.height = line_height+"px";
        header.fontSize=font_size;
        if(this.radio_group){
            this.radio_group.addControl(header);
        }
    }

}