<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    Navbar,
    NavBrand,
    DarkMode
  } from 'flowbite-svelte';
  import '../app.postcss';
</script>

<Navbar>
  <NavBrand href="/"><span class="text-2xl font-bold">QR Code Generater</span></NavBrand>
  <DarkMode />
</Navbar>
<main class="w-[1000px] mx-auto">
  <slot />
</main>
<Footer>
  <FooterCopyright by="WhyK" year={2019} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="https://github.com/windchime-yk/qr-code-generater" target="_blank"
      >GitHub</FooterLink
    >
  </FooterLinkGroup>
</Footer>
