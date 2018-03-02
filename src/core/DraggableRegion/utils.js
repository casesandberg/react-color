export const NOOP = () => {} // eslint-disable-line

export const keepInsideRange = ({ start = 0, position, end }) => {
  if (position < start) {
    return 0
  } else if (position > end) {
    return end
  }
  return position
}
