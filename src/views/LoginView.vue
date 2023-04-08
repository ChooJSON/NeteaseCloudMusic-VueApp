<!--
 * @Author: RiverHell
 * @Github: https://github.com/RiverHell-AI
 * @Date: 2023-04-09 04:52:15
 * @LastEditors: RiverHell
 * @LastEditTime: 2023-04-09 06:53:18
 * @Description: Login page.
-->
<template>
  <div class="loginPage">
    <div class="logo">
      <img src="https://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg">
    </div>
    <div class="loginInfo">
      <input type="text" name="phoneNumber" placeholder="手机号码" class="loginInput" v-model="phone">
      <div class="captchaPart">
        <input type="text" name="inputCaptcha" placeholder="验证码" class="loginInput captcha" v-model="captcha">
        <button class="getCaptcha" @click="getCaptcha()">获取验证码</button>
      </div>
      <button class="loginButton" @click="login()">登录</button>
      <div class="forgotPassword">——— 忘记密码？ ———</div>
      <button class="guestButton" @click="$router.go(-1)">以游客身份进入</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      captcha: '',
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch("verifyLogin", {phone: this.phone, captcha: this.captcha})
      // let res = await this.$store.dispatch("verifyLogin", {phone: this.phone, captcha: this.captcha})
      // console.log(JSON.stringify(res))
      // if (res == 200) {
      //   this.$store.commit("updateIsLogin", true)
      //   this.$router.push('/userinfo')
      // } else {
      //   alert("手机号码或验证码不正确！")
      //   this.captcha = ''
      // }
    },
    getCaptcha: function () {
      this.$store.dispatch("requestCaptcha", this.phone)
      // if (res == 400) {
      //   alert("当天发送验证码的条数超过限制！")
      // }
    }
  }
}
</script>

<style lang="less">
.loginPage {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 1rem;
  .logo {
    img {
      zoom: 30%;
    }
  }
  .loginInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    .loginInput {
      width: 100%;
      height: 1rem;
      padding: 0 .3rem;
      margin: .2rem 0;
      border: none;
      border-radius: .5rem;
      background-color: rgba(0, 0, 0, 0.08);
      transition: all .1s linear;
    }
    .loginInput::placeholder {
      color: rgb(189, 189, 189);
    }
    .loginInput:focus {
      background-color: rgba(0, 0, 0, 0.12);
      transition: all .1s linear;
    }
    .captchaPart {
      display: flex;
      justify-content: space-between;
      .inputCaptcha {
        width: 60%;
      }
      .getCaptcha {
        width: 50%;
        padding: 0 .3rem;
        margin: .2rem 0;
        margin-left: .2rem;
        border: none;
        border-radius: .5rem;
        font-size: .25rem;
        color: white;
        background-color: rgba(0, 0, 0, 0.2);
        transition: all .05s linear;
      }
      .getCaptcha:active {
        background-color: rgba(0, 0, 0, 0.3);
        transition: all .05s linear;
      }
    }
    
    .loginButton {
      width: 80%;
      height: 1rem;
      padding: 0 .3rem;
      margin: .6rem;
      border: none;
      border-radius: .5rem;
      color: white;
      font-weight: bold;
      background-color: #ea2000;
      transition: all .05s linear;
    }
    .loginButton:active {
      background-color: #9a1500;
      transition: all .05s linear;
    }
    .forgotPassword {
      font-size: .2rem;
      color: rgba(0, 0, 0, 0.4);
    }
    .guestButton {
      width: 80%;
      height: 1rem;
      padding: 0 .3rem;
      margin: .6rem;
      border: none;
      border-radius: .5rem;
      color: white;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all .05s linear;
    }
    .guestButton:active {
      background-color: rgba(0, 0, 0, 0.3);
      transition: all .05s linear;
    }
  }
}
</style>