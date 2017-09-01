import React from 'react'

export default class SyncColorField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorField: props.component.defaultProps.color,
    }
  }

  render() {
    const handleChange = ({ hex }) => this.setState({ colorField: hex })

    return React.cloneElement(this.props.children, {
      onChange: handleChange,
      color: this.state.colorField,
    })
  }
}
