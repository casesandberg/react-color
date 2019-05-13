import React from 'react'

export const Modal = ({ children, onClose }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      onClick={ onClose }
      style={{
        backgroundColor: 'rgba(0,0,0,0.2)',
        cursor: 'pointer',
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />
    <div style={{ position: 'relative' }}>
      {children}
    </div>
  </div>
)

export default Modal
