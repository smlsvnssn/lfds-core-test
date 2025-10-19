import { pushState } from '$app/navigation'
import { page } from '$app/state'
import { randomChars } from 'ouml'

export const isSmallScreen = innerWidth => innerWidth < 16 * 60

export const onCloseSheet = () =>
  page.state?.sheetIsOpen ? history.back() : null

export const renderSheet = data => {
  pushState(``, {
    sheetIsOpen: randomChars(),
    sheetData: data,
  })
}
