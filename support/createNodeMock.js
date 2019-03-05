const noop = () => {}

const createNodeMock = (element) => {
  if (element.type === 'div') {
    return {
      addEventListener: noop
    }
  }

  return null
}

export { createNodeMock }