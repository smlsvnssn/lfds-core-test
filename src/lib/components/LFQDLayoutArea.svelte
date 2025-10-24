<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   type?: 'header' | 'main' | 'aside' | 'secondary'
   *   children?: Snippet
   * }}
   */
  let { type = '', children } = $props()
</script>

<div class="layout-area {type}">
  {@render children?.()}
</div>
