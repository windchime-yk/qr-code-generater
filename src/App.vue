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
    <div class="content-area">
      <div id="eventArea" class="form">
        <el-input class="form__url" type="url" placeholder="qr-generate.whyk.dev" v-model="state.url">
          <template #prepend>http(s)://</template>
        </el-input>
        <el-slider class="form__size" v-model="state.size" :min="50" :max="1000" :step="5" show-input/>
        <el-select class="form__extension" v-model="state.extension" clearable placeholder="svg">
          <el-option v-for="item in state.options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <div class="color">
          <div class="bgcolor">
            <span class="bgcolor__label">背景色</span>
            <el-color-picker v-model="state.bgcolor"/>
          </div>
          <div class="qrcolor">
            <span class="qrcolor__label">本体色</span>
            <el-color-picker v-model="state.qrcolor"/>
          </div>
        </div>
      </div>
      <div class="draw-area">
        <p>ここにQRが表示されます</p>
        <img class="draw-area__code" :src="`http://api.qrserver.com/v1/create-qr-code/?data=${state.url || 'https://qr-generate.whyk.dev/'}&size=${state.size}x${state.size}&format=${state.extension || 'svg'}&color=${state.qrcolor.replace(/#/, '')}&bgcolor=${state.bgcolor.replace(/#/, '')}`" :alt="`${state.url}のQRコード`">
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  },
  setup() {
    const state = reactive({
      url: '',
      size: null,
      bgcolor: '#fff',
      qrcolor: '#000',
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
    })

    return {
      state
    }
  }
})
</script>

<style lang="scss" scoped>
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
  .content-area {
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
  .draw-area {
    width: 50%;
    margin: 30px 0 10px;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    .content-area {
      flex-direction: column;
    }
    .form {
      width: 80%;
      border-right: none;
    }
    .draw-area {
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
    .draw-area__code {
      max-width: 200px;
      width: 100%;
    }
  }
</style>
