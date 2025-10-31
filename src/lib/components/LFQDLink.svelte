<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   href?: string
   *   rel?: string
   *   children?: Snippet
   * }}
   */
  let { href, rel, children, ...rest } = $props()
</script>

{#if href}
  <a {href} {rel} {...rest}>{@render children?.()}</a>
{:else}
  <button {...rest}>{@render children?.()}</button>
{/if}

<style>
  a,
  button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: var(--lfds-typography-weight-medium);
    font-family: var(--lfds-typography-font-family-ibm);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1rem;

    cursor: pointer;
    background: none;
    border: none;
    padding: 0;

    text-decoration: none;
  }
</style>
