<template>
  <div class="main">
    <div class="headPicture">
      <img :src="user.avatar"><br>
      <span class="username">{{user.username}}</span><br>
    </div>
    <div class="gs">
      <card :header="header">
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>1130</span>
            <br/>
            今日完成
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <br/>
            本周完成
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <br/>
            本月完成
          </div>
        </div>
      </card>
    </div>
    <div class="menu">
      <group title="订单信息">
        <cell title="进行中订单"  is-link>
          <img slot="icon" style="display:block;margin-right:5px;" src="../../../static/images/ddjxz.svg" width="24" height="24">
        </cell>
        <cell title="已完成订单"  is-link>
          <img slot="icon" style="display:block;margin-right:5px;" src="../../../static/images/grzxdd.svg" width="24" height="24">
        </cell>
      </group>
      <group title="个人信息">
        <cell title="设置"  is-link>
          <img slot="icon" style="display:block;margin-right:5px;" src="../../../static/images/set.svg" width="24" height="24">
        </cell>
      </group>
    </div>
  </div>
</template>
<script>
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import Card from 'vux/src/components/card'

  export default {
    components: {
      Group,
      Cell,
      Card
    },
    data: function () {
      return {
        user: {
          name: 'admin',
          username: '管理员',
          bzmc: '管理组',
          avatar: '/static/user/user.png'
        },
        header: {
          title: '工时统计'
        },
        jggs: {
          day: 0,
          week: 0,
          month: 0
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../node_modules/vux/src/styles/1px.less';
  .main{
    background:#F9FAFC;
  }
  .headPicture{
    height:30%;
    background:#20A0FF;
    text-align:center;
    img{
      margin-top:80px;
      height: 100px;
      width:100px;
      border-radius:50%;
    }
    .username{
      color: #ffffff;
      margin-top: 30px;
    }
  }
  .menu{
    padding-top: 20px;
  }
  .weui-panel{
    width: 100%;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    font-size: 18px;
    color: #f74c31;
  }
</style>
