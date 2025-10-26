<script>
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDLayout from '$lib/components/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/components/LFQDLayoutArea.svelte'
  import LFQDPadding from '$lib/components/LFQDPadding.svelte'
  import LFQDFlow from '$lib/components/LFQDFlow.svelte'
  import MockForm from './MockForm.svelte'
</script>

<LFQDLayout type="twocol-with-header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="pension" size="72"></lfui-icon>
        <h1>Pension</h1>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="main">
    <LFQDBox>
      <LFQDPadding>
        <LFQDFlow>
          {#snippet page1(pageIsValid)}
            <MockForm buttontext=""></MockForm>
          {/snippet}

          {#snippet page2(pageIsValid)}
            <MockForm buttontext=""></MockForm>
          {/snippet}

          {#snippet page3(pageIsValid)}
            <MockForm buttontext=""></MockForm>
          {/snippet}

          {#snippet page4(pageIsValid)}
            <MockForm buttontext=""></MockForm>
          {/snippet}

          {#snippet confirmationPage()}
            <div class="kvitto">
              <h1>Tack för att du deltog!</h1>
              <p>Det här skulle kunna vara ditt kvitto, eller så visar vi bara köpt produkt i kontext, med onboarding.</p>
            </div>
          {/snippet}
        </LFQDFlow>
      </LFQDPadding>
    </LFQDBox>

    <LFQDBox>
      <div class="placeholder"></div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="aside">
    <LFQDBox>
      <div class="placeholder"></div>
    </LFQDBox>
  </LFQDLayoutArea>

  <LFQDLayoutArea type="secondary">
    <LFQDBox>
      <div class="placeholder"></div>
    </LFQDBox>
  </LFQDLayoutArea>
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
    /* font-size: 1.125rem; */
    @media (width < 30rem) {
      font-size: 1rem;
    }
  }

  .kvitto {
    display: grid;
    place-content: center;
    place-items: center;
    min-height: 40vh;

    p{text-align: center;max-width: 80%;}
  }
</style>
