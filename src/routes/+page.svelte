<script lang="ts">
  const labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  const fieldClass =
    'block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400';

  const extentions = [
    { value: 'png', name: 'png' },
    { value: 'svg', name: 'svg' }
  ];

  const DEFAULT_QR_COLOR = '#000000';
  const DEFAULT_BG_COLOR = '#ffffff';

  let url = $state('');
  let imageSize = $state(100);
  let selectedExtention = $state('svg');
  let qrcolor = $state(DEFAULT_QR_COLOR);
  let bgcolor = $state(DEFAULT_BG_COLOR);

  // URLSearchParams に任せて各値をエスケープする。素の文字列連結だと
  // 入力 URL に含まれる & や ? がクエリの区切りとして解釈されてしまう
  const qrImageUrl = $derived(
    `https://qr.whyk.dev/api?${new URLSearchParams({
      url: url || 'https://example.com',
      width: String(imageSize),
      type: selectedExtention,
      qrcolor: qrcolor.replace('#', ''),
      bgcolor: bgcolor.replace('#', '')
    })}`
  );
</script>

<div class="mt-5">
  <p class="mt-2 text-gray-900 dark:text-white">
    node-qrcodeで生成されたQRコードを表示するサービスです。<br
    />生成されたQRコードはデザインの関係上、ある程度の大きさで拡大が止まりますが、生成には影響ありません。
  </p>
</div>

<div class="md:flex gap-10 mt-10">
  <form class="md:w-2/3 flex flex-col gap-5">
    <div>
      <label for="url" class={labelClass}>URL</label>
      <input
        id="url"
        type="url"
        placeholder="https://example.com"
        bind:value={url}
        class={fieldClass}
      />
    </div>
    <div>
      <label for="image-size" class={labelClass}>画像サイズ(px)</label>
      <div class="flex items-center gap-3">
        <input
          id="image-size"
          type="range"
          min="100"
          max="1000"
          step="50"
          bind:value={imageSize}
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <span class="text-gray-900 dark:text-white">{imageSize}</span>
      </div>
    </div>
    <div>
      <label for="extention" class={labelClass}>画像種別</label>
      <select id="extention" bind:value={selectedExtention} class={fieldClass}>
        {#each extentions as extention (extention.value)}
          <option value={extention.value}>{extention.name}</option>
        {/each}
      </select>
    </div>
    <div class="flex gap-5">
      <div class="w-1/2">
        <label for="qrcolor" class={labelClass}>QRコード色</label>
        <!-- defaultValue を付けると Svelte がハイドレーション時の
             remove_input_defaults を省くため、色入力で value 属性が一瞬
             空になり出るコンソール警告を防げる -->
        <input
          id="qrcolor"
          type="color"
          bind:value={qrcolor}
          defaultValue={DEFAULT_QR_COLOR}
          class="{fieldClass} h-10"
        />
      </div>
      <div class="w-1/2">
        <label for="bgcolor" class={labelClass}>QRコード背景色</label>
        <input
          id="bgcolor"
          type="color"
          bind:value={bgcolor}
          defaultValue={DEFAULT_BG_COLOR}
          class="{fieldClass} h-10"
        />
      </div>
    </div>
  </form>

  <figure class="md:w-1/3 flex md:block justify-center mt-5">
    <img src={qrImageUrl} alt="" />
  </figure>
</div>
