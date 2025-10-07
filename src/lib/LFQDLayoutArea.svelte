<script>
  let { type = 'onecol', children } = $props()
</script>

<div class="layout-area {type}">
  {@render children?.()}
</div>
