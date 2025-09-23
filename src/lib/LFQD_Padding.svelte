<script>
  let { children } = $props()
</script>

<div>
  {@render children()}
</div>

<style>
  div {
    padding: 1rem;
    display: grid;
    gap: 1.5rem;
  }
</style>
