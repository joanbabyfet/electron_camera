//入口文件
const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

//屏蔽安全告警
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

//设置用户数据文件夹
app.setPath("userData", __dirname + "/saved_recordings")

function createWindow() {
  //创建一个浏览器窗口
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 600,
    //autoHideMenuBar: true,
    alwaysOnTop: true, //指定窗口是否始终显示在其他窗口之上
    skipTaskbar: true, //让应用不会出现在任务栏中
    //frame: false, //false为创建无边框窗口
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  //开启开发人员工具
  //mainWindow.openDevTools()
}
//在 Electron 中，只有在 app 模块的 ready 事件被激发后才能创建浏览器窗口
app.on('ready', createWindow)