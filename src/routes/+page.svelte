<script lang="ts">
  import { Input, Label, Range, Select, P, Heading } from 'flowbite-svelte';

  let url = '';
  let imageSize = 100;
  let selectedExtention = 'svg';
  let extentions = [
    { value: 'png', name: 'png' },
    { value: 'svg', name: 'svg' }
  ];
  let qrcolor = '#000';
  let bgcolor = '#fff';

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

<section class="mt-5">
  <Heading tag="h2">このサービスは何？</Heading>
  <P class="mt-2">node-qrcodeで生成されたQRコードを表示するサービスです。</P>
</section>

<div class="flex gap-10 mt-10">
  <form class="w-2/3">
    <div>
      <Label>URL</Label>
      <Input type="url" placeholder="https://example.com" bind:value={url} />
    </div>
    <div>
      <Label>画像サイズ(px)</Label>
      <Range min={100} max={1000} bind:value={imageSize} />
    </div>
    <div>
      <Label>画像サイズ(px)</Label>
      <Select items={extentions} bind:value={selectedExtention} />
    </div>
    <div>
      <Label>QRコード色</Label>
      <Input type="color" bind:value={qrcolor} />
    </div>
    <div>
      <Label>QRコード背景色</Label>
      <Input type="color" bind:value={bgcolor} />
    </div>
  </form>

  <figure class="w-1/3">
    <img src={getQrImage(url, imageSize, selectedExtention, qrcolor, bgcolor)} alt="" />
  </figure>
</div>
