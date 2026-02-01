<script>
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDLayout from '$lib/components/LFQDLayout.svelte'
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDSectionHeader from '$lib/components/LFQDSectionHeader.svelte'

  import { isSmallScreen } from '$lib/utils.svelte'
  import Profile from './Profile.svelte'

  let innerWidth = $state(0)
  let isSmall = $derived(isSmallScreen(innerWidth))
</script>

<svelte:window bind:innerWidth />

{#if isSmall}
  <LFQDLayout type="header">
    <LFQDBox>
      <LFQDPadding>
        <div class="twoCol">
          <lfui-button-shortcut
            href="/konton"
            label="Konton och kort"
            layout="vertical"
            icon-id="card"
          ></lfui-button-shortcut>

          <lfui-button-shortcut
            href="/konton"
            label="Betala och överför"
            layout="vertical"
            icon-id="payment"
          ></lfui-button-shortcut>

          <lfui-button-shortcut
            href="/lan"
            label="Lån"
            layout="vertical"
            icon-id="money"
          ></lfui-button-shortcut>

          <lfui-button-shortcut
            href="/pension"
            label="Pension"
            icon-id="pension"
            layout="vertical"
          ></lfui-button-shortcut>
        </div>
      </LFQDPadding>
    </LFQDBox>
  </LFQDLayout>
{/if}
<LFQDLayout>
  <LFQDBox>
    <LFQDPadding>
      <lfui-button-shortcut href="#" label="Kontakta oss" icon-id="call-center"
      ></lfui-button-shortcut>
    </LFQDPadding>
  </LFQDBox>
</LFQDLayout>

<Profile></Profile>

<LFQDLayout>
  <!-- <LFQDBox>
    <LFQDPadding>
      <lfui-button-shortcut
        href="#"
        label="Avtal och dokument"
        icon-id="documents"
      ></lfui-button-shortcut>

      <lfui-button-shortcut href="#" label="BankID och Swish" icon-id="swish"
      ></lfui-button-shortcut>

      <lfui-button-shortcut href="#" label="Inställningar" icon-id="gear"
      ></lfui-button-shortcut>

      <lfui-button-shortcut href="#" label="Kontakta oss" icon-id="call-center"
      ></lfui-button-shortcut>
    </LFQDPadding>
  </LFQDBox> -->

  <!-- <LFQDSectionHeader padding={isSmall} size="medium">
    Tester och annat
  </LFQDSectionHeader>
  <LFQDBox>
    <LFQDPadding>
      <lfui-button-shortcut
        href="/spara"
        label="Tester rows"
        layout="vertical"
        icon-id="money"
      ></lfui-button-shortcut>

      <lfui-button-shortcut
        href="/mer/bonus"
        label="Bonusskiss"
        layout="vertical"
        icon-id="cup"
      ></lfui-button-shortcut>

      <lfui-button-shortcut
        href="/mer/layout"
        label="Tester layout"
        layout="vertical"
        icon-id="picture"
      ></lfui-button-shortcut>

      <lfui-button-shortcut
        href="/mer/bitar"
        label="Tester lite av varje"
        icon-id="picture"
        layout="vertical"
      ></lfui-button-shortcut>
    </LFQDPadding>
  </LFQDBox> -->
</LFQDLayout>

<style>
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
  }

  .placeholder {
    height: 10rem;
    background: var(--lfds-semantic-background-secondary);
    padding: 1rem;
  }

  .twoCol {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  header {
    display: grid;
    gap: 1.5rem;
    place-items: center;
    padding: 5rem 3.5rem 3.5rem;
    @media (width < 30rem) {
      gap: 1rem;
      padding: 3rem 1rem 1.5rem;
    }
  }

  h1 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 2rem;
    margin: 0%;

    @media (width < 30rem) {
      font-size: 1.875rem;
    }
  }

  h2 {
    font-family: var(--lfds-typography-font-family-ibm);
    font-weight: var(--lfds-typography-weight-semibold);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 1rem;
    margin: 0%;

    /* @media (width < 30rem) {
      font-size: 1.25rem;
    } */
  }

  p {
    font-size: 1.125rem;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }
</style>
