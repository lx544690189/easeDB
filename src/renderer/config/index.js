import { remote } from 'electron'

const configDev = {
  userDataDir: 'C:\\Users\\lixin\\AppData\\Roaming\\electron-vue'
}

const configPro = {
  userDataDir: remote.app.getPath('userData')
}

let config
if (process.env.NODE_ENV === 'development') {
  config = configDev
} else if (process.env.NODE_ENV === 'production') {
  config = configPro
}

export default config
