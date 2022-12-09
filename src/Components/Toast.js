import React from "react";

const Toast = ({ button, toast_css, onClose, type }) => {
  return (
    <span style={{...toast_css}} className={["toast", type.toLowerCase()].join(" ")}>
      { button.message }
      <span onClick={onClose} className="close-cross">&times;</span>
    </span>
  )
}

export default Toast
