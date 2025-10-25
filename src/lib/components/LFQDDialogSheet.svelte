<script>
  import { wait } from 'ouml'
  import LFQDSectionHeader from './LFQDSectionHeader.svelte'
  import { addSwipeEvent } from '../swipeEvent'

  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   dialog?: HTMLElement
   *   open?: boolean
   *   heading: string
   *   size: 'small' | 'medium' | 'large'
   *   onclose: function
   *   children?: Snippet
   * }}
   */
  let {
    dialog = $bindable(),
    open = false,
    heading = 'Heading',
    size,
    onclose,
    children,
  } = $props()

  //
  //

  let swipeEvent, mq, prevId
  let header

  const animationDelay = 300

  const delayClose = () => wait(animationDelay, onclose)

  const onMediaQueryChange = e => {
    if (e.matches) {
      swipeEvent = addSwipeEvent(header, 'swipedown', dialog)
      //dialog.addEventListener('swipedown', e => e.target.hidePopover())
      header.addEventListener('swipedown', e => dialog.close())
    } else {
      header.removeEventListener('swipedown', e => dialog.close())
      swipeEvent?.destroy()
    }
  }

  $effect(() => {
    mq ??= matchMedia('(hover), (width < 30rem)')

    mq.addEventListener('change', onMediaQueryChange)
    onMediaQueryChange(mq)

    return () => mq.removeEventListener('change', onMediaQueryChange)
  })

  $effect(() => {
    if (open && open != prevId) {
      dialog?.showModal()
      // Handling "touchthrough" on backdrop on mobile. Weird behaviour. TODO: Learn more
      document.body.inert = true
    } else {
      dialog?.close()
      document.body.inert = false
    }
    prevId = open
  })

</script>

<dialog
  class="sheet size-{size || 'small'}"
  id="sheet"
  bind:this={dialog}
  closedby="any"
  onclose={delayClose}
  autofocus
>
  <header bind:this={header}>
    <button class="close" onclick={() => dialog.close()}> Stäng </button>
  </header>
  <div class="scrollWrapper">
    <LFQDSectionHeader padding={false}>{heading}</LFQDSectionHeader>
    {@render children?.()}
  </div>
</dialog>

<style>
  :global(body:has(dialog[open])) {
    overflow: hidden;
  }

  header {
    height: 4rem;
    width: 100%;
    position: fixed;
    background: var(--bg);

    &:before {
      content: '';
      width: 20vw;
      height: 0.25rem;
      background: var(--blue);
      border-radius: 1rem;
      display: block;
      position: absolute;
      left: 50%;
      translate: -50% 0;
      margin: 1.75rem auto 0;
    }

    @media (hover), (width > 600px) {
      background: transparent;
      &:before {
        content: unset;
      }
    }
  }

  dialog {
    --t: var(--lfqd-time-long);
    --w: 50%;
    --bg: var(--lfds-semantic-background-primary);
    --easeOutBack: var(--lfqd-transition-bounce);
    --padding: 2rem;
    --paddingTop: 2rem;

    --bottomDrawerCornerRadius: 1.5rem;
    --padBounce: 10vmax;
    --maxHeight: 90vh;
    --minHeight: 30vh;

    box-sizing: border-box;

    max-height: 100%;
    max-width: 100%;

    margin: 0;
    width: calc(var(--w) + var(--padBounce));
    height: 100dvh;

    border: none;
    padding: 0;
    padding-right: var(--padBounce);

    background: var(--bg);

    inset: unset;
    right: 0;
    top: 0;

    transition: all calc(var(--t) / 2) ease-in allow-discrete;

    translate: 100% 0;

    &:open {
      opacity: 1;
      translate: calc(var(--padBounce)) 0;
      /* box-shadow: 0px 1px 64px 0px rgba(0, 0, 0, 0.15); */
      transition: all var(--t) var(--easeOutBack) allow-discrete;
    }

    @starting-style {
      &:open {
        opacity: 0;
        translate: 100% 0;
      }
    }

    &::backdrop {
      background: #0000;
      transition: background calc(var(--t) / 2) allow-discrete;
    }

    &:open::backdrop {
      background-color: var(--lfds-semantic-background-transparent-secondary);
      pointer-events: none;
      touch-action: none;
    }

    @starting-style {
      &:open::backdrop {
        background: #0000;
      }
    }

    &.size-small {
      --w: 30rem;
      --t: 0.3s;
    }

    &.size-medium {
      --w: 46rem;
    }

    &.size-large {
      --w: 61rem;
    }

    button.close {
      --buttonWidth: 2rem;
      --buttonInset: 2rem;
      --accent: var(--lfds-semantic-icon-on-button-tertiary);
      --bg: var(--lfds-semantic-background-button-tertiary);
      --border: var(--lfds-semantic-border-on-highlight-primary);

      width: var(--buttonWidth);
      aspect-ratio: 1/1;
      cursor: pointer;
      background: oklch(from var(--bg) l c h / 0.8);
      text-indent: -1000rem;
      border-radius: 50%;
      position: absolute;
      border: 1px solid var(--border);
      padding: 0;
      top: var(--buttonInset);
      right: calc(var(--padBounce) + var(--buttonInset));
      transition: all var(--t) allow-discrete;

      @media (width < 30rem) {
        --buttonInset: 1rem;
        max-height: var(--maxHeight);
      }

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 0.75rem;
        height: 0.125rem;
        background: var(--accent);
        translate: -50% -50%;
        inset: 0.9375rem;
        rotate: 45deg;
      }

      &:after {
        rotate: -45deg;
      }

      &:hover {
        scale: 1.1;
      }
    }

    .scrollWrapper {
      box-sizing: border-box;
      padding: var(--padding);
      padding-top: var(--paddingTop);
      padding-bottom: var(--paddingTop);
      overflow-y: auto;
      max-height: 100%;
      position: relative;
      z-index: -1;

      display: grid;
      gap: 1rem;
      place-content: start stretch;

      @media (width < 30rem) {
        max-height: var(--maxHeight);
        min-height: var(--minHeight);
      }
    }

    @media (width < 30rem) {
      --t: 0.4s;
      --easeOutBack: ease-out;
      width: 100%;
      max-height: calc(var(--maxHeight) + var(--padBounce));
      height: auto;

      border-top-left-radius: var(--bottomDrawerCornerRadius);
      border-top-right-radius: var(--bottomDrawerCornerRadius);

      padding-right: 0;
      padding-bottom: var(--padBounce);

      --padding: 1rem;

      top: unset;
      bottom: 0;

      translate: 0 100%;

      &:open {
        translate: 0 var(--padBounce);
      }

      @starting-style {
        &:open {
          translate: 0 100%;
        }
      }

      button.close {
        right: var(--buttonInset);
      }
    }
  }
</style>
