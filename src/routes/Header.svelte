<script>
  import lisa from './lisa.png'
</script>

<header class="start">
  <img src={lisa} alt="" />
  <div>
    <h1>Hej Lisa!</h1>
    <p>Hos oss kan du samla allt inom bank, pension och försäkring.</p>
  </div>
</header>

<style>
  header.start {
    display: grid;
    --wider: 85rem;

    place-items: stretch;
    padding: 0;
    margin: -1.5rem;
    margin-bottom: -3.5rem;

    @media (width < 30rem) {
      margin: 0;
      margin-top: -.5rem;
      margin-bottom: -1rem;
    }

    img {
      width: 100%;
      object-fit: cover;
    }
    img,
    div {
      grid-area: 1 / 1 / 1 / 1;
    }
    div {
      place-self: end center;
      width: 100%;
      max-width: var(--wider);
      padding: 3rem 1rem;
      box-sizing: border-box;
      
      @media (width < 85rem) {
        padding: 3rem 1.5rem;
      }

      @media (width < 30rem) {
        padding: 6rem 1rem 1rem;
      }
    }
    h1,
    p {
      text-align: start;
      color: var(--lfds-primitives-color-neutral-0);
    }
    h1 {
      font-size: 3rem;
      @media (width < 30rem) {
        font-size: 1.875rem;
      }
    }
    p {
      font-size: 1.25rem;
      @media (width < 30rem) {
        font-size: 1rem;
      }
    }
  }
  h1 {
    font-family: var(--lfds-typography-font-family-lf);
    font-weight: var(--lfds-typography-weight-medium);
    color: var(--lfds-semantic-text-brand-primary);
    font-size: 2rem;
    text-align: center;
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
