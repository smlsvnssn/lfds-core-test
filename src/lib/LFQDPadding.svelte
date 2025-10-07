<script>
  let { children } = $props()
</script>

<div class="padding">
  {@render children?.()}
</div>

<style>
  .padding {
    padding: 1rem;
    display: grid;
    gap: 1.5rem;
  }
</style>
