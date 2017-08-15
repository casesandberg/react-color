import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import PROP_TYPE_SECRET from 'prop-types/lib/ReactPropTypesSecret'
import { number, color, select, array, boolean } from '@storybook/addon-knobs'

const THIS_STRING_SHOULDNT_MATCH = 'THIS_STRING_SHOULDNT_MATCH'

export const generatePropReport = ({ propTypes, defaultProps }) => {
  const props = {}
  // console.log(propTypes.foo({ ['foo']: THIS_STRING_SHOULDNT_MATCH }, 'foo', null, 'prop', 'foo', PROP_TYPE_SECRET))
  _.each(propTypes, (type, prop) => {
    const error = type({[prop]: THIS_STRING_SHOULDNT_MATCH}, prop, 'Component', 'prop', prop, PROP_TYPE_SECRET)
    if (error) {
      const argType = {
        [PropTypes.array]: 'array',
        [PropTypes.bool]: 'boolean',
        [PropTypes.func]: 'function',
        [PropTypes.number]: 'number',
        [PropTypes.object]: 'object',
        [PropTypes.string]: 'string',
        // [PropTypes.symbol]: 'symbol',
      }[error.args]
      props[prop] = { ...props[prop], type: error.type }
      const args = argType || error.args
      if (args) {
        props[prop] = { ...props[prop], args }
      }
    } else {
      props[prop] = { ...props[prop], type: 'string' }
    }
    if (defaultProps[prop]) {
      props[prop] = { ...props[prop], default: defaultProps[prop] }
    }
  })

  // _.each(defaultProps, (defaultValue, prop) => {
  //   props[prop] = { ...props[prop], default: defaultValue }
  // })

  return props
}

export const renderWithKnobs = (Component, props = {}, children = null, knobsSettings = {}) => {
  const knobs = generatePropReport(Component)

  const makeLabel = ({ name, type, defaultProp }) => {
    return `${ name }${ type ? ` (${ type }${ defaultProp ? ` = ${ defaultProp }` : '' })` : '' }`
  }

  const knobProps = _.reduce(knobs, (all, prop, name) => {

    if (prop.type === 'enum') {
      const label = makeLabel({ name: name, type: JSON.stringify(prop.args), defaultProp: prop.default })
      const options = _.reduce(prop.args, (options, value) => {
        options[value] = value
        return options
      }, {})
      all[name] = select(label, options, prop.default)
    }

    if (prop.type === 'number') {
      const label = makeLabel({ name, type: prop.type, defaultProp: prop.default })
      all[name] = number(label, prop.default, knobsSettings[name])
    }

    if (prop.type === 'array') {
      const label = makeLabel({ name, type: prop.type, defaultProp: prop.default })
      all[name] = array(label, prop.default, knobsSettings[name] || ', ')
    }

    if (prop.type === 'arrayOf') {
      const label = makeLabel({ name, type: `[]${ prop.args }s` })
      all[name] = array(label, prop.default, knobsSettings[name] || ', ')
    }

    if (prop.type === 'boolean') {
      const label = makeLabel({ name, type: prop.type, defaultProp: prop.default })
      all[name] = boolean(label, prop.default)
    }

    return all
  }, {})

  return <Component { ...knobProps } { ...props }>{children}</Component>
}
