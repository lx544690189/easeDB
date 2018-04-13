class easeDB {
  constructor ({ DBname, version }) {
    this.DBname = DBname
    this.version = version
  }

  openDB () {
    return new Promise((resolve, reject) => {
      this.request = indexedDB.open(this.DBname, this.version)
      this.request.onsuccess = event => {
        resolve(event)
        console.info(`数据库：${event.target.result.name} 打开成功`)
      }
      this.request.onerror = event => {
        reject(event)
        console.error(`数据库打开失败`)
      }
    })
  }

  createTransaction (storeNames, opration) {
    this.openDB().then(event => {
      let dataBase = event.target.result
      return new Promise((resolve, reject) => {
        let transaction = dataBase.transaction(storeNames, opration)
        transaction.oncomplete = function (event) {
          resolve(event)
          console.info('事务完成')
        }

        transaction.onerror = function (event) {
          reject(event)
          console.error('事务出错')
        }

        transaction.onabort = function (event) {
          reject(event)
          console.error('事务回滚')
        }
      })
    })
  }

  createObjectStore (name, options) {
    this.openDB().then(resolve => {
      let dataBase = event.target.result
      let objectStore = dataBase.createObjectStore(name, options)
      return objectStore
    })
  }
}

export default easeDB
