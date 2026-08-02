# QR Code generater
デザインができるQRコード生成ツールがほしかった。  
現状はデザインできないけど、将来的にできるといい。

[SvelteKit](https://svelte.dev/docs/kit)と[Tailwind CSS](https://tailwindcss.com)で実装。  
QRコード生成APIは[QR server](https://github.com/windchime-yk/qr-server)を利用している。

## デプロイ
Cloudflare Workers（Static Assets）にデプロイしている。  
設定は `wrangler.jsonc` にあり、`main` と `assets` があることで
`@sveltejs/adapter-cloudflare` が Pages 向けではなく Workers 向けの出力を生成する。

`main` ブランチへの push で Workers Builds が自動デプロイする。
