<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   padEnd?: boolean,
   *   children?: Snippet
   * }}
   */
  let { children, padEnd } = $props()
</script>

<div class="boxFooter" >
  {@render children?.()}
</div>

<style>
  .boxFooter {
    font-family: var(--lfds-typography-font-family-ibm);

    padding: 1rem 0.75rem;

    display: flex;
    justify-content: end;
    gap: 1rem;

    border-bottom: 1px solid var(--lfds-semantic-border-primary);
    background: var(--lfds-semantic-background-secondary);
  }
</style>
