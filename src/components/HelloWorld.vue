<template>
  <div class="main">
    <lhCard v-for="info in list" :key="info.id" :data="info"></lhCard>
  </div>
</template>

<script>
  import lhCard from './common/lh-card'
  import XHeader from 'vux/src/components/x-header'
  export default {
    components: {
      'lhCard': lhCard, XHeader
    },
    data: function () {
      return {
        'list': []
      }
    },
    mounted () {
      this.api.getJgzxData(res => {
        this.list = res.data.data
      })
    }
  }
</script>
<style scoped>
  .main{
    background: #ecedf1;
  }
</style>
