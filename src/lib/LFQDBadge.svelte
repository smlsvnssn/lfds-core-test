<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   size?: 'large' | 'small' | 'circle'
   *   type?: 'primary' | 'secondary' | 'tertiary'
   *   children?: Snippet
   * }}
   */
  let { size = 'large', type = 'primary', children } = $props()
</script>

<span class="badge {size} {type}">{@render children?.()}</span>

<style>
  .badge {
    box-sizing: border-box;
    display: inline-grid;
    place-items: center;

    background: var(--lfds-semantic-background-notification-primary);
    border-radius: var(--lfds-semantic-sizes-radius-sm);

    font-family: var(--lfds-typography-font-family-ibm);
    font-size: 0.8125rem;
    font-weight: var(--lfds-typography-weight-semibold);
    color: var(--lfds-semantic-text-inverted);

    padding: 0.125rem 0.25rem;

    &.primary {
      background: var(--lfds-semantic-background-notification-primary);
    }
    &.secondary {
      background: var(--lfds-semantic-background-notification-secondary);
    }
    &.tertiary {
      background: var(--lfds-semantic-background-notification-tertiary);
    }

    &.large {
      min-width: 1.5rem;
      min-height: 1.5rem;
    }
    &.small {
      padding: 0;
      line-height: 1;
      min-width: 1rem;
      min-height: 1rem;
    }
    &.circle {
      border-radius: 50%;
      padding: 0;
      line-height: 1;
      min-width: 0.5rem;
      min-height: 0.5rem;
    }
  }
</style>
