const { app, BrowserWindow, BrowserView } = require('electron')

function createWindow () {
  // create window
  const win = new BrowserWindow({ resizable: false, width: 640, height: 480 })
  
  // create new browser view
  const view = new BrowserView()
  win.setBrowserView(view)

  // remove menubar
  win.setMenuBarVisibility(false)
  view.setBounds({ x: 0, y: 0, width: 634, height: 480 })
  view.webContents.loadURL('http://www.youtube.com/?persist_app=1&app=desktop')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)