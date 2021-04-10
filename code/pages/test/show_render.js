var remote_obj=require('electron').remote.require('./main')
const {net} = require('electron').remote;
var server_config=remote_obj.my_config
var server_content=remote_obj.content
var  app =require('electron').app
console.log(process.versions.electron);

const BrowserWindow=remote_obj.BrowserWindow
window.onload=function(){

}

