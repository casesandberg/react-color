// @flow

type RenderChildren<O> = {
  render?: (O) => {},
  children?: (O) => {},
  props: O,
}

export const renderChildren = <O: Object>({ render, children, props }: RenderChildren<O>) => {
  return render ? render(props) : children ? (typeof children === 'function' ? children(props) : children) : null
}
