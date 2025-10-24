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

<a {href} {rel} {...rest}>{@render children?.()}</a>

<style>
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-weight: var(--lfds-typography-weight-medium);
    font-family: var(--lfds-typography-font-family-ibm);
    color: var(--lfds-semantic-text-brand-primary);

    text-decoration: none;
  }
</style>
