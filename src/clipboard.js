const { clipboard } = require('electron')
const { setInterval } = require('timers')

let window = undefined
let lastData = undefined

function monitor() {
    data = clipboard.readText()
    if (lastData != data) {
        sendData(data)
        lastData = data
    }
}
function sendData(data) {
    window.webContents.send('clipboard-data', data);
}

module.exports = {
    startMonitorClipboard: function(win) {
        window = win
        setInterval(monitor, 1000)
    }
};