<script>
  let { children } = $props()
</script>

<div class="box">
  {@render children()}
</div>

<style>
  .box {
    overflow: hidden;
    border-radius: var(--lfds-semantic-sizes-radius-md);
    background: var(--lfds-semantic-background-secondary);

    @media (width < 30rem) {
      border-radius: 0;
    }
  }
</style>
