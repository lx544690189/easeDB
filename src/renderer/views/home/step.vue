<template>
  <div class="step-container">
    <mu-stepper :activeStep="activeStep">
      <mu-step>
        <mu-step-label>
          填写数据库名称
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          创建字段
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label>
          宣传活动
        </mu-step-label>
      </mu-step>
    </mu-stepper>
    <div class="step-content">
      <p v-if="finished">
        都完成啦!
        <a href="javascript:;" @click="reset">点这里</a>可以重置
      </p>
      <template v-if="!finished">
        <p class="des">
          {{ description[activeStep] }}
        </p>
        <mu-paper class="form-info" :zDepth="1">
          <mu-text-field label="数据库名称" type="text" labelFloat/><br/>
          <mu-text-field label="备注" multiLine :rows="3" :rowsMax="6" labelFloat/>
          <div class="operation">
            <mu-flat-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev" />
            <mu-raised-button class="demo-step-button" :label="activeStep === 2 ? '完成' : '下一步'" primary @click="handleNext" />
          </div>

        </mu-paper>

      </template>
    </div>
  </div>
</template>

<script>
import Loki from 'lokijs'
import config from '@/config'
export default {
  data () {
    return {
      activeStep: 0,
      complete: [],
      finished: false,
      description: [
        '数据库名称应见名知其意，如“用户”（存储用户信息）、“账单”（存储账单信息）...',
        '如一个存储用户信息的数据库，包含的字段有姓名、年龄、性别...'
      ]
    }
  },
  methods: {
    handlePrev () {
      this.activeStep--
    },
    handleNext () {
      // this.activeStep++
      console.log(Loki.LokiFsAdapter)
      var db = new Loki({
        verbose: true // enable console output
      })
      console.log(db)
      var children = db.addCollection('children')
      children.insert({name: 'Sleipnir', legs: 8})
      children.insert({name: 'Jormungandr', legs: 0})
      children.insert({name: 'Hel', legs: 2})
      console.log(db.getCollection('children'))
      new Loki.LokiFsAdapter().saveDatabase(`${config.userDataDir}\\test.db`, db.serialize(), function (e) {
        console.log(e)
      })
      new Loki.LokiFsAdapter().loadDatabase(`${config.userDataDir}\\test.db`, function (e) {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
.step-container {
  width: 100%;
  margin: auto;
}

.step-content {
  margin: 0 16px;
}

.step-button {
  margin-top: 12px;
  margin-right: 12px;
}
.des {
  font-size: 12px;
}
.form-info {
  padding: 20px;
}
.operation {
  text-align: right;
  margin-top: 20px;
}
</style>

