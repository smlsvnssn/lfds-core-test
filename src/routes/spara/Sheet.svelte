<script>
  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import { onCloseSheet } from '$lib/utils.svelte'

  let { state, render } = $props()
</script>

<lfui-dialog-side-sheet
  size=""
  open={state?.sheetIsOpen ? true : false}
  onclose={onCloseSheet}
  height=""
  heading={state.sheetData?.title}
>
  {#if state?.sheetData?.bubbel}
    <div style="width:100%; display:grid; place-items:center; margin-top: 3rem">
      <img src={state.sheetData.bubbel} alt="" />
    </div>
  {/if}

  {#if state?.sheetData?.dummy}
    <LFQDBox>
      {#each state.sheetData.dummy as item}
        <LFQDRow {...item} onclick={() => render(item)} />
      {/each}
    </LFQDBox>
  {/if}

  <div class="spacer"></div>

  {#if state?.sheetData?.text}
    <LFQDBox>
      <LFQDPadding>
        {@html state.sheetData.text}
      </LFQDPadding>
    </LFQDBox>
  {/if}
</lfui-dialog-side-sheet>

<style>
  .spacer {
    height: 1.5rem;
  }
</style>
