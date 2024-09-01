import React from 'react';
import { MdSearch } from 'react-icons/md';


const Search = ({ handleSearchNote}) => {
  return (
    <div className='search'>
    <MdSearch className='search-icon' size='1.4rem'/>
        <input 
            type="text" 
            onChange={(e) => handleSearchNote(e.target.value)}
        />
    </div>
  )
}

export default Search;