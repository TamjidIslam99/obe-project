import React, {useState} from 'react'

export const EditMissionForm = ({editMission, description}) => {
    const [value, setValue] = useState(description.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        editMission(value,description.id);
        setValue("")
    }

  return (
    <form className='MissionForm' onSubmit={handleSubmit}>
        <input type="text" className='form-input' placeholder='Update Mission' value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type='submit' className='form-btn'>Update description</button>
    </form>
  )
}