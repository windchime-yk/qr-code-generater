<script lang="ts">
  import { Input, Label, Range, Select, Span, P } from 'flowbite-svelte';

  let url = '';
  let imageSize = 100;
  let selectedExtention = 'svg';
  let extentions = [
    { value: 'png', name: 'png' },
    { value: 'svg', name: 'svg' }
  ];
  let qrcolor = '#000000';
  let bgcolor = '#ffffff';

  const getQrImage = (
    url: string,
    imageSize: number,
    selectedExtention: string,
    qrcolor: string,
    bgcolor: string
  ) =>
    `https://qr.whyk.dev/api?url=${
      url || 'https://example.com'
    }&width=${imageSize}&type=${selectedExtention}&qrcolor=${qrcolor.replace(
      '#',
      ''
    )}&bgcolor=${bgcolor.replace('#', '')}`;
</script>

<div class="mt-5">
  <P class="mt-2"
    >node-qrcodeで生成されたQRコードを表示するサービスです。<br
    />生成されたQRコードはデザインの関係上、ある程度の大きさで拡大が止まりますが、生成には影響ありません。</P
  >
</div>

<div class="flex gap-10 mt-10">
  <form class="w-2/3 flex flex-col gap-5">
    <div>
      <Label>URL</Label>
      <Input type="url" placeholder="https://example.com" bind:value={url} />
    </div>
    <div>
      <Label>画像サイズ(px)</Label>
      <div class="flex items-center gap-3">
        <Range min={100} max={1000} step={50} bind:value={imageSize} />
        <Span>{imageSize}</Span>
      </div>
    </div>
    <div>
      <Label>画像種別</Label>
      <Select items={extentions} bind:value={selectedExtention} />
    </div>
    <div class="flex gap-5">
      <div class="w-1/2">
        <Label>QRコード色</Label>
        <Input class="h-10" type="color" bind:value={qrcolor} />
      </div>
      <div class="w-1/2">
        <Label>QRコード背景色</Label>
        <Input class="h-10" type="color" bind:value={bgcolor} />
      </div>
    </div>
  </form>

  <figure class="w-1/3">
    <img src={getQrImage(url, imageSize, selectedExtention, qrcolor, bgcolor)} alt="" />
  </figure>
</div>
