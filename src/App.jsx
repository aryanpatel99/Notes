import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'

const App = () => {

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem('react-notes-app-data')
      return saved ? JSON.parse(saved) : [{
    id:nanoid(),
    text:'My First Note',
    date:'DD/MM/YYYY'
  }
]
    } catch (e) {
      console.error('Failed to parse notes from localStorage', e)
      return [{
        id:nanoid(),
        text:'My First Note',
        date:'DD/MM/YYYY'
      }
    ]
    }
  })


const [searchText, setsearchText] = useState('')

const [darkMode, setdarkMode] = useState(false )

useEffect(()=>{
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNotes){
    setNotes(savedNotes)
  }
},[])



useEffect(()=>{
localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
},[notes])

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

    <div className={darkMode && 'dark-mode'}>

      <div className='container'>
      <Header handleToggleDarkMode={setdarkMode}/>
      <Search  handleSearchNote={setsearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleClick={addNote} handleDeleteNote={deleteNote}/>
    </div>

    </div>
    
  )
}

export default App