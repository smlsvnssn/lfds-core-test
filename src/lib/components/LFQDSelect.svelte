<script>
  import { randomChars } from 'ouml'

  /**
   * @import { Snippet } from 'svelte'
   * @type {{
   *   checked?: boolean
   *   children?: Snippet
   *   label?: string
   *   id?: string
   *   size?: 'medium' | 'large'
   * }}
   */
  let {
    checked = $bindable(),
    children,
    label,
    id = randomChars(7),
    size = 'medium',
  } = $props()
</script>

<div class="select">
  {#snippet content()}
    <button>
      <selectedcontent></selectedcontent>
    </button>

    {@render children?.()}
  {/snippet}

  <label for={id}>{label}</label>
  <select {id}>
    <!-- Using snippets to avid compiler error due to unspecced elements -->
    {@render content?.()}
  </select>
</div>

<style>
  .select {
    font-family: var(--lfds-typography-font-family-ibm);
  }

  label {
    cursor: pointer;
    display: block;
    margin-bottom: 0.125rem;
  }

  select,
  ::picker(select) {
    appearance: base-select;
    box-sizing: border-box;

    border: 1px solid var(--lfds-semantic-border-tertiary);
    border-radius: var(--lfds-semantic-sizes-radius-sm);
    background: none;
    font-weight: 400;
    cursor: pointer;

    color: var(--lfds-semantic-text);
    background: var(--lfds-semantic-background-secondary);

    min-width: 15rem;
  }

  select {
    transition: all 0.125s linear;
    align-items: center;

    min-height: var(--lfds-semantic-sizes-spacing-x6);

    padding: calc(0rem + 1px) calc(0.5rem + 1px);

    &:hover,
    &:focus-within {
      padding: 0 0.5rem;
      border: 2px solid var(--lfds-semantic-border-focus);
    }

    &::picker-icon {
      content: '';
      transform-origin: center;
      transition: 0.4s rotate;
      margin-right: 0.5rem;

      width: 0;
      height: 0;
      border-left: 0.25rem solid transparent;
      border-right: 0.25rem solid transparent;

      border-top: 0.375rem solid var(--lfds-semantic-border-focus);
    }
    &:open::picker-icon {
      rotate: -90deg;
    }

    selectedcontent {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;

      min-height: var(--lfds-semantic-sizes-spacing-x6);
    }
  }

  ::picker(select) {
    padding: 0;

    transition: all 0.2s allow-discrete;
    translate: 0 2rem;
    opacity: 0;

    border: 1px solid var(--lfds-semantic-border-tertiary);

    box-shadow: var(--lfqd-box-shadow);

    scrollbar-color: var(--lfds-semantic-border-tertiary) transparent;
    scrollbar-width: thin;
    overflow: scroll;

    top: calc(anchor(top) - 0.125rem);
    left: anchor(left);

    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  ::picker(select):popover-open {
    transition: all 0.2s allow-discrete;

    translate: 0 2px;
    opacity: 1;

    @starting-style {
      translate: 0 0.5rem;
      opacity: 0;
    }
  }

  :global(option) {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    font-size: 1rem;

    min-height: var(--lfds-semantic-sizes-spacing-x6);

    border-bottom: 1px solid var(--lfds-semantic-border-tertiary);

    transition: all 0.3s;

    &[disabled] {
      display: none;
    }

    &:last-child {
      border: none;
    }

    &:hover {
      background: var(--lfds-semantic-background-hover);
    }

    &:checked {
      color: var(--lfds-semantic-text-inverted);
      background: var(--lfds-semantic-background-selected);
    }

    &::checkmark {
      order: 1;
      content: '¬';
      padding: 0 0.25rem;
      font-size: 1.5rem;
      font-weight: 500;
      margin-left: auto;
      rotate: 135deg;
    }
  }

  /* Jävla ikoner alltså */
  :global(option:has(lfui-icon)) {
    color: var(--lfds-semantic-icon-primary);
  }
  :global(option > :not(:first-child)) {
    color: var(--lfds-semantic-text-primary);
  }
  :global(option:checked > :not(:first-child)) {
    color: var(--lfds-semantic-text-inverted);
  }
</style>
