import { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is a hard coded example note',
      date: '01/01/99'
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('my-notes-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my-notes-data', 
    JSON.stringify(notes));
  }, [notes]);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
        <Header 
          handleDarkMode={setDarkMode}/>
        <Search 
          handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => 
          note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={AddNote}
          handleDeleteNote={DeleteNote}
        />
      </div>
    </div>
    
  );
}

export default App;
