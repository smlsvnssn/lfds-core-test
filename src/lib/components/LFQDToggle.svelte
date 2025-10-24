<script>
  import { randomChars } from 'ouml'

  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   checked?: boolean
   *   children?: Snippet
   * }}
   */
  let { checked = $bindable(), children, id = randomChars(5) } = $props()
</script>

<div class="toggle">
  <input {id} type="checkbox" bind:checked />
  <label for={id}><p>{@render children?.()}</p></label>
</div>

<style>
  .toggle {
    display: grid;
    grid-auto-flow: column ;
    place-content: center start;
    place-items: center start;
    gap: .25rem;
  }

  label {
    cursor: pointer;
  }

  input[type='checkbox'] {
    --size: 1.125rem;
    --border: var(--lfds-semantic-sizes-border-width-medium);
    --t: var(--lfqd-time-default);
    --accentColor: var(--lfds-semantic-border-tertiary);
    --checkedColor: var(--lfds-semantic-border-focus);
    --neutralColor: var(--lfds-semantic-background-secondary);

    box-sizing: border-box;
    appearance: none;

    position: relative;
    width: calc(var(--size) * 2 + (var(--border) * 4));
    height: calc(var(--size) + (var(--border) * 4));
    cursor: pointer;
    background: var(--accentColor);
    border: var(--border) solid var(--accentColor);
    border-radius: var(--size);

    transition: all var(--t);

    &:after,
    &:before {
      --w: calc(var(--size) + (var(--border) * 2));

      box-sizing: border-box;
      content: '';
      display: inline-block;
      position: absolute;
      width: var(--w);
      aspect-ratio: 1/1;
      border-radius: var(--size);
      /* border: var(--border) solid var(--neutralColor); */
      border: var(--border) solid transparent;

      transition: all var(--t) allow-discrete;

      left: 0;
    }

    &:after {
      background: var(--accentColor);
      /* These are tricky bastards, size dependant and awkward. Should be replaced by css shape() when mainstream. */
      clip-path: path(
        'M15.8994 7.41406L12.3633 10.9492L15.8994 14.4854L14.4854 15.8994L10.9492 12.3633L7.41406 15.8994L6 14.4854L9.53516 10.9492L6 7.41406L7.41406 6L10.9492 9.53516L14.4854 6L15.8994 7.41406Z'
      );
    }

    &:before {
      background: var(--neutralColor);
    }

    &:checked {
      background: var(--checkedColor);
      border-color: var(--checkedColor);

      &:after,
      &:before {
        left: calc(100% - var(--w));
      }

      &:after {
        background: var(--checkedColor);

        clip-path: path(
          'M17.3135 8.41504L11.6562 14.0703L11.6572 14.0713L10.2422 15.4854L6 11.2432L7.41406 9.8291L10.2422 12.6562L15.8994 7L17.3135 8.41504Z'
        );
      }
      &:before {
        background: var(--neutralColor);
      }
    }

    &:hover {
      scale: 1.02;
    }
  }
</style>
