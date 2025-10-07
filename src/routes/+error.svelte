<script>
  import LFQDBox from '$lib/LFQDBox.svelte'

  import mums from './mums.svg'

  import { page } from '$app/state'
  import LFQDLayout from '$lib/LFQDLayout.svelte'
</script>

<LFQDLayout>
  <LFQDBox>
    <header>
      <svg
        width="90"
        height="109"
        viewBox="0 0 90 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="51"
          y1="33.8535"
          x2="51"
          y2="42.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <line
          x1="54"
          y1="83.8535"
          x2="54"
          y2="95.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <line
          x1="64"
          y1="83.8535"
          x2="64"
          y2="93.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <line
          x1="25"
          y1="83.8535"
          x2="25"
          y2="92.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <path
          d="M12.0718 82.8535H7.03589H2V90.8535H7.83746"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M1 53.6976C1 47.7086 5.85505 42.8535 11.8441 42.8535H13V77.2524H7H1V53.6976Z"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="6"
          y1="76.8535"
          x2="6"
          y2="82.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <line
          x1="35"
          y1="83.8535"
          x2="35"
          y2="95.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <line
          x1="38"
          y1="33.8535"
          x2="38"
          y2="40.8535"
          stroke="#00427A"
          stroke-width="2"
        />
        <path
          d="M25 55.8535H31"
          stroke="#EB5C5C"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M25 60.8535H31"
          stroke="#EB5C5C"
          stroke-width="2"
          stroke-linecap="round"
        />
        <rect
          x="18"
          y="42.8535"
          width="54"
          height="40"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M72.8841 34.3535H17.0066C17.0066 34.3535 15.8195 1.85352 45.3841 1.85352C74.9487 1.85352 72.8841 34.3535 72.8841 34.3535Z"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M40.9084 107.854H14C14 107.854 14.8755 93.3535 27.6734 93.3535C40.4712 93.3535 40.9084 107.854 40.9084 107.854Z"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M74.9084 107.854H48C48 107.854 48.8755 93.3535 61.6734 93.3535C74.4712 93.3535 74.9084 107.854 74.9084 107.854Z"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <rect
          x="31"
          y="14.8535"
          width="28"
          height="11"
          rx="5.5"
          stroke="#00427A"
          stroke-width="2"
        />
        <circle cx="40" cy="20.124" r="2" fill="#00427A" />
        <circle cx="50.0957" cy="20.124" r="2" fill="#00427A" />
        <circle
          cx="62"
          cy="56.8535"
          r="2"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M77.9282 82.8535H82.9641H88V90.8535H82.1625"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M89 53.6976C89 47.7086 84.145 42.8535 78.1559 42.8535H77V77.2524H83H89V53.6976Z"
          stroke="#00427A"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          y1="-1"
          x2="6"
          y2="-1"
          transform="matrix(4.37112e-08 1 1 -4.37112e-08 85 76.8535)"
          stroke="#00427A"
          stroke-width="2"
        />
      </svg>

      <h1>Oops.</h1>
      <p>
        {page.error.message}
      </p>
    </header>
  </LFQDBox>
</LFQDLayout>

<style>
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

  form.cards {
    display: grid;
    grid: auto-flow / 1fr 1fr;
    gap: 1rem;
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
