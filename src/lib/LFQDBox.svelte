<script>
  let { children } = $props()
</script>

<div class="box">
  {@render children?.()}
</div>

<style>
  .box {
    overflow: hidden;
    border-radius: var(--lfds-semantic-sizes-radius-md);
    background: var(--lfds-semantic-background-secondary);

    /* box-shadow: 0 .125rem .125rem #00000005, 0 .25rem .5rem #00000003; */

    @media (width < 30rem) {
      border-radius: 0;
    }
  }
</style>
