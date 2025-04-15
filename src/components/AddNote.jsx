import React, { useState } from 'react'

const AddNote = ({handleClick}) => {
  const [text, settext] = useState('')
  const characterLimit = 200
  function handleChange(e){
    if(characterLimit-e.target.value.length>=0){
      settext(e.target.value)
    }
  }

  function handleSaveClick(){
    if(text.trim().length>0){
      handleClick(text)
      settext('')
    }
     
  }
  return (
    <div className='note new'>

      <textarea rows={8} cols={10} placeholder='type to add a note...' value={text} onChange={handleChange}></textarea>
      <div className='note-footer'>
        <small>{characterLimit-text.length} remaining</small>
        <button onClick={handleSaveClick} className='save'>Save</button>
      </div>
    </div>
  )
}

export default AddNote