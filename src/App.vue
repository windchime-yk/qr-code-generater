<template>
  <div id="app">
    <site-header></site-header>
    <details class="usage">
      <summary class="usage__title">使い方</summary>
      <div class="usage__content">
        <ol>
          <li>URLの入力欄にお好みのURLを入力してください</li>
          <li>数字の入力欄にQRコードの希望サイズを入力してください（50～1000まで可能）</li>
          <li>表示されたQRコードを端末で保存してください</li>
        </ol>
        <p class="usage__notice">※QRコードはモバイルでは表示上200pxで固定されていますが、サイズはちゃんと変更されています</p>
      </div>
    </details>
    <div id="eventArea" class="form">
      <input id="inputUrl" class="form__url" type="url" name="url" placeholder="ex. https://qr-generate.whyk.dev/" v-model="url">
      <input id="inputSize" class="form__size" type="number" name="size" placeholder="ex. 100" v-model="size">
    </div>
    <div class="drawArea">
      <p>ここにQRが表示されます</p>
      <img :src="`http://chart.apis.google.com/chart?cht=qr&chs=${size || 100}x${size || 100}&chl=${url || 'https://qr-generate.whyk.dev/'}`" alt="">
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
      size: null
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
  .usage {
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    font-size: 1.5rem;
    border: 1px solid #000;
    border-radius: 5px;
  }
  .usage__title {
    padding: 10px 20px;
  }
  .usage[open] .usage__title {
    border-bottom: 1px solid #000;
  }
  .usage__content {
    padding: 10px;
  }
  .usage__notice {
    color: #f00;
    text-indent: -1em;
    padding-left: 2em;
  }
  .form {
    text-align: center;
  }
  .form__url {
    width: 250px;
    margin-right: 10px;
    padding: 10px;
    font-size: 1.5rem;
    border-bottom: 1px solid #000;
  }
  .form__size {
    width: 80px;
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
    .usage {
      width: 80%;
      /* padding: 10px; */
    }
</style>
