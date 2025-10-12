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

<dialog bind:this={dialog} closedby="any" {open}>
  {@render children?.()}
</dialog>

<style>
  dialog {
    border-radius: 0.5rem;
    border: none;
    padding: 3rem;
    max-width: min(30rem, 90vw);
    box-sizing: border-box;
    overflow: hidden;

    gap: 1rem;

    filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
      drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

    transition: all 0.3s allow-discrete;

    visibility: hidden;
    opacity: 0;
    scale: 0.95;
    translate: 0 2rem;

    @media (width < 30rem) {
      padding: 1.5rem;
    }

    &:open {
      visibility: visible;
      display: grid;
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
