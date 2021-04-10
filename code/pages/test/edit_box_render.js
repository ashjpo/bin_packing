var remote_obj=require('electron').remote.require('./main')
const {net} = require('electron').remote;
var server_config=remote_obj.my_config
var server_content=remote_obj.content

console.log(process.versions.electron);

const BrowserWindow=remote_obj.BrowserWindow
window.onload=function(){
    $('#header').load('../base/header.html');
    $('#footer').load('../base/footer.html');
    //$('#left').load('../base/left.html');
}