import React from 'react';
import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = e => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };

    const handleClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('');
        }
    };

  return (
    <div className='note new'>
        <textarea 
            placeholder='Add note here...'
            rows='8' 
            cols='10' 
            value={noteText}
            onChange={handleChange}
        />
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className='save-btn' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote;