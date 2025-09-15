<script>
  import '@lansforsakringar/core-components'
  import '@lansforsakringar/core-components/index.css'

  let { children } = $props();
</script>

<div class=box>
  {@render children()}
</div>

<style>
.box{
  overflow: hidden;
  border-radius: var(--lfds-semantic-sizes-radius-md);
}
</style>

