<script>
  import MockForm from './MockForm.svelte'

  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import löremIpsum from 'loerem'
  import { onCloseSheet } from '$lib/utils.svelte'
  import LFQDDialogSheet from '$lib/LFQDDialogSheet.svelte'

  let { data, open, activeTodo } = $props()

  const close = () => {
    activeTodo.callback(activeTodo)
    onCloseSheet()
  }
</script>

<LFQDDialogSheet
  size={data?.size ?? 'small'}
  {open}
  onclose={onCloseSheet}
  heading={data?.title ?? data?.titleLeft}
>
  {#if data?.content == 'möte'}
    <LFQDBox>
      <LFQDPadding>
        <p>{löremIpsum()}</p>
        <lfui-button
          tabindex="0"
          role="button"
          onkeydown={e => e.key == 'Enter' && close()}
          onclick={close}>Anslut till mötet</lfui-button
        >
      </LFQDPadding>
    </LFQDBox>
  {:else if data?.content == 'dok'}
    <LFQDBox>
      <LFQDPadding amount="2">
        {@html löremIpsum({ numberOfParagraphs: 10 })}
        <lfui-button
          tabindex="0"
          role="button"
          onkeydown={e => e.key == 'Enter' && close()}
          onclick={close}
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
      onkeydown={e => e.key == 'Enter' && close()}
      onclick={close}
      style="margin-top: 1rem"
    >
      Lägg till efakturor
    </lfui-button>
  {:else if data?.content == 'skada'}
    <MockForm {close} buttontext="Komplettera din skada"></MockForm>
  {:else if data?.content == 'mock'}
    <MockForm {close}></MockForm>
  {:else if data?.titleLeft}
    <LFQDBox>
      <LFQDRow {...data} />
    </LFQDBox>
  {:else}
    <p>...</p>
  {/if}
</LFQDDialogSheet>
