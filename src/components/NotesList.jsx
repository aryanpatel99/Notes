import React from 'react'
import Note  from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleClick, handleDeleteNote }) => {
  return (
    <div className='notes-list'>
        {notes.map((note,index)=>(
          <Note key={index} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} id={note.id}/>
        ))}
        <AddNote  handleClick={handleClick} />
    </div>
  )
}

export default NotesList