/**
 * 
 */
function MMYMaterial_Change(scene){
    //---properties---
    //类前缀
    this.class_prefix='material_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //material
    this.material_low=null;
    //scale
    this.v_scale=null;
    this.u_scale=null;


    this.texture_root_path="";
    this.high_qulity="product";
    this.low_qulity="tlow";

    this.if_set_reflectivityTexture=false;
    this.if_set_microSurfaceTexture=false;
    this.if_set_Occlusion=false;
    this.if_set_bumpTexture=false;
    this.if_set_diffuseTexture=false;
    this.if_set_metallicTexture=false;

    this.reflectivityTexture_path="";
    this.microSurfaceTexture_path="";
    this.Occlusion_path="";
    this.bumpTexture_path="";
    this.diffuseTexture_path="";
    this.metallicTexture_path="";

    this.time_delay=0;

    this.first_set=true;
    this.call_back_obj=null;



    //Texture_array
    this.texture_array=Array();

    //---functions---
    /**
     * 创建材质
     */
    this.create_material=function(texture_root_path,high_qulity,time_delay){
        if(time_delay){
            this.time_delay=time_delay;
        }
        if(high_qulity){
            this.high_qulity=high_qulity;
        }
        this.material_low = new BABYLON.PBRMaterial(this.class_prefix+"_material", this.scene);
        if(texture_root_path){
            this.texture_root_path=texture_root_path;
        }
        //this.material_low = new BABYLON.StandardMaterial(this.class_prefix+"_material", this.scene);
        //环境反射
        this.material_low.environmentIntensity = 0.1;
        this.material_low.specularIntensity = 0.5;
        //透明度模式
        this.material_low.transparencymode=0;
        this.material_low.metallic=0;
        
        

        return this.material_low;
    }
    

    /*this.test=function(){
        BABYLON.BaseTexture.WhenAllReady(this.texture_array,this.first_call_back);
    }*/

    /**
     * 设置贴图根目录
     */
    this.set_texture_root_path=function(texture_root_path){
        this.texture_root_path=texture_root_path;
    }

    /**
     * 设置默认贴图质量
     */
    this.set_low_qulity=function(qulity){
        this.low_qulity=qulity;
    }
    this.get_low_qulity=function(){
        return this.low_qulity;
    }
    this.set_high_qulity=function(qulity){
        this.high_qulity=qulity;
    }
    this.get_high_qulity=function(){
        return this.high_qulity;
    }

    /**
     * 重新加载贴图提升质量
     */
    this.reload_texture=function(){
        //alert("ADSADSA"+this.high_qulity+this.if_set_bumpTexture);
        this.texture_array=Array();
        this.material_high = new BABYLON.PBRMaterial(this.class_prefix+"_material", this.scene);
        if(this.if_set_reflectivityTexture){
            var reflectivityTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.high_qulity+"/"+this.reflectivityTexture_path, this.scene);
            this.texture_array.push(reflectivityTexture);
            if(this.v_scale && this.v_scale!=-1){
                reflectivityTexture.v_scale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                reflectivityTexture.u_scale=this.u_scale;
            }
            this.material_high.reflectivityTexture = reflectivityTexture;
            this.material_high.useMicroSurfaceFromReflectivityMapAlpha = true;
        }

        if(this.if_set_microSurfaceTexture){
            var microSurfaceTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.high_qulity+"/"+this.microSurfaceTexture_path, this.scene);
            this.texture_array.push(microSurfaceTexture);
            if(this.v_scale && this.v_scale!=-1){
                microSurfaceTexture.v_scale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                microSurfaceTexture.u_scale=this.u_scale;
            }
            this.material_high.microSurfaceTexture=microSurfaceTexture;
        }

        if(this.if_set_Occlusion){
            var Occlusion=new BABYLON.Texture(this.texture_root_path+"/"+this.high_qulity+"/"+this.Occlusion_path, this.scene);
            this.texture_array.push(Occlusion);
            if(this.v_scale && this.v_scale!=-1){
                Occlusion.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                Occlusion.uScale=this.u_scale;
            }
            this.material_high.ambientTexture = Occlusion;
            this.material_high.ambientTextureStrength=this.material_low.ambientTextureStrength;
            this.material_high.ambientTextureImpactOnAnalyticalLights=this.material_low.ambientTextureImpactOnAnalyticalLights;
        }

        if(this.if_set_bumpTexture){
            var bumpTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.high_qulity+"/"+this.bumpTexture_path, this.scene);
            this.texture_array.push(bumpTexture);
            if(this.v_scale && this.v_scale!=-1){
                bumpTexture.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                bumpTexture.uScale=this.u_scale;
            }
            this.material_high.bumpTexture = this.material_low.bumpTexture;
            this.material_high.useHorizonOcclusion=this.material_low.useHorizonOcclusion;
            this.material_high.useParallaxOcclusion=this.material_low.useParallaxOcclusio;
            this.material_high.useParallax=this.material_low.useParallax;
        }

        if(this.if_set_diffuseTexture){
            var diffuseTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.high_qulity+"/"+this.diffuseTexture_path, this.scene);
            this.texture_array.push(diffuseTexture);
            if(this.v_scale && this.v_scale!=-1){
                diffuseTexture.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                diffuseTexture.uScale=this.u_scale;
            }
            this.material_high.albedoTexture = diffuseTexture;
            this.material_high.albedoColor=this.material_low.albedoColor;
        }

        if(this.if_set_metallicTexture){
            var metallicTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.high_qulity+"/"+this.metallicTexture_path, this.scene);
            this.texture_array.push(metallicTexture);
            if(this.v_scale && this.v_scale!=-1){
                metallicTexture.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                metallicTexture.uScale=this.u_scale;
            }
            this.material_high.metallicTexture = metallicTexture;
            this.material_high.useRoughnessFromMetallicTextureAlpha=true;
        }

        this.material_high.alpha=this.material_low.alpha;
        this.material_high.roughness=this.material_low.roughness;
        this.material_high.metallic=this.material_low.metallic;
        //BABYLON.BaseTexture.WhenAllReady(this.texture_array,this.second_call_back);

    }

    //transparencyMode
    this.set_transparencyMode=function(transparencyMode){
        this.material_low.transparencyMode = transparencyMode;
    }

    //environmentIntensity
    this.set_environmentIntensity=function(environmentIntensity){
        this.material_low.environmentIntensity = environmentIntensity;
    }

    //specularIntensity
    this.set_specularIntensity=function(specularIntensity){
        this.material_low.specularIntensity = specularIntensity;
    }

    //scale
    this.set_scale=function(v_scale,u_scale){
        this.v_scale=v_scale;
        this.u_scale=u_scale;
    }

    //局部反射*
    this.set_reflectivity=function(texture_path){
        this.reflectivityTexture_path=texture_path;
        var reflectivityTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.low_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(reflectivityTexture);
        this.if_set_reflectivityTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            reflectivityTexture.v_scale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            reflectivityTexture.u_scale=this.u_scale;
        }
        this.material_low.reflectivityTexture = reflectivityTexture;
        this.material_low.useMicroSurfaceFromReflectivityMapAlpha = true;
    }

    //粗糙度/光泽度roughness/glossiness*
    this.set_roughness_glossiness=function(texture_path){
        this.microSurfaceTexture_path=texture_path;
        var microSurfaceTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.low_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(microSurfaceTexture);
        this.if_set_microSurfaceTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            microSurfaceTexture.v_scale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            microSurfaceTexture.u_scale=this.u_scale;
        }
        this.material_low.microSurfaceTexture=microSurfaceTexture;
    }

    //Occlusion*
    this.set_occlusion=function(texture_path,ambientTextureStrength,ambientTextureImpactOnAnalyticalLights){
        this.Occlusion_path=texture_path;
        var Occlusion=new BABYLON.Texture(this.texture_root_path+"/"+this.low_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(Occlusion);
        this.if_set_Occlusion=true;
        if(this.v_scale && this.v_scale!=-1){
            Occlusion.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            Occlusion.uScale=this.u_scale;
        }
        this.material_low.ambientTexture = Occlusion;
        if(ambientTextureStrength){
            this.material_low.ambientTextureStrength=ambientTextureStrength;
        }else{
            this.material_low.ambientTextureStrength=0;
        }
        if(ambientTextureImpactOnAnalyticalLights){
            this.material_low.ambientTextureImpactOnAnalyticalLights=ambientTextureImpactOnAnalyticalLights;
        }else{
            this.material_low.ambientTextureImpactOnAnalyticalLights=0;
        }
        
        
    }

    //bump凹凸贴图*
    this.set_bump=function(texture_path){
        this.bumpTexture_path=texture_path;
        var bumpTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.low_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(bumpTexture);
        this.if_set_bumpTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            bumpTexture.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            bumpTexture.uScale=this.u_scale;
        }
        this.material_low.bumpTexture = bumpTexture;
        this.material_low.useHorizonOcclusion=true;
        this.material_low.useParallaxOcclusion=true;
        this.material_low.useParallax=true;
    }

    //主帖图*
    this.set_main_texture=function(texture_path,albedoColor){
        this.diffuseTexture_path=texture_path;
        this.albedoColor=albedoColor;
        var diffuseTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.low_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(diffuseTexture);
        this.if_set_diffuseTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            diffuseTexture.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            diffuseTexture.uScale=this.u_scale;
        }
        this.material_low.albedoTexture = diffuseTexture;
        if(albedoColor){
            this.material_low.albedoColor=albedoColor;
        }
    }

    //单独设置主帖图颜色*
    this.set_main_color=function(diffuseColor){
        //alert(albedoColor);
        this.material_low.diffuseColor = diffuseColor;
    }

    //metallic*
    this.set_metallic_texture=function(texture_path){
        this.metallicTexture_path=texture_path;
        var metallicTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.low_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(metallicTexture);
        this.if_set_metallicTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            metallicTexture.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            metallicTexture.uScale=this.u_scale;
        }
        this.material_low.metallicTexture = metallicTexture;
        //this.material.useAlphaFromAlbedoTexture=false;
        this.material_low.useRoughnessFromMetallicTextureAlpha=true;
    }

    //alpha*
    this.set_alpha=function(alpha){
        this.material_low.alpha=alpha;

    }

    //roughness*
    this.set_roughness=function(roughness){
        this.material_low.roughness=roughness;
    }

    //metallic*
    this.set_metallic=function(metallic){
        this.material_low.metallic=metallic;
    }

    //回调
    this.first_call_back=function(call_back_obj){
        //alert("first_call_back*#####");
        BABYLON.BaseTexture.WhenAllReady(this.texture_array,call_back_obj);
    }
    this.second_call_back=function(call_back_obj){
        //alert("second_call_back*#####");
        BABYLON.BaseTexture.WhenAllReady(this.texture_array,call_back_obj);
    }
}