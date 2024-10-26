const { create } = require("domain");
const electron = require("electron")
const app = electron.app;
const Browserwindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
let win;

function createwindow() { 
    win = new Browserwindow();
    width:800,  
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
        
    }));
    //win.webContents.openDevTools()
    win.on("close", () =>{
        win = null;
    })
}

app.on('ready', createwindow);

app.on('window-all-closed', () =>{
    if(process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if(win === null) {
        createwindow()
    }
});
