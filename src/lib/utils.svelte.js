import { pushState } from '$app/navigation'
import { page } from '$app/state'
import { log, randomChars, toKebabCase } from 'ouml'
import { todos } from '$lib/mockdata.svelte'

export const isSmallScreen = innerWidth => innerWidth < 16 * 60

export const onCloseSheet = () =>
  page.state?.sheetIsOpen ? history.back() : null

export const renderSheet = (data, sheetId = 0) => {
  let path =
    page.url.pathname.length == 1 ? page.url.pathname : page.url.pathname + '/'
  let title = data.title || data.titleLeft
  let url = title ? path + encodeURI(toKebabCase(title)) : ''

  pushState(url, {
    sheetIsOpen: randomChars(),
    sheetId,
    sheetData: $state.snapshot(data),
  })
}

export const hasActiveTodosInTopic = topic =>
  todos.filter(
    ({ topics, state }) => topics.includes(topic) && state == 'active',
  )?.length > 0

