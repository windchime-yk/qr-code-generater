<template>
  <div id="app">
    <site-header></site-header>
    <div id="eventArea" class="form">
      <input id="inputUrl" class="form__url" type="url" name="url" placeholder="URL指定" v-model="url">
      <input id="inputSize" class="form__size" type="number" name="size" placeholder="画像サイズ指定" v-model="size">
    </div>
    <div class="drawArea">
      <p>ここにQRが表示されます</p>
      <img :src="'http://chart.apis.google.com/chart?cht=qr&chs=' + size + 'x' + size + '&chl=' + url" alt="">
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export default {
  name: 'app',
  data() {
    return {
      url: '',
      size: 0
    }
  },
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
  html {
    font-size: 62.5%;
    font-family: 'Noto Sans Japanese';
    font-weight: 200;
  }
  body {
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
  }
  button,
  input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header__head {
    text-align: center;
  }
  .form {
    text-align: center;
  }
  .form__url {
    margin-right: 10px;
    padding: 10px;
    font-size: 1.5rem;
    border-bottom: 1px solid #000;
  }
  .drawArea {
    margin: 30px 0 10px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 500;
  }
  .footer {
    margin-top: 100px;
  }
  .copyright {
    display: block;
    text-align: center;
  }
</style>
