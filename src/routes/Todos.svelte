<script>
  import LFQDBox from '$lib/components/LFQDBox.svelte'
  import LFQDBoxHeader from '$lib/components/LFQDBoxHeader.svelte'
  import LFQDRow from '$lib/components/LFQDRow.svelte'
  import LFQDBadge from '$lib/components/LFQDBadge.svelte'
  import LFQDRowProgressBar from '$lib/components/LFQDRowProgressBar.svelte'

  import { is, wait } from 'ouml'
  import { renderSheet } from '$lib/utils.svelte'
  import { topicList } from '$lib/mockdata.svelte'
  

  let { todos, activeTodo = $bindable(), topic = topicList.start } = $props()

  let myTodos = $derived(todos.filter(({ topics }) => topics.includes(topic)))

  const onDo = todo => {
    activeTodo = todo
    is(todo.delay) && wait(todo.delay, () => todo.callback?.(todo))
    renderSheet(todo.sheetData)
  }
</script>

<LFQDBox>
  <LFQDBoxHeader>Att göra just nu</LFQDBoxHeader>
  {#each myTodos as todo}
    {#if todo.type == 'todo'}
      <LFQDRow {...todo} onclick={() => onDo(todo)}>
        {#snippet icon()}
          {#if todo.badge && todo.state == 'active'}
            <LFQDBadge type={todo.badgeType}>{todo.badge}</LFQDBadge>
          {:else}
            <lfui-icon size="24" icon-id={todo.iconId}></lfui-icon>
          {/if}
        {/snippet}
      </LFQDRow>
    {:else if todo.type == 'process'}
      <LFQDRowProgressBar
        {...todo}
        type={todo.state == 'active' ? 'secondary'
        : todo.state == 'success' ? 'success'
        : 'error'}
        onclick={() => onDo(todo)}
        percent={todo.percentCompleted}
      ></LFQDRowProgressBar>
    {/if}
  {/each}
</LFQDBox>
