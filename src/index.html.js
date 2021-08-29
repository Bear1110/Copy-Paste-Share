// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('clipboard-data', function (event,store) {
    document.getElementById("clipboard").value += store + '\n';
});