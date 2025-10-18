<script>
  import MockForm from './MockForm.svelte'

  import LFQDPadding from '$lib/LFQDPadding.svelte'
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import löremIpsum from 'loerem'

  let { data, open, onclose, efakturor = $bindable() } = $props()

  let sheet = $state()
</script>

<lfui-dialog-side-sheet
  size={data?.size ?? 'small'}
  {open}
  {onclose}
  height=""
  bind:this={sheet}
  heading={data?.title ?? data?.titleLeft}
>
  {#if data?.content == 'möte'}
    <LFQDBox>
      <LFQDPadding>
        <p>{löremIpsum()}</p>
        <lfui-button
          tabindex="0"
          role="button"
          onkeydown={e => e.key == 'Enter' && sheet.close()}
          onclick={() => sheet.close()}>Anslut till mötet</lfui-button
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
          onkeydown={e => e.key == 'Enter' && sheet.close()}
          onclick={() => sheet.close()}
        >
          Gör något som en konsekvens av dokumentet
        </lfui-button>
      </LFQDPadding>
    </LFQDBox>
  {:else if data?.content == 'efakturor'}
    <LFQDBox>
      <LFQDRow titleLeft="Kundklubb" titleRight="100 kr" icon="e-invoice"
      ></LFQDRow>
      <LFQDRow titleLeft="Hundklubb" titleRight="100 kr" icon="e-invoice"
      ></LFQDRow>
    </LFQDBox>

    <lfui-button
      tabindex="0"
      role="button"
      onkeydown={e => e.key == 'Enter' && sheet.close()}
      onclick={() => {
        sheet.close()
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
  {:else}
    <MockForm close={() => sheet.close()}></MockForm>
  {/if}
</lfui-dialog-side-sheet>
