export const eventWithTargetValue = ({ event = {}, value = '' } = {}) => {
  return {
    ...event,
    target: {
      ...event.target,
      value,
    },
  }
}
