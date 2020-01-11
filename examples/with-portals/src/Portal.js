import React from 'react'
import ReactDOM from 'react-dom'

import { SketchPicker } from 'react-color'
import Modal from './Modal'

export const Portal = ({ onClose, onChange }) => {
  const contents = (
    <Modal onClose={ onClose }>
      <SketchPicker
        color="#333"
        onChangeComplete={ onChange }
      />
    </Modal>
  )

  return ReactDOM.createPortal(
    contents,
    document.getElementById('root-portal')
  )
}

export default Portal
