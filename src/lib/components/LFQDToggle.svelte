<script>
  import { randomChars } from 'ouml'
  import cross from '$lib/assets/clip-path-cross.svg'

  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   checked?: boolean
   *   children?: Snippet
   *   before?: Snippet
   *   id?: string
   *   size?: 'medium' | 'large'
   * }}
   */
  let {
    checked = $bindable(),
    children,
    before,
    id = randomChars(7),
    size = 'medium',
  } = $props()
</script>

<div class="toggle">
  <label for={id}>
    <p>{@render before?.()}</p>
    <input {id} class={size} type="checkbox" bind:checked />
    <p>{@render children?.()}</p></label
  >
</div>

<style>
  .toggle {
  }

  label {
    cursor: pointer;
    display: grid;
    grid-auto-flow: column;
    place-content: center start;
    place-items: center start;
    gap: 0.25rem;
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
    width: calc(var(--size) * 2);
    height: var(--size);
    cursor: pointer;
    background: var(--accentColor);
    border-radius: var(--size);
    transition: all var(--t);

    &.large {
      --size: 1.5rem;
    }

    &:after,
    &:before {
      box-sizing: border-box;
      content: '';
      display: inline-block;
      position: absolute;

      aspect-ratio: 1/1;
      border-radius: var(--size);

      transition: all var(--t) allow-discrete;

      left: var(--border);
      top: var(--border);
    }

    &:after {
      width: calc(var(--size) - (var(--border) * 4));
      top: calc(var(--border) * 2);
      left: calc(var(--border) * 2);
      background: var(--accentColor);

      /* Not ready for mainstream, but probably before we're done :-). */
      clip-path: shape(
        from 100% 14.28%,
        line to 64.28% 49.99%,
        line to 100% 85.72%,
        line to 85.72% 100%,
        line to 49.99% 64.28%,
        line to 14.28% 100%,
        line to 0% 85.72%,
        line to 35.71% 49.99%,
        line to 0% 14.28%,
        line to 14.28% 0%,
        line to 49.99% 35.71%,
        line to 85.72% 0%,
        line to 100% 14.28%,
        close
      );
    }

    &:before {
      width: calc(var(--size) - (var(--border) * 2));
      background: var(--neutralColor);
    }

    &:checked {
      background: var(--checkedColor);
      border-color: var(--checkedColor);

      &:after,
      &:before {
        left: calc(100% - var(--size) + var(--border));
      }

      &:after {
        left: calc(100% - var(--size) + (var(--border) * 2.25));
        top: calc(var(--border) + (var(--border) * 1.75));
        background: var(--checkedColor);

        clip-path: path(
          'M17.3135 8.41504L11.6562 14.0703L11.6572 14.0713L10.2422 15.4854L6 11.2432L7.41406 9.8291L10.2422 12.6562L15.8994 7L17.3135 8.41504Z'
        );

        aspect-ratio: 1.333;
        clip-path: shape(
          from 100% 16.68%,
          line to 50% 83.32%,
          line to 50% 83.33%,
          line to 37.5% 100%,
          line to 0% 50.01%,
          line to 12.5% 33.34%,
          line to 37.5% 66.66%,
          line to 87.5% 0%,
          line to 100% 16.68%,
          close
        );
      }
      &:before {
        background: var(--neutralColor);
      }
    }

    &.large:after {
      width: calc(var(--size) - (var(--border) * 7));
      top: calc(var(--border) * 3.5);
      left: calc(var(--border) * 3.5);
    }
    &.large:checked:after {
      left: calc(100% - var(--size) + (var(--border) * 3.75));
      top: calc(var(--border) + (var(--border) * 3.25));
    }

    &:hover {
      scale: 1.02;
    }
  }
</style>
