<script>
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDLink from '$lib/components/LFQDLink.svelte'

  import kulmedmobil from '$lib/assets/kulmedmobil.png'
  import { renderSheet } from '$lib/utils.svelte'

  let visible = $state(true)
</script>

{#if visible}
<LFQDBox>
    <div class="highlight">
      <lfui-icon
        icon-id="cross"
        onclick={() => (visible = false)}
        size="24"
        style="cursor:pointer"
      ></lfui-icon>

      <img src={kulmedmobil} alt="Kul med mobil" />
      <div>
        <h4>Samla ditt pensionssparande</h4>
        <p>
          Fyll i dina uppgifter så hjälper vi dig att flytta ditt
          pensionssparande till LF.
        </p>
        <LFQDLink
          onclick={() =>
            renderSheet({
              title: 'Samla ditt pensionssparande',
              content: 'mockflow',
            })}>Börja här.</LFQDLink
        >
      </div>
    </div>
  </LFQDBox>
  {/if}

<style>
  img {
    object-fit: cover;
    max-width: 10rem;

    @media (width < 30rem) {
      max-width: 8rem;
    }
  }
  .highlight {
    background: var(--lfds-semantic-background-highlight-primary);
    position: relative;
    border: 1px solid var(--lfds-semantic-border-on-highlight-primary);
    border-radius: var(--lfds-semantic-sizes-radius-md);
    display: flex;

    @media (width < 30rem) {
      border-radius: 0;
      border: none;
    }

    div {
      padding: 1rem;
      padding-right: 2rem;
      display: grid;
      place-content: start;
      gap: 0.5rem;
    }

    h4 {
      font-family: var(--lfds-typography-font-family-ibm);
      font-weight: var(--lfds-typography-weight-medium);
      color: var(--lfds-semantic-text-brand-primary);
      font-size: 1.125rem;
      margin: 0%;
    }
    lfui-icon {
      position: absolute;
      top: 1rem;
      right: 01rem;
    }
  }
</style>
