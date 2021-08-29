const path = require('path')
const { app, BrowserWindow } = require('electron')

const { startMonitorClipboard } = require('./clipboard')

function createWindow () {
    const win = new BrowserWindow({
      autoHideMenuBar: true,
      width: 650,
      height: 375,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false,
      }
    })

    const startUrl = path.resolve( path.join(__dirname, 'index.html'));
    win.loadFile(startUrl)
    startMonitorClipboard(win)
}

app.whenReady().then(() => {
    createWindow()
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})



