'use strict';
const {appm, BrowserWindow, app} = require('electron')
const path = require('path')

function createWindow(){
	// ブラウザのウインドウを作成する。
	const mainWindow = new BrowserWindow({
		width :800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	// and load the index.html of the app. 
	mainWindow.loadFile('index.html')
	// Open the DevToolsk.
	// mainWindow.webContents.openDevTools()
	
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only ve used afret this event occurs.
app.whenReady().then(() => {
	createWindow()

	app.on('activate', function() {
		// On macOs it's common to re-create awindow in the app when the
		// dock icon is cliked and thre are no othe window open.
		if (BrowserWindow.getAllWindows().length===0) {
			createWindow()
		}
	})
})

// quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
	if (process.platform!=='darwin') {
		app.quit()
	}
})

