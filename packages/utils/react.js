export const renderChildren = ({ render, children, props }) => {
  return render
    ? render(props)
    : children
      ? typeof children === 'function'
        ? children(props)
        : children
      : null
}
