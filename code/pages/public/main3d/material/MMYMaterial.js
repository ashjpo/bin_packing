/**
 * 
 */
function MMYMaterial(scene){
    //---properties---
    //类前缀
    this.class_prefix='material_'+Date.parse(new Date())+"_"+Math.floor(Math.random()*10000);
    //scene
    this.scene=scene;
    //material
    this.material=null;
    //scale
    this.v_scale=null;
    this.u_scale=null;
    //资源目录结构
    //root
    //|-.obj
    //|-high
    //|-mid_h
    //|-mid_l
    //|-low
    //|-tlow
    //|-product
    this.texture_root_path="";
    this.default_qulity="product";

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

    //Texture_array
    this.texture_array=Array();

    //---functions---
    /**
     * 创建材质
     */
    this.create_material=function(texture_root_path){
        this.material = new BABYLON.PBRMaterial(this.class_prefix+"_material", this.scene);
        if(texture_root_path){
            this.texture_root_path=texture_root_path;
        }
        //this.material = new BABYLON.StandardMaterial(this.class_prefix+"_material", this.scene);
        //环境反射
        this.material.environmentIntensity = 0.1;
        this.material.specularIntensity = 0.5;
        //透明度模式
        this.material.transparencymode=0;
        this.material.metallic=0;

        return this.material;
    }

    /**
     * 设置贴图根目录
     */
    this.set_texture_root_path=function(texture_root_path){
        this.texture_root_path=texture_root_path;
    }

    /**
     * 设置默认贴图质量
     */
    this.set_default_qulity=function(qulity){
        this.default_qulity=qulity;
    }
    this.get_default_qulity=function(){
        return this.default_qulity;
    }

    /**
     * 重新加载贴图提升质量
     */
    this.reload_texture=function(qulity){
        //alert("ADSADSA"+qulity+this.if_set_bumpTexture);
        this.texture_array=Array();
        if(this.if_set_reflectivityTexture){
            var reflectivityTexture=new BABYLON.Texture(this.texture_root_path+"/"+qulity+"/"+this.reflectivityTexture_path, this.scene);
            this.texture_array.push(reflectivityTexture);
            if(this.v_scale && this.v_scale!=-1){
                reflectivityTexture.v_scale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                reflectivityTexture.u_scale=this.u_scale;
            }
            this.material.reflectivityTexture = reflectivityTexture;
        }

        if(this.if_set_microSurfaceTexture){
            var microSurfaceTexture=new BABYLON.Texture(this.texture_root_path+"/"+qulity+"/"+this.microSurfaceTexture_path, this.scene);
            this.texture_array.push(microSurfaceTexture);
            if(this.v_scale && this.v_scale!=-1){
                microSurfaceTexture.v_scale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                microSurfaceTexture.u_scale=this.u_scale;
            }
            this.material.microSurfaceTexture=microSurfaceTexture;
        }

        if(this.if_set_Occlusion){
            var Occlusion=new BABYLON.Texture(this.texture_root_path+"/"+qulity+"/"+this.Occlusion_path, this.scene);
            this.texture_array.push(Occlusion);
            if(this.v_scale && this.v_scale!=-1){
                Occlusion.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                Occlusion.uScale=this.u_scale;
            }
            this.material.ambientTexture = Occlusion;
        }

        if(this.if_set_bumpTexture){
            var bumpTexture=new BABYLON.Texture(this.texture_root_path+"/"+qulity+"/"+this.bumpTexture_path, this.scene);
            this.texture_array.push(bumpTexture);
            if(this.v_scale && this.v_scale!=-1){
                bumpTexture.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                bumpTexture.uScale=this.u_scale;
            }
            this.material.bumpTexture = bumpTexture;
        }

        if(this.if_set_diffuseTexture){
            var diffuseTexture=new BABYLON.Texture(this.texture_root_path+"/"+qulity+"/"+this.diffuseTexture_path, this.scene);
            this.texture_array.push(diffuseTexture);
            if(this.v_scale && this.v_scale!=-1){
                diffuseTexture.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                diffuseTexture.uScale=this.u_scale;
            }
            this.material.albedoTexture = diffuseTexture;
        }

        if(this.if_set_metallicTexture){
            var metallicTexture=new BABYLON.Texture(this.texture_root_path+"/"+qulity+"/"+this.metallicTexture_path, this.scene);
            this.texture_array.push(metallicTexture);
            if(this.v_scale && this.v_scale!=-1){
                metallicTexture.vScale=this.v_scale;
            }
            if(this.u_scale && this.u_scale!=-1){
                metallicTexture.uScale=this.u_scale;
            }
            this.material.metallicTexture = metallicTexture;
        }

    }

    //transparencyMode
    this.set_transparencyMode=function(transparencyMode){
        this.material.transparencyMode = transparencyMode;
    }

    //environmentIntensity
    this.set_environmentIntensity=function(environmentIntensity){
        this.material.environmentIntensity = environmentIntensity;
    }

    //specularIntensity
    this.set_specularIntensity=function(specularIntensity){
        this.material.specularIntensity = specularIntensity;
    }

    //scale
    this.set_scale=function(v_scale,u_scale){
        this.v_scale=v_scale;
        this.u_scale=u_scale;
    }

    //局部反射
    this.set_reflectivity=function(texture_path){
        this.reflectivityTexture_path=texture_path;
        var reflectivityTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.default_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(reflectivityTexture);
        this.if_set_reflectivityTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            reflectivityTexture.v_scale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            reflectivityTexture.u_scale=this.u_scale;
        }
        this.material.reflectivityTexture = reflectivityTexture;
        this.material.useMicroSurfaceFromReflectivityMapAlpha = true;
    }

    //粗糙度/光泽度roughness/glossiness
    this.set_roughness_glossiness=function(texture_path){
        this.microSurfaceTexture_path=texture_path;
        var microSurfaceTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.default_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(microSurfaceTexture);
        this.if_set_microSurfaceTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            microSurfaceTexture.v_scale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            microSurfaceTexture.u_scale=this.u_scale;
        }
        this.material.microSurfaceTexture=microSurfaceTexture;
    }

    //Occlusion
    this.set_occlusion=function(texture_path,ambientTextureStrength,ambientTextureImpactOnAnalyticalLights){
        this.Occlusion_path=texture_path;
        var Occlusion=new BABYLON.Texture(this.texture_root_path+"/"+this.default_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(Occlusion);
        this.if_set_Occlusion=true;
        if(this.v_scale && this.v_scale!=-1){
            Occlusion.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            Occlusion.uScale=this.u_scale;
        }
        this.material.ambientTexture = Occlusion;
        if(ambientTextureStrength){
            this.material.ambientTextureStrength=ambientTextureStrength;
        }else{
            this.material.ambientTextureStrength=0;
        }
        if(ambientTextureImpactOnAnalyticalLights){
            this.material.ambientTextureImpactOnAnalyticalLights=ambientTextureImpactOnAnalyticalLights;
        }else{
            this.material.ambientTextureImpactOnAnalyticalLights=0;
        }
        
        
    }

    //bump凹凸贴图
    this.set_bump=function(texture_path){
        this.bumpTexture_path=texture_path;
        var bumpTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.default_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(bumpTexture);
        this.if_set_bumpTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            bumpTexture.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            bumpTexture.uScale=this.u_scale;
        }
        this.material.bumpTexture = bumpTexture;
        this.material.useHorizonOcclusion=true;
        this.material.useParallaxOcclusion=true;
        this.material.useParallax=true;
    }

    //主帖图
    this.set_main_texture=function(texture_path,albedoColor){
        this.diffuseTexture_path=texture_path;
        var diffuseTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.default_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(diffuseTexture);
        this.if_set_diffuseTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            diffuseTexture.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            diffuseTexture.uScale=this.u_scale;
        }
        this.material.albedoTexture = diffuseTexture;
        if(albedoColor){
            this.material.albedoColor=albedoColor;
        }
    }

    //单独设置主帖图颜色
    this.set_main_color=function(diffuseColor){
        //alert(albedoColor);
        this.material.diffuseColor = diffuseColor;
    }

    //metallic
    this.set_metallic_texture=function(texture_path){
        this.metallicTexture_path=texture_path;
        var metallicTexture=new BABYLON.Texture(this.texture_root_path+"/"+this.default_qulity+"/"+texture_path, this.scene);
        this.texture_array.push(metallicTexture);
        this.if_set_metallicTexture=true;
        if(this.v_scale && this.v_scale!=-1){
            metallicTexture.vScale=this.v_scale;
        }
        if(this.u_scale && this.u_scale!=-1){
            metallicTexture.uScale=this.u_scale;
        }
        this.material.metallicTexture = metallicTexture;
        //this.material.useAlphaFromAlbedoTexture=false;
        this.material.useRoughnessFromMetallicTextureAlpha=true;
    }

    //alpha
    this.set_alpha=function(alpha){
        this.material.alpha=alpha;
    }

    //roughness
    this.set_roughness=function(roughness){
        this.material.roughness=roughness;
    }

    //metallic
    this.set_metallic=function(metallic){
        this.material.metallic=metallic;
    }

    //回调
    this.set_texture_ready=function(call_back){
        //alert("set_texture_ready*#####"+call_back);
        if(call_back){
            //alert("set_texture_ready**********"+call_back);
            BABYLON.BaseTexture.WhenAllReady(this.texture_array,call_back);
        }
    }
}

/**
 * 这个类用于自动提升贴图质量
 * @param {} material_obj 
 */
function material_upgrade(material_obj,second_qulity,reload_delay,call_back){
    

    if_first_time_call_back=true;
    var load_ok=function(){
        if(!if_first_time_call_back){   //加载高级材质
            //alert("if_first_time_call_back_1"+if_first_time_call_back+material_obj+call_back);
            if(call_back){
                call_back("second");
            }
        }else{                          //加载初级材质
            //alert("if_first_time_call_back_2"+if_first_time_call_back+material_obj+call_back);
            if_first_time_call_back=false;
            var temp_time_delay=0;
            if(reload_delay){
                temp_time_delay=reload_delay;
            }
            setTimeout(function(){
                material_obj.reload_texture(second_qulity);
                material_obj.set_texture_ready(load_ok);
            },temp_time_delay);
            
            if(call_back){
                call_back("first");
            }
        }
    }
    
    var upgrade=function(second_qulity){
        if(second_qulity){
            material_obj.set_texture_ready(load_ok);
        }else{
            return false;
        }
    }

    upgrade(second_qulity);
}