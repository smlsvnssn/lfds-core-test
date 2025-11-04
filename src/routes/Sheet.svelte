<script>
  import MockForm from './MockForm.svelte'
  import MockFlow from './MockFlow.svelte'

  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import löremIpsum from 'loerem'
  import { onCloseSheet } from '$lib/utils.svelte'
  import LFQDDialogSheet from '$lib/components/LFQDDialogSheet.svelte'

  let { data, open, activeTodo } = $props()

  const close = () => {
    activeTodo?.callback?.(activeTodo)
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
    >
      Lägg till efakturor
    </lfui-button>
  {:else if data?.content == 'skada'}
    <MockForm {close} buttontext="Komplettera din skada"></MockForm>
  {:else if data?.content == 'mock'}
    <MockForm {close}></MockForm>
  {:else if data?.content == 'mockflow'}
    <MockFlow {close}></MockFlow>
  {:else if data?.titleLeft}
    <LFQDBox>
      <LFQDRow {...data} />
    </LFQDBox>
  {:else}
    <p>...</p>
  {/if}
</LFQDDialogSheet>
