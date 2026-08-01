<script lang="ts">
  import type { Snippet } from 'svelte';
  import DarkMode from '$lib/DarkMode.svelte';
  import '../app.css';

  let { children }: { children: Snippet } = $props();
</script>

<div class="min-h-screen grid grid-rows-[auto_1fr_auto] bg-white dark:bg-gray-800">
  <header
    class="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="/" class="text-2xl font-bold text-gray-900 dark:text-white">QR Code Generater</a>
    <DarkMode />
  </header>

  <main class="md:max-w-[1000px] w-full px-5 lg:px-0 md:mx-auto">
    {@render children()}
  </main>

  <footer
    class="flex flex-col items-center justify-between px-5 py-4 mt-10 bg-white border-t border-gray-200 sm:flex-row dark:bg-gray-800 dark:border-gray-700"
  >
    <span class="text-sm text-gray-500 dark:text-gray-400"
      >© {new Date().getFullYear()} WhyK</span
    >
    <ul
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li>
        <a
          href="https://github.com/windchime-yk/qr-code-generater"
          target="_blank"
          rel="noreferrer"
          class="hover:underline">GitHub</a
        >
      </li>
    </ul>
  </footer>
</div>
