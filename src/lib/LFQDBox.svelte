<script>
  let { children } = $props()
</script>

<article class="box">
  {@render children?.()}
</article>

<style>
  .box {
    overflow: hidden;
    border-radius: var(--lfds-semantic-sizes-radius-md);
    background: var(--lfds-semantic-background-secondary);

    box-shadow: var(--lfqd-box-shadow);

    @media (width < 30rem) {
      border-radius: 0;
    }
  }
</style>
