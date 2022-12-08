import React from "react";

const Toast = ({ label, toast_css }) => {
  return (
    <span style={{...toast_css}} className="toast">
      { label }
      <span>&times;</span>
     </span>
  )
}

export default Toast
