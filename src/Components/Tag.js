import React from "react";

const Tag = ({ button, onClick }) => {

  return (
     <span
       style={{ ...button.css }}
       className="button"
       onClick={onClick}
       id={button.label}
     >
       <svg style={{ height: "20px", width: "auto", paddingTop:'2px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
       </svg>
       {button.label}
     </span>
  )
}

export default Tag
