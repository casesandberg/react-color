export const clamp = ({ min = 0, max, value }) => {
  return Math.max(min, Math.min(value, max))
}
