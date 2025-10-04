<script>
  import LFQDBox from '$lib/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/LFQDRow.svelte'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/LFQDLayoutArea.svelte'
  import LFQDPadding from '$lib/LFQDPadding.svelte'
</script>

<LFQDLayout type="twocol-with-header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="rabbit" size="72"></lfui-icon>

        <h1>Annat</h1>
        <p>...</p>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="main">
    <LFQDBox>
      <LFQDBoxHeader>...</LFQDBoxHeader>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <LFQDBoxHeader>...</LFQDBoxHeader>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<style>
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
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

  p {
    font-size: 1.125rem;
    max-width: 60ch;
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }
</style>
