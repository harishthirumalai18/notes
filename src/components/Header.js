import React from 'react';

const Header = ({ handleDarkMode }) => {
  return (
    <div className='header'>
        <h1>Notes App</h1>
        <button
            onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
        >Dark Mode</button>
    </div>
  )
}

export default Header;