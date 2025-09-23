<script>
  import LFQD_Padding from '$lib/LFQD_Padding.svelte'
  import LFQD_Box from '$lib/../lib/LFQD_Box.svelte'
  import LFQD_Row from '$lib/LFQD_Row.svelte'

  let { state, render, close } = $props()

</script>

<lfui-dialog-side-sheet
  size=""
  open={state?.sheetIsOpen ? true : false}
  onclose={close}
  height=""
  heading={state.sheetData?.title}
>
  {#if state?.sheetData?.bubbel}
    <div style="width:100%; display:grid; place-items:center; margin-top: 3rem">
      <img src={state.sheetData.bubbel} alt="" />
    </div>
  {/if}

  {#if state?.sheetData?.dummy}
    <LFQD_Box>
      {#each state.sheetData.dummy as item}
        <LFQD_Row {...item} onclick={() => render(item)} />
      {/each}
    </LFQD_Box>
  {/if}

  <div class="spacer"></div>

  {#if state?.sheetData?.text}
    <LFQD_Box>
      <LFQD_Padding>
        {@html state.sheetData.text}
      </LFQD_Padding>
    </LFQD_Box>
  {/if}
</lfui-dialog-side-sheet>

<style>
  .spacer {
    height: 1.5rem;
  }
</style>
