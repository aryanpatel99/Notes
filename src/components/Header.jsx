import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h1>Notes</h1>
        <button onClick={()=>handleToggleDarkMode((prevDarkMode)=>!prevDarkMode)} className='header-btn'>Toggle Mode</button>
        </div>
    </div>
  )
}

export default Header