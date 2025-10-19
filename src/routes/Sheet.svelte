<script>
  import MockForm from './MockForm.svelte'

  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import löremIpsum from 'loerem'
  import { onCloseSheet } from '$lib/utils.svelte'
  import LFQDDialogSheet from '$lib/LFQDDialogSheet.svelte'

  let { data, open, efakturor = $bindable() } = $props()

  let sheet = $state()
</script>

<LFQDDialogSheet
  size={data?.size ?? 'small'}
  {open}
  onclose={onCloseSheet}
  height=""
  bind:dialog={sheet}
  heading={data?.title ?? data?.titleLeft}
>
  {#if data?.content == 'möte'}
    <LFQDBox>
      <LFQDPadding>
        <p>{löremIpsum()}</p>
        <lfui-button
          tabindex="0"
          role="button"
          onkeydown={e => e.key == 'Enter' && onCloseSheet()}
          onclick={() => onCloseSheet()}>Anslut till mötet</lfui-button
        >
      </LFQDPadding>
    </LFQDBox>
  {:else if data?.content == 'dok'}
    <LFQDBox>
      <LFQDPadding>
        {@html löremIpsum({ numberOfParagraphs: 10 })}
        <lfui-button
          tabindex="0"
          role="button"
          onkeydown={e => e.key == 'Enter' && onCloseSheet()}
          onclick={() => onCloseSheet()}
        >
          Gör något som en konsekvens av dokumentet
        </lfui-button>
      </LFQDPadding>
    </LFQDBox>
  {:else if data?.content == 'efakturor'}
    <LFQDBox>
      <LFQDRow titleLeft="Kundklubb" titleRight="116 kr" icon="e-invoice" />
      <LFQDRow titleLeft="Hundklubb" titleRight="89 kr" icon="e-invoice" />
      <LFQDRow titleLeft="Grundklubb" titleRight="312 kr" icon="e-invoice" />
    </LFQDBox>

    <lfui-button
      tabindex="0"
      role="button"
      onkeydown={e => e.key == 'Enter' && onCloseSheet()}
      onclick={() => {
        onCloseSheet()
        efakturor = false
      }}
      style="margin-top: 1rem"
    >
      Lägg till efakturor
    </lfui-button>
  {:else if data?.titleLeft}
    <LFQDBox>
      <LFQDRow {...data} />
    </LFQDBox>
  {:else if data?.content == 'mock'}
    <MockForm close={() => onCloseSheet()}></MockForm>
  {:else}
    <p>...</p>
  {/if}
</LFQDDialogSheet>
