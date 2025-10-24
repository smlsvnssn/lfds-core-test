<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   size?: 'small' | 'medium' | 'large'
   *   padding?: boolean
   *   children?: Snippet
   * }}
   */
  let { size = 'large', padding = true, children } = $props()
</script>

<div class="sectionHeader {size} {padding ? '' : 'noPad'}">
  <h3>{@render children?.()}</h3>
</div>

<style>
  .sectionHeader {
    font-family: var(--lfds-typography-font-family-ibm);

    padding: 2rem 1rem 0.25rem;

    h3 {
      font-size: 1.5rem;
      font-weight: var(--lfds-typography-weight-semibold);
      color: var(--lfds-semantic-text-brand-primary);
      margin: 0;
    }

    &.noPad {
      padding: 2rem 0 0.25rem;
    }

    &.small h3 {
      font-size: 1rem;
    }
    &.medium h3 {
      font-size: 1.125rem;
    }
  }
</style>
