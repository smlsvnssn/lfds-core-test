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

<dialog bind:this={dialog} closedby="none" {open}>
  {@render children?.()}
</dialog>

<style>
  :global(body:has(dialog[open])) {
    overflow: hidden;
  }

  dialog {
    border-radius: 0.5rem;
    border: none;
    padding: 3rem;

    width: auto;
    height: auto;

    overflow: hidden;
    margin: 1rem;

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
    
    @media (width < 30rem) {
      margin: .5rem;
      padding: 1rem;
    }

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
