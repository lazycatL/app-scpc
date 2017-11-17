<template>
  <div class="main">
    <div class="content">
      <h2 class="title" v-text="imsg"></h2>
      <div class="input">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密 码" placeholder="请输入密码" :attr = "{ minlength:6, maxlength:16}"  type="password" v-model="password"></mt-field>
      </div>
        <mt-button class="loginButton" size="large" type="primary" @click.native="login">登 录</mt-button>
    </div>

  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        imsg: '管理系统',
        username: 'admin',
        password: '123456',
        user: {
          username: 'admin',
          password: '123456',
          name: '管理员',
          bzid: '759007553955134000000',
          bzmc: '管理组',
          avatar: '../assets/user/user.png'
        }
      }
    },
    components: {
      Toast
    },
    methods: {
      login () {
        this.api.login({
          type: 'vue',
          username: this.username,
          password: this.password
        }, res => {
          if (res.data.result === 'success') {
            localStorage.setItem('user', JSON.stringify(res.data.user))
            this.$router.push('/index')
          } else {
            Toast('用户名密码错误！')
            this.username = ''
            this.password = ''
          }
        })

//        this.axios.post('/api/login', {
//          type: 'vue',
//          username: this.username,
//          password: this.password})
//          .then(res => {
//            if (res.data.result === 'success') {
//              localStorage.setItem('user', JSON.stringify(res.data.user))
//              this.$router.push('/index')
//            } else {
//              Toast('用户名密码错误！')
//              this.username = ''
//              this.password = ''
//            }
//          })
//          .catch(err => {
//            console.log(err)
//          })
      }
    }
  }
</script>
<style lang="less" scoped>
  .main{
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 80px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .content{
      text-align: center;
      width: 100%;
      .title{
        padding-bottom:50px;
        font-size: 28px;
      }
      .input{
        text-align: center;
        .mint-cell.mint-field{
          margin: 3px auto;
          //border:0.5px solid #7e8c8d;
          border-radius:5px;
        }
      }
      .loginButton{
        margin: 10px auto;
        label{
          color:white;
        }
        .mint-button-text{
          color: white;
        }
      }
    }
  }
</style>
