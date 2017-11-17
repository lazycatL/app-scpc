<template>
  <div class="main">
    <mt-loadmore :bottom-method="loadBottom"  ref="loadmore">
    <lhCard v-for="info in list" :key="info.id" :data="info"></lhCard>
    </mt-loadmore>
  </div>
</template>

<script>
  import lhCard from '../../components/common/lh-card'
  import XHeader from 'vux/src/components/x-header'
  export default {
    components: {
      'lhCard': lhCard, XHeader
    },
    data: function () {
      return {
        'list': [],
        'pageSize': 10
      }
    },
    methods: {
      loadBottom () {
        this.getDataList(this.pageSize += 10)
      },
      getDataList (pageSize) {
        this.api.getJgzxData('pageSize=' + pageSize + '&ssbz=' + JSON.parse(localStorage.getItem('user')).bzid, res => {
          this.list = res.data.data
        })
      }
    },
    mounted () {
      this.getDataList(this.pageSize)
    }
  }
</script>
<style scoped>
  .main{
    background: #ecedf1;
  }
</style>
