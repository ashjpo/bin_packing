//electron
var electron = require('electron')
const fs = require("fs");
var  app =electron.app
var BrowserWindow=electron.BrowserWindow

//引入全局配置文件
var my_config = require('./my_config.js')
module.exports.my_config=my_config
//content
var content = require('./content.js')
module.exports.content=content

app.on('ready',()=>{
    //隐藏工具栏
    //const Menu = electron.Menu;
    //Menu.setApplicationMenu(null);
    my_config.user_dir=app.getPath('home');
    mainWindow=new BrowserWindow(
        {
            show: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        }
    )

    mainWindow.loadFile('./pages/test/edit_box.html')
    //mainWindow.loadFile('./pages/test/show.html')
    mainWindow.maximize()
    mainWindow.show()
    mainWindow.on('closed',()=>{
        mainWindow=null
    })
})

function set_ip(){
    try{
        var host=fs.readFileSync(my_config.user_dir+"/ip_eyetracker.txt");
        if (typeof(host) == "undefined"){
            my_config.host="127.0.0.1";
        }else{
            my_config.host=host;
        }
    }catch{
        
        my_config.host="127.0.0.1";
    }
}



