<script>
  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   dialog: HTMLElement
   *   open?: boolean
   *   children?: Snippet
   * }}
   */
  let { dialog = $bindable(), open = false, children } = $props()
</script>

<dialog class="takeover" bind:this={dialog} closedby="none" {open}>
  {@render children?.()}
</dialog>

<style>
  :global(body main) {
    @media (width < 30rem) {
      /* Buggy in mobile webkit, some rendering optimisation bug  */
      /* transition: translate 0.3s; */
    }
  }

  :global(body:has(dialog.takeover[open])) {
    overflow: hidden;
    @media (width < 30rem) {
      :global(main) {
        /* translate: -3rem 0; */
      }
    }
  }

  dialog {
    border-radius: 0.5rem;
    border: none;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    margin: 1rem;
    padding: 3rem;

    width: auto;
    height: auto;

    overflow: hidden;

    display: grid;
    place-content: center;
    place-items: center;
    gap: 1rem;

    filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

    transition: all 0.3s allow-discrete;

    visibility: hidden;
    opacity: 0;
    scale: 0.95;
    translate: 0 2rem;

    &:open {
      visibility: visible;
      opacity: 1;
      scale: 1;
      translate: 0 0;
    }
    @starting-style {
      &:open {
        visibility: hidden;
        opacity: 0;
        scale: 0.95;
        translate: 0 2rem;
      }
    }

    @media (width < 30rem) {
      box-sizing: border-box;
      border-radius: 0;
      margin: 0;
      padding: 1rem;

      scale: 1;
      translate: 100% 0;

      &:open {
        visibility: visible;
        opacity: 1;
        scale: 1;
        translate: 0 0;
      }
      @starting-style {
        &:open {
          visibility: hidden;
          opacity: 0;
          scale: 1;
          translate: 100% 0;
        }
      }
    }

    &::backdrop {
      opacity: 0;
      background-color: var(--lfds-semantic-background-transparent-secondary);
      transition: all 0.3s allow-discrete;
    }

    &:open::backdrop {
      opacity: 1;
    }

    @starting-style {
      &:open::backdrop {
        opacity: 0;
      }
    }
  }
</style>
