import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector'

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteInspector({
      // Activation key combination (default: 'alt-x')
      toggleKeyCombo: 'alt-x',

      // Keys to close/escape inspector (default: ['Backspace', 'Escape'])
      escapeKeys: ['Backspace', 'Escape'],
    }),
  ],
})
