const { app, BrowserWindow ,ipcMain} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 1024,
    frame: false,
    resizable: false,
    minWidth: 1024,
    maxWidth: 1024,
    minHeight: 1024,
    maxHeight: 1024,
    movable:true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.setSize(1024, 1024);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  ipcMain.on("exit", (e, args)=>{
    app.exit();
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})