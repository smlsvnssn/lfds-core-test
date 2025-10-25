import { pushState } from '$app/navigation'
import { page } from '$app/state'
import { log, randomChars } from 'ouml'
import { todos } from '$lib/mockdata.svelte'

export const isSmallScreen = innerWidth => innerWidth < 16 * 60

export const onCloseSheet = () =>
  page.state?.sheetIsOpen ? history.back() : null

export const renderSheet = (data, sheetId = 0) =>
  pushState(``, {
    sheetIsOpen: randomChars(),
    sheetId,
    sheetData: $state.snapshot(data),
  })

export const hasActiveTodosInTopic = topic =>
  todos.filter(
    ({ topics, state }) => topics.includes(topic) && state == 'active',
  )?.length > 0

export const parseToNumber = v => +v.replace(/[^\d-]/g, '')
