import React, { useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search'

const App = () => {

  const [notes, setNotes] = useState([{
    id:nanoid(),
    text:'first note',
    date:'13/04/2023'
  },
  {
    id:nanoid(),
    text:'second note',
    date:'13/04/2023'
  },
  {
    id:nanoid(),
    text:'third note',
    date:'13/04/2023'
  },
  {
    id:nanoid(),
    text:'first note',
    date:'13/04/2023'
  },
  {
    id:nanoid(),
    text:'last note',
    date:'13/04/2023'
  }
])


const [searchText, setsearchText] = useState('')

function addNote(text){
  const date = new Date()
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes =[...notes,newNote]
  setNotes(newNotes)
}

const deleteNote= (id)=>{
  const newNotes = notes.filter((note)=>note.id!==id)
  setNotes(newNotes)

}


  return (
    <div className='container'>
      <Search  handleSearchNote={setsearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleClick={addNote} handleDeleteNote={deleteNote}/>

    </div>
  )
}

export default App