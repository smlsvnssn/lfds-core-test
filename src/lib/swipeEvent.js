export const addSwipeEvent = (element, eventtype, swipeableElement = element) => {
  const swipeThreshold = 60

  let startPos, lastPos, willFire

  const between = (n, min, max) => n >= min && n < max

  const isInDirection = (θ, lastθ, minAngle, maxAngle) =>
    between(θ, minAngle, maxAngle) && between(lastθ, minAngle, maxAngle)

  const shouldFire = (startX, startY, lastX, lastY, x, y) => {
    const π = Math.PI
    let θ = Math.atan2(y - startY, x - startX)
    let lastθ = Math.atan2(y - lastY, x - lastX)
    let r = Math.hypot(x - startX, y - startY)

    return r > swipeThreshold
      ? isInDirection(θ, lastθ, -π * 0.25, π * 0.25)
        ? 'swiperight'
        : isInDirection(θ, lastθ, π * 0.25, π * 0.75)
        ? 'swipedown'
        : isInDirection(θ, lastθ, -π * 0.75, -π * 0.25)
        ? 'swipeup'
        : isInDirection(Math.abs(θ), Math.abs(lastθ), π * 0.75, π + 0.0001)
        ? 'swipeleft'
        : false
      : false
  }

  const onTouchStart = e => {
    startPos = lastPos = [
      e.changedTouches[0].screenX,
      e.changedTouches[0].screenY,
    ]

    element.addEventListener('touchmove', onTouchMove)
    element.addEventListener('touchend', onTouchEnd)
  }

  const onTouchMove = e => {
    let [startX, startY] = startPos,
      [lastX, lastY] = lastPos,
      [x, y] = [e.changedTouches[0].screenX, e.changedTouches[0].screenY]

    willFire = shouldFire(startX, startY, lastX, lastY, x, y)

    lastPos = [x, y]

    // custom for drawer component
    let amountSwipedDown = y - startY > 0 ? y - startY : 0
    swipeableElement.style.setProperty(
      'translate',
      `0 calc(${amountSwipedDown}px + var(--padBounce))`,
    )
  }

  const onTouchEnd = e => {
    if (willFire == eventtype && e) {
      element.dispatchEvent(new Event(String(willFire)))
    }

    element.removeEventListener('touchmove', onTouchMove)
    element.removeEventListener('touchend', onTouchEnd)

    // custom for drawer component
    swipeableElement.style.removeProperty('translate')
  }

  const destroy = () => {
    element.removeEventListener('touchstart', onTouchStart)
    onTouchEnd()
  }

  element.addEventListener('touchstart', onTouchStart)

  return { destroy }
}
