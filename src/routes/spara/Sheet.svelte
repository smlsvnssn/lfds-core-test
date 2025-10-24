<script>
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import { onCloseSheet } from '$lib/utils.svelte'
  import LFQDDialogSheet from '$lib/components/LFQDDialogSheet.svelte'

  let { state, render } = $props()
</script>

<LFQDDialogSheet
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

  {#if state?.sheetData?.text}
    <LFQDBox>
      <LFQDPadding>
        {@html state.sheetData.text}
      </LFQDPadding>
    </LFQDBox>
  {/if}
</LFQDDialogSheet>
