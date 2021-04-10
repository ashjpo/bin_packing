
/*import {Mesh_Group} from './Mesh_Group.js';
import {World_Axis} from './World_Axis.js';

import {Mesh_Axis} from './Mesh_Axis.js';




export {Mesh_Group,World_Axis,Mesh_Axis};*/

addScript("../public/main3d/Base_Tools.js");
addScript("../public/main3d/Mesh_Group.js");

addScript("../public/main3d/axis/Axis.js");
addScript("../public/main3d/axis/World_Axis.js");
addScript("../public/main3d/axis/Mesh_Axis.js");

addScript("../public/main3d/ground/Ground.js");
addScript("../public/main3d/ground/World_Ground.js");
addScript("../public/main3d/ground/Mesh_Ground.js");



addScript("../public/main3d/object/MMYObject.js");
addScript("../public/main3d/object/MMYObject_Group.js");


addScript("../public/main3d/camera/Universal_Camera.js");
addScript("../public/main3d/camera/Arc_Rotate_Camera.js");

addScript("../public/main3d/material/MMYMaterial.js");
addScript("../public/main3d/material/MMYMaterial_Change.js");


//gui
addScript("../public/main3d/gui/MMYButton.js");
addScript("../public/main3d/gui/MMYLabel.js");
addScript("../public/main3d/gui/MMYRadio.js");
addScript("../public/main3d/gui/MMYChecked.js");
addScript("../public/main3d/gui/MMYSlider.js");
addScript("../public/main3d/gui/MMYText_Pointer.js");
addScript("../public/main3d/gui/MMYButton_Pointer.js");
addScript("../public/main3d/gui/MMYImage_Pointer.js");

//addScript("../public/main3d/World.js");


function addScript(url){
	/*var script = document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);*/
    document.write("<script type='text/javascript' src='"+url+"'></script>");
}