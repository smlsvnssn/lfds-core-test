<script>
  let {
    titleLeft = 'Title Left',
    subtitleLeft = '',
    titleRight = '',
    subtitleRight = '',
    icon = 'bulb',
    onclick = v => v,
    chevron = true,
    rightCol = true,
  } = $props()
</script>

<div
  class="row {chevron === true ? '' : 'noChevron'} {rightCol === true ? '' : (
    'noRightCol'
  )}"
  {onclick}
>
  <lfui-icon icon-id={icon} size="24"></lfui-icon>

  <div class="left">
    <h5>{titleLeft}</h5>
    <p>{subtitleLeft}</p>
  </div>

  {#if rightCol === true}
    <div class="right">
      <h5>{titleRight}</h5>
      <p>{subtitleRight}</p>
    </div>
  {/if}

  {#if chevron === true}
    <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
  {/if}
</div>

<style>
  .row {
    display: grid;
    grid: auto-flow / 1.5rem 1fr 1fr 1.5rem;
    place-items: center start;
    gap: 1rem;
    font-family: var(--lfds-typography-font-family-ibm);
    font-size: 0.875rem;
    cursor: pointer;

    padding: 1rem 0.75rem;
    transition: all 0.3s;

    border-bottom: 1px solid var(--lfds-semantic-border-primary);
    /* background: var(--lfds-semantic-background-secondary); */
     background: transparent;

    &.noChevron {
      grid: auto-flow / 1.5rem 1fr 1fr;
      &.noRightCol {
        grid: auto-flow / 1.5rem 1fr;
      }
    }
    &.noRightCol {
      grid: auto-flow / 1.5rem 1fr 1.5rem;
    }

    h5 {
      font-size: 1rem;
      font-weight: var(--lfds-typography-weight-semibold);
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 0.875rem;
      color: var(--lfds-semantic-text-secondary );
    }

    .left {
      h5 {
        font-weight: var(--lfds-typography-weight-regular);
      }
    }

    .right {
      place-self: center end;
      text-align: end;
    }

    lfui-icon[icon-id='chevron-right'] {
      transition: all 0.3s;
    }

    &:hover {
      background: var(--lfds-semantic-background-hover);
      lfui-icon[icon-id='chevron-right'] {
        translate: 0.125rem 0;
      }
    }
  }
</style>
