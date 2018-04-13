<template>
  <div class="layout">
    <div class="header">
      <div class="logo" @click="changeDrawer">
        easyDB
      </div>
      <mu-tabs :value="activeTab" @change="handleTabChange" class="top-menu">
        <mu-tab value="tab1" title="开始" />
        <mu-tab value="tab2" title="数据库" />
        <mu-tab value="tab3" title="设置" />
      </mu-tabs>
    </div>
    <div class="container">
      <div class="title">欢迎使用easyDB</div>
      <div class="description">
        easyDB以可视化方式帮助您创建数据库，并提供统计、查询、排序等数据处理需求，并且它提供丰富的组件来协助您录入数据！
      </div>
      <div class="title">开始</div>
      <div class="description">
        <mu-raised-button label="创建数据库" class="demo-raised-button" primary @click="rightPopup = true" />
      </div>
    </div>
    <mu-drawer :open="open" :docked="false" class="drawer" @close="changeDrawer()">
      <mu-list>
        <mu-list-item title="Menu Item 1" />
        <mu-list-item title="Menu Item 2" />
        <mu-list-item title="Menu Item 3" />
      </mu-list>
    </mu-drawer>
    <mu-popup position="bottom" popupClass="demo-popup-right" :open="rightPopup" @close="rightPopup = false">
      <step></step>
    </mu-popup>
  </div>
</template>
<script>
import step from './step.vue'
export default {
  components: {step},
  data () {
    return {
      open: false,
      activeTab: 'tab1',
      rightPopup: false
    }
  },
  methods: {
    changeDrawer () {
      this.open = !this.open
    },
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  height: 50px;
  background-color: #2196f3;
  cursor: pointer;
}
.logo {
  min-width: 256px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #2196f3;
  color: #eeeeee;
  font-size: 18px;
}
.top-menu {
  width: 400px;
}
.drawer {
  top: 50px;
}
.container {
  padding: 20px;
}
.title {
  font-size: 16px;
  border-bottom: 1px solid #eee;
  padding: 5px 0;
  margin-top: 10px;
}
.description {
  padding: 10px 0;
}
</style>
<style>
.demo-popup-right {
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 24px;
}
</style>
