<template>
  <div class="card-main">
    <div class="card-header" >
      <span class="card-header-text">{{data.ddmc}}</span>
      <span class="card-status">{{data.ddjssj}}</span>
    </div>
    <div class="card-content" >
      <div class="card-content-main">
        <div class="card-content-img">
          <img src="../../../static/user/user.png" />
        </div>
        <div class="card-content-span">
          <div class="content-info">
            <span class="content-info-name">零件名称：</span>
            <span>{{data.zddmc}}</span>
          </div>
          <div class="content-info">
            <span>材料</span>
            <span><b>{{data.clmc}}</b>   {{data.cldx}}</span>
          </div>
          <div class="content-info">
            <span>订单件数：</span>
            <span>X {{data.jgsl}}</span>
          </div>
        </div>
      </div>
      <div class="card-content-detail">
        表面处理：{{data.bmcl}}
      </div>
    </div>
    <div class="card-footer" >
      <mt-button class="loginButton" size="small" type="primary" @click.native="">开始</mt-button>
    </div>
  </div>
</template>

<script>
  import Panel from 'vux/src/components/panel'
  import Card from 'vux/src/components/card'
  export default {
    name: 'lhCard',
    props: ['data'],
    components: {
      Card,
      Panel
    },
    data: function () {
      return {
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../assets/css/reset.less';
  .card-main{
    background-color: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius:4px;
    margin: 10px 10px;
    position: relative;
    overflow: hidden;
  }
  .card-main:before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .card-header{
    padding-top: 10px;
    color: black;
    font-weight: 900;
    font-size: 13px;
    display: flex;
    position: relative;
    left: 15px;
    .card-header-text{
      flex: 0.7;
      font-family: MicrosoftYaHeiUI;
      color: #44474D;
    }
    .card-status{
      flex: 0.3;
      color: #999999;
    }
  }
  .card-content{
    margin:5px 10px;
    padding: 15px;
    position: relative;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    .card-content-main{
      display: flex;
      padding-bottom: 10px;
      border-bottom:1px solid #E5E5E5;
      .card-content-img{
        margin-right: .8em;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        flex: 0.2;
        img{
          width:60px;
          height:60px;
        }
      }
      .card-content-span{
        flex: 0.8;
        font-size: 0.1rem;
        .content-info{
          display: flex;
          margin-top: 5px;
          span:nth-child(1){
            flex: .5;
          }
          span:nth-child(2){
            text-align: right;
            flex: .5;
          }
        }
      }
      .content-info-name{
        font-weight: 600;
        margin-bottom: 5px;
      }
    }
    .card-content-detail{
      margin-top: 5px;
      overflow: hidden; /*自动隐藏文字*/
      text-overflow: ellipsis;/*文字隐藏后添加省略号*/
      width: 20em;/*不允许出现半汉字截断*/
      display:-webkit-box;
      line-height:17px;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      font-size: 0.1rem;
    }
  }
  .card-footer{
    margin-bottom: 5px;
    padding-right: 10px;
    text-align: right;
  }
</style>
