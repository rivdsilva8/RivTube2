import React from 'react'
import "./AdvancedSearch.css"
export const AdvancedSearch = ({ onClose }) => {
  return (
<div className='overlay'>
      <div className='advanced-search-box'>
        <button className='close-button' onClick={onClose}>X</button>
        <h2>Advanced Search</h2>
        {/* Your form elements here */}
      </div>
    </div>
  )
}
