import fs from 'fs'
import config from '@/config'
fs.writeFile(`${config.userDataDir}\\test.json`, '我是通 过fs.writeFile 写入文件的内容',
  err => {
    if (err) {
      return console.error(err)
    }
    console.log('数据写入成功！')
  })
