// renderer process
var ipcRenderer = require('electron').ipcRenderer;
ipcRenderer.on('clipboard-data', function (event,store) {
    document.getElementById("clipboard").value += store + '\n';
});

const { clipboard } = require('electron')

document.getElementById('copy-all').addEventListener("click", function( event ) {
    clipboard.writeText(document.getElementById("clipboard").value)
}, false);

document.getElementById('clear').addEventListener("click", function( event ) {
    document.getElementById("clipboard").value = ''
}, false);