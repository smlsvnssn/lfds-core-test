<script>
  /**
   * @type {{
   *  percent: number | string,
   *  type?: "primary" | "secondary" | "tertiary" | "success" | "error" | "info" | "warning"
   * }}
   */
  let { percent = 0, type = 'secondary' } = $props()
</script>

<div class="progressBar {type}" style="--percent: {+percent}%"></div>

<style>
  .progressBar {
    --percent: 50%;
    width: 100%;
    height: 0.5rem;
    background: var(--lfds-semantic-background-primary);
    border-radius: var(--lfds-semantic-sizes-radius-md);
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      height: 100%;
      width: var(--percent);
      border-radius: var(--lfds-semantic-sizes-radius-md);
    }

    &.primary::after {
      background: var(--lfds-semantic-background-notification-primary);
    }
    &.secondary::after {
      background: var(--lfds-semantic-background-notification-secondary);
    }
    &.tertiary::after {
      background: var(--lfds-semantic-background-notification-tertiary);
    }
    /* Här fanns det inte mycket semantiskt att hämta :-) */
    &.success::after {
      background: var(--lfds-semantic-border-on-success);
    }
    &.info::after {
      background: var(--lfds-semantic-border-on-info);
    }
    &.error::after {
      background: var(--lfds-semantic-border-on-error);
    }
    &.warning::after {
      background: var(--lfds-semantic-border-on-warning);
    }
  }
</style>
