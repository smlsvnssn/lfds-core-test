<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   amount?: 1 | 2 | 3
   *   children?: Snippet
   * }}
   */
  let { children, amount = 1 } = $props()
</script>

<div class="padding p{amount}">
  {@render children?.()}
</div>

<style>
  .padding {
    padding: 1rem;
    display: grid;
    gap: 1rem;

    &.p2 {
      padding: 2rem;
    }
    &.p3 {
      padding: 3rem;
    }
  }
</style>
