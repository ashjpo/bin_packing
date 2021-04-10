/**
 * 
 */
function MMYSlider(root){
    //---properties---
    //类前缀
    this.class_prefix='slider_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    this.root=root;
    this.slider=null;
    this.slider_p=null;
    //---functions---
    /**
     * 
     */
    this.create_slider_st1=function(slider_width,slider_height,slider_min,slider_max,slider_value,speed){
        this.slider_p = new BABYLON.GUI.StackPanel();
        this.slider_p.width = (slider_width+slider_height)+"px";
        this.slider_p.height = slider_height+"px";
        this.slider_p.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.slider_p.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.root.addControl(this.slider_p);

        this.slider = new BABYLON.GUI.Slider();
        this.slider.minimum = slider_min;
        this.slider.maximum = slider_max;
        if(slider_value){
            this.slider.value = slider_value;
        }else{
            this.slider.value = 0;
        }
        this.slider.height = slider_height+"px";
        this.slider.width = slider_width+"px";
        this.slider_p.addControl(this.slider);

        this.slider.color="#00BFFF";
        this.slider.background="#808080";
        this.slider.isThumbCircle=true;
        this.slider.isThumbClamped=true;
        if(speed){
            this.slider.speed=speed;
        }else{
            this.slider.speed=0;
        }
    }

    this.create_slider_st2=function(slider_width,slider_height,slider_min,slider_max,slider_value,speed){
        this.slider_p = new BABYLON.GUI.StackPanel();
        this.slider_p.width = (slider_width+slider_height)+"px";
        this.slider_p.height = slider_height+"px";
        this.slider_p.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.slider_p.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.root.addControl(this.slider_p);

        this.slider = new BABYLON.GUI.Slider();
        this.slider.minimum = slider_min;
        this.slider.maximum = slider_max;
        if(slider_value){
            this.slider.value = slider_value;
        }else{
            this.slider.value = 0;
        }
        this.slider.height = slider_height+"px";
        this.slider.width = slider_width+"px";
        this.slider_p.addControl(this.slider);

        this.slider.color="#00BFFF";
        this.slider.background="#808080";
        this.slider.isThumbCircle=true;
        this.slider.isThumbClamped=false;
        if(speed){
            this.slider.speed=speed;
        }else{
            this.slider.speed=0;
        }
    }

    this.create_slider_st3=function(slider_width,slider_height,slider_min,slider_max,slider_value,speed){
        this.slider_p = new BABYLON.GUI.StackPanel();
        this.slider_p.width = (slider_width+slider_height)+"px";
        this.slider_p.height = slider_height+"px";
        this.slider_p.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        this.slider_p.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.root.addControl(this.slider_p);

        this.slider = new BABYLON.GUI.Slider();
        this.slider.minimum = slider_min;
        this.slider.maximum = slider_max;
        if(slider_value){
            this.slider.value = slider_value;
        }else{
            this.slider.value = 0;
        }
        this.slider.height = slider_height+"px";
        this.slider.width = slider_width+"px";
        this.slider_p.addControl(this.slider);

        this.slider.color="#00BFFF";
        this.slider.background="#808080";
        this.slider.isThumbCircle=false;
        this.slider.isThumbClamped=true;
        if(speed){
            this.slider.speed=speed;
        }else{
            this.slider.speed=0;
        }
    }

    /**
     * 颜色
     */
    this.set_color=function(color){
        this.slider.color=color;
    }
    this.set_background=function(color){
        this.slider.background=color;
    }
    this.set_alpha=function(alpha){
        this.slider.alpha=alpha;
    }
}