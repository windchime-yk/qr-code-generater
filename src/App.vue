<template>
  <div id="app">
    <site-header></site-header>
    <details class="usage">
      <summary class="usage__title">使い方</summary>
      <div class="usage__content">
        <ol>
          <li>URLの入力欄にお好みのURLを入力してください</li>
          <li>数字の入力欄にQRコードの希望サイズを入力してください（50～1000まで可能）</li>
          <li>お好みで背景とQRコード本体の色を変更してください（未設定ならデフォルトが適用されます）</li>
          <li>表示されたQRコードを端末で保存してください</li>
        </ol>
        <p class="usage__notice">※QRコードはモバイルでは表示上200pxで固定されていますが、サイズはちゃんと変更されています</p>
      </div>
    </details>
    <div class="contentArea">
      <div id="eventArea" class="form">
        <el-input class="form__url" type="url" placeholder="qr-generate.whyk.dev" v-model="url">
          <template slot="prepend">http(s)://</template>
        </el-input>
        <el-slider class="form__size" v-model="size" :min="50" :max="1000" :step="5" show-input/>
        <el-select class="form__extension" v-model="extension" clearable placeholder="jpg">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="color">
          <div class="bgcolor">
            <span class="bgcolor__label">背景色</span>
            <el-color-picker v-model="bgcolor"/>
          </div>
          <div class="qrcolor">
            <span class="qrcolor__label">本体色</span>
            <el-color-picker v-model="qrcolor"/>
          </div>
        </div>
      </div>
      <div class="drawArea">
        <p>ここにQRが表示されます</p>
        <img class="drawArea__code" :src="`http://api.qrserver.com/v1/create-qr-code/?data=${url || 'https://qr-generate.whyk.dev/'}&size=${size}x${size}&format=${extension || 'jpg'}&color=${qrcolor.replace(/#/, '')}&bgcolor=${bgcolor.replace(/#/, '')}`" :alt="`${url}のQRコード`">
      </div>
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
      size: null,
      bgcolor: '#ffffff',
      qrcolor: '#000000',
      extension: '',
      options: [
        {
          value: 'jpg',
          label: 'jpg'
        },
        {
          value: 'png',
          label: 'png'
        },
        {
          value: 'gif',
          label: 'gif'
        },
        {
          value: 'svg',
          label: 'svg'
        }
      ]
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
  .contentArea {
    display: flex;
  }
  .form {
    width: 48%;
    display: flex;
    flex-direction: column;
    border-right: 1px dashed #000;
    padding-right: 2%;
  }
  .form__url {
    margin-bottom: 10px;
  }
  .form__size {
    margin-bottom: 10px;
  }
  .form__extension {
    margin-bottom: 10px;
  }
  .color {
    display: flex;
  }
  .bgcolor,
  .qrcolor {
    display: flex;
    flex-direction: column;
  }
  .bgcolor {
    margin-right: 20px;
  }
  .bgcolor__label,
  .qrcolor__label {
    font-size: 1.3rem;
  }
  .drawArea {
    width: 50%;
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

  @media screen and (max-width: 768px) {
    .contentArea {
      flex-direction: column;
    }
    .form {
      width: 80%;
      border-right: none;
    }
    .drawArea {
      width: 100%;
    }
    .usage {
      width: 80%;
    }
    .form {
      flex-direction: column;
      margin-right: 10%;
      margin-left: 10%;
    }
    .drawArea__code {
      max-width: 200px;
      width: 100%;
    }
  }
</style>
