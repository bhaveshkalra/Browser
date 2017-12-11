const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

var mainWindow=null;

app.on('window-all-closed',function(){
        if(process.platform!=='win32')app.quit();

});

app.on('ready',function(){
mainWindow=new BrowserWindow({
        width:1200,        
        height:800,
        frame:false,
        transparent:true
});
mainWindow.loadURL('file://'+__dirname+'/index.html');

});