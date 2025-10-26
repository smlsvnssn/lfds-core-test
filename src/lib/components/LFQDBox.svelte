<script>
  import { autoAnimate } from '@formkit/auto-animate'
  let { children } = $props()
</script>

<article class="box" use:autoAnimate>
  {@render children?.()}
</article>

<style>
  .box {
    contain: paint;
    border-radius: var(--lfds-semantic-sizes-radius-md);
    background: var(--lfds-semantic-background-secondary);

    box-shadow: var(--lfqd-box-shadow);

    @media (width < 30rem) {
      border-radius: 0;
    }
  }
</style>
