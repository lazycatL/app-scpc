<template>
  <section class="main">
    <mt-header fixed :title="`当前班组：${user.bzmc}`" :value="selected"></mt-header>

    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="加工中心">
         <jgryjg></jgryjg>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <Personal></Personal>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="加工中心">
        <img slot="icon" :src="`../../static/images/main/zyicon${clickIcon}.svg`">
        加工中心
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" :src="`../../static/images/main/zxgl${clickIcon1}.svg`">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </section>
</template>
<script>
  import jgryjg from './jsgl/jgryjg'
  import Personal from './rygl/Personal'
  export default {
    components: {
      jgryjg, Personal
    },
    data () {
      return {
        selected: '加工中心',
        clickIcon: '1',
        clickIcon1: '',
        user: {}
      }
    },
    mounted () {
      this.user = JSON.parse(localStorage.getItem('user'))
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        if (val === '加工中心') {
          this.clickIcon = '1'
          this.clickIcon1 = ''
        } else if (val === '我的') {
          this.clickIcon = ''
          this.clickIcon1 = '1'
        }
      },
      user: function (val) {
        return val
      }
    }
  }
</script>
<style lang="less" scoped>
  .page-tabbar-container{
    margin:35px auto;
  }
  .main{
    background: #ecedf1;
  }
</style>
