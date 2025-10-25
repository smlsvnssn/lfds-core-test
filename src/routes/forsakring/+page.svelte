<script>
  import LFQDLayout from '$lib/components/LFQDLayout.svelte'
  import LFQDLayoutArea from '$lib/components/LFQDLayoutArea.svelte'
  import LFQDBox from '$lib/components/LFQDBox.svelte'

  import { random, times } from 'ouml'
  import Sheet from '../Sheet.svelte'
  import Todos from '../Todos.svelte'
  import { todos, topicList } from '$lib/mockdata.svelte'
  import { page } from '$app/state'

  let activeTodo = $state()
</script>

<Sheet
  data={page.state?.sheetData}
  open={page.state?.sheetIsOpen && page.state?.sheetId == 0 ?
    page.state?.sheetIsOpen
  : false}
  {activeTodo}
/>

<LFQDLayout type="header">
  <LFQDLayoutArea type="header">
    <LFQDBox>
      <header>
        <lfui-icon icon-id="umbrella" size="72"></lfui-icon>

        <h1>Dina försäkringar</h1>
        <p>...</p>
      </header>
    </LFQDBox>
  </LFQDLayoutArea>
</LFQDLayout>

<LFQDLayout type="masonry">
  <Todos {todos} topic={topicList.försäkring} bind:activeTodo />
  {#each times(random(6) + 3) as thing}
    <LFQDBox>
      <div class="placeholder"></div>
    </LFQDBox>
  {/each}
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
