<script>
  import { isFunc } from 'ouml'
  /**
   * @import { EventHandler } from 'svelte/elements'
   * @import { Snippet } from 'svelte'
   * @type {{
   *   titleLeft: string
   *   subtitleLeft?: string
   *   titleRight?: string
   *   subtitleRight?: string
   *   icon?: string | Snippet
   *   onclick?: EventHandler
   *   chevron?: boolean
   *   state?: 'active' | 'inactive' | 'disabled'
   * }}
   */
  let {
    titleLeft = 'Title Left',
    subtitleLeft = '',
    titleRight = '',
    subtitleRight = '',
    icon = 'placeholder',
    onclick = v => v,
    chevron = true,
    state = 'active',
  } = $props()

  let hasRightCol = $derived(titleRight || subtitleRight)
</script>

<div
  class="row
    {chevron === true ? '' : 'noChevron'} 
    {hasRightCol ? '' : 'noRightCol'} 
    {state == 'active' ? '' : state}"
  {onclick}
  tabindex="0"
  role="link"
  onkeydown={e => e.key == 'Enter' && onclick(e)}
>
  {#if isFunc(icon)}
    {@render icon()}
  {:else}
    <lfui-icon icon-id={icon} size="24" color="var(--iconClr)"></lfui-icon>
  {/if}

  <div class="left">
    <h5>{titleLeft}</h5>
    <p>{subtitleLeft}</p>
  </div>

  {#if hasRightCol}
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
    --iconClr: var(--lfds-semantic-icon-primary);

    display: grid;
    grid: auto-flow / 1.5rem 1fr 1fr 1.5rem;
    place-items: center start;
    font-family: var(--lfds-typography-font-family-ibm);
    font-size: 0.875rem;
    cursor: pointer;

    gap: 0.75rem;
    padding: 1rem 0.75rem;

    @media (width < 30rem) {
      gap: 0.75rem;
      padding: 1rem 0.75rem;
    }

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
      color: var(--lfds-semantic-text-secondary);
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
    }

    &.inactive {
      h5 {
        color: var(--lfds-semantic-text-secondary);
        text-decoration: line-through;
      }
    }

    &.disabled {
      pointer-events: none;
      --iconClr: var(--lfds-semantic-icon-secondary);
      h5 {
        color: var(--lfds-semantic-text-secondary);
      }
    }
  }
</style>
