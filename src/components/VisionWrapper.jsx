import React, {useState} from 'react'
import { VisionForm } from './VisionForm'
import {v4 as uuidv4} from 'uuid'
import { Vision } from './Vision'
import { EditVisionForm } from './EditVisionForm';
uuidv4()

export const VisionWrapper = () => {
    const [visions, setVisions] = useState([])

    const addVision = vision =>  {
        setVisions([...visions, {id: uuidv4(), description: vision, completed: false, isEditing: false}])
        console.log(visions)
    }
    const deleteVision = id => {
      setVisions(visions.filter(vision => vision.id !== id))

    }

    const editVision = id => {
      setVisions(visions.map(vision => vision.id === id ? {...vision, isEditing: !vision.isEditing} : vision))
    }

    const editDescription = (description, id) => {
      setVisions(visions.map(vision => vision.id === id ? {...vision,description, isEditing: !vision.isEditing} : vision))
    }
    
  return (
    <div className='VisionWrapper'>
        <h1>Vision</h1>
        <VisionForm addVision={addVision}/>
        {visions.map((vision, index) => (
            
          vision.isEditing ? (
            <EditVisionForm editVision={editDescription} description={vision}/>
           ) : (
            <Vision description={vision} key={vision.id} index={index} deleteVision={deleteVision} editVision={editVision}/>
            )))
            
        }
        <button type='submit'>Next</button>
    </div>
  )
}
