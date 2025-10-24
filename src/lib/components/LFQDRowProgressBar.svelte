<script>
  import LFQDProgressBar from './LFQDProgressBar.svelte'
  /**
   * @import { MouseEventHandler } from 'svelte/elements'
   * @type {{
   *   titleLeft: string,
   *   subtitleLeft?: string,
   *   titleRight?: string,
   *   subtitleRight?: string,
   *   percent: number,
   *   type?: "primary" | "secondary" | "tertiary" | "success" | "error" | "info" | "warning"
   *   onclick?: MouseEventHandler<T>,
   *   chevron?: boolean,
   * }}
   */

  let {
    titleLeft = 'Title Left',
    subtitleLeft = '',
    titleRight = '',
    subtitleRight = '',
    percent = 50,
    onclick = v => v,
    type,
    chevron = true,
  } = $props()

  let hasRightCol = $derived(titleRight || subtitleRight)
</script>

<div
  class="row
    {chevron === true ? '' : 'noChevron'} 
    {hasRightCol ? '' : 'noRightCol'}"
  {onclick}
  tabindex="0"
  role="link"
  onkeydown={e => e.key == 'Enter' && onclick()}
>
  <h5 class="left">{titleLeft}</h5>
  <p
    class="left"
    style={subtitleRight == '' ?
      'grid-area: subtitleLeft / subtitleLeft / subtitleRight / subtitleRight'
    : ''}
  >
    {subtitleLeft}
  </p>

  <div class="progress">
    <LFQDProgressBar {percent} {type} />
  </div>

  {#if hasRightCol}
    <h5 class="right">{titleRight}</h5>
    <p class="right">{subtitleRight}</p>
  {/if}

  {#if chevron === true}
    <lfui-icon icon-id="chevron-right" size="24"></lfui-icon>
  {/if}
</div>

<style>
  .row {
    display: grid;
    grid:
      'titleLeft    titleRight    chevron'
      'progress     progress      chevron'
      'subtitleLeft subtitleRight chevron'
      / 1fr 1fr 1.5rem;

    place-items: center start;
    font-family: var(--lfds-typography-font-family-ibm);
    font-size: 0.875rem;
    cursor: pointer;

    gap: 0.25rem 0.75rem;
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
      grid:
        'titleLeft    titleRight   '
        'progress     progress     '
        'subtitleLeft subtitleRight'
        / 1fr 1fr;

      &.noRightCol {
        grid:
          'titleLeft    '
          'progress     '
          'subtitleLeft '
          / 1fr;
      }
    }
    &.noRightCol {
      grid:
        'titleLeft    chevron'
        'progress     chevron'
        'subtitleLeft chevron'
        / 1fr 1.5rem;
    }

    h5 {
      font-size: 1rem;
      font-weight: var(--lfds-typography-weight-semibold);
      margin: 0;
      &.left {
        font-weight: var(--lfds-typography-weight-regular);
        grid-area: titleLeft;
      }
      &.right {
        grid-area: titleRight;
      }
    }
    p {
      margin: 0;
      font-size: 0.875rem;
      color: var(--lfds-semantic-text-secondary);
      &.left {
        grid-area: subtitleLeft;
      }
      &.right {
        grid-area: subtitleRight;
      }
    }

    .right {
      place-self: center end;
      text-align: end;
    }

    .progress {
      width: 100%;
      grid-area: progress;
    }

    lfui-icon[icon-id='chevron-right'] {
      grid-area: chevron;
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
