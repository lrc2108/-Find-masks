const {app, Browserwindow} =require('electron')
function   createWindow() {
<<<<<<< HEAD
    let win = new Browserwindow ({
=======
    let win =new BrowserWindow ({
>>>>>>> master
        width: 800,
        heigth: 800,
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')
}
app.whenReady().then(createWindow)