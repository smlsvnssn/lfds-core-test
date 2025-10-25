<script>
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDLayout from '$lib/components/LFQDLayout.svelte'
  import LFQDBadge from '$lib/components/LFQDBadge.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDSectionHeader from '$lib/components/LFQDSectionHeader.svelte'
  import LFQDDialogSheet from '$lib/components/LFQDDialogSheet.svelte'
  import LFQDToggle from '$lib/components/LFQDToggle.svelte'

  import { goto } from '$app/navigation'

  import Bonus from './bonus/+page.svelte'

  import { topicList } from '$lib/mockdata.svelte'
  import {
    hasActiveTodosInTopic,
    renderSheet,
    onCloseSheet,
  } from '$lib/utils.svelte'
  import { page } from '$app/state'

  import { is, log } from 'ouml'

  let isDark = $state()

  $effect(() => {
    if (is(isDark)) {
      document
        .querySelector('body')
        .setAttribute('data-theme', isDark ? 'dark' : 'light')
    } else {
      isDark =
        document.querySelector('body').getAttribute('data-theme') == 'dark'
    }
  })

</script>

<LFQDDialogSheet
  size={page.state.sheetData?.size ?? 'small'}
  open={page.state?.sheetIsOpen && page.state?.sheetId == 0 ?
    page.state?.sheetIsOpen
  : false}
  onclose={onCloseSheet}
  heading={page.state.sheetData?.heading}
>
  {#if page.state.sheetData?.content == 'bonus'}
    <Bonus></Bonus>
  {:else if page.state.sheetData?.content == 'utseende'}
    <LFQDToggle bind:checked={isDark}>
      {#snippet before()}
        Ljust läge
      {/snippet}
      Mörkt läge
    </LFQDToggle>
  {/if}
</LFQDDialogSheet>

<LFQDLayout>
  <LFQDSectionHeader padding={false} size="medium">
    Dina uppgifter
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow
      titleLeft="Kontaktuppgifter"
      icon="user-glow"
      onclick={() => renderSheet({ heading: 'Kontaktuppgifter' })}
    />

    <LFQDRow
      titleLeft="Bonus och förmåner"
      icon="cup"
      onclick={() =>
        renderSheet({ heading: '', content: 'bonus', size: 'large' })}
    />

    <LFQDRow
      titleLeft="Avtal och dokument"
      icon="documents"
      onclick={() => renderSheet({ heading: 'Avtal och dokument' })}
    />
    {#if hasActiveTodosInTopic(topicList.dokument)}
      <span class="badge">
        <LFQDBadge size="circle"></LFQDBadge>
      </span>
    {/if}

    <LFQDRow
      titleLeft="Konto för in- och utbetalning"
      icon="payment"
      onclick={() => renderSheet({ heading: 'Konto för in- och utbetalning' })}
    />

    <LFQDRow
      titleLeft="Kundkännedom"
      icon="balance"
      onclick={() => renderSheet({ heading: 'Kundkännedom' })}
    />
  </LFQDBox>

  <LFQDSectionHeader padding={false} size="medium">
    Banktjänster
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow
      titleLeft="BankID"
      icon="placeholder"
      onclick={() => renderSheet({ heading: 'BankID' })}
    />

    <LFQDRow
      titleLeft="Swish"
      icon="placeholder"
      onclick={() => renderSheet({ heading: 'Swish' })}
    />
    <LFQDRow
      titleLeft="Bedrägeriskydd"
      icon="shield"
      onclick={() => renderSheet({ heading: 'Bedrägeriskydd' })}
    />
    <LFQDRow
      titleLeft="(App) Snabbsaldo & snabböverföring"
      icon="transfer"
      onclick={() => renderSheet({ heading: 'Snabbsaldo & snabböverföring' })}
    />
  </LFQDBox>

  <LFQDSectionHeader padding={false} size="medium">
    Inställningar
  </LFQDSectionHeader>

  <LFQDBox>
    <LFQDRow
      titleLeft="Notiser"
      icon="bell"
      onclick={() => renderSheet({ heading: 'Notiser' })}
    />
    <LFQDRow
      titleLeft="Nyhetsbrev och andra utskick"
      icon="heart"
      onclick={() => renderSheet({ heading: 'Utskick' })}
    />
    <LFQDRow
      titleLeft="Samtycken och datadelning"
      icon="share-alt"
      onclick={() => renderSheet({ heading: 'Samtycken och datadelning' })}
    />
    <LFQDRow
      titleLeft="(E-fakturor? Hellre: Hur vill du betala?)"
      icon="e-invoice"
      onclick={() => renderSheet({ heading: 'Betala' })}
    />
    <LFQDRow
      titleLeft="Hur vill du ha din post?"
      icon="snailmail"
      onclick={() => renderSheet({ heading: 'Hur vill du ha din post?' })}
    />
    <LFQDRow
      titleLeft="Utseende (App (och web?))"
      icon="sun"
      onclick={() => renderSheet({ heading: 'Utseende', content: 'utseende' })}
    />
  </LFQDBox>
</LFQDLayout>

<style>
  .badge {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    top: -3.25rem;
    left: 2rem;
  }
</style>
