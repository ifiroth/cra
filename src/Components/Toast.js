import React from "react";

const Toast = ({ button, onClose, type }) => {
  return (
    <span className={["toast", type.toLowerCase()].join(" ")}>
      { button.message }
      <span onClick={onClose} className="close-cross">&times;</span>
    </span>
  )
}

export default Toast
