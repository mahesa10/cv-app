import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function EducationForm({handleCancel}) {
  return (
    <form action="">
      <InputField label='School / University Name' type='text'></InputField>
      <InputField label='Degree / Title of Study' type='email'></InputField>
      <InputField label='Start Date' type='date'></InputField>
      <InputField label='End Date' type='date'></InputField>
      <InputField label='City' type='text'></InputField>
      <InputField label='Country' type='text'></InputField>
      <div className="btn-container">
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        <button className='submit-btn' type='submit'>Save</button>
      </div>
    </form>
  )
}

function EducationSection() {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(true)
  }

  const handleCancel = () => {
    setExpanded(false)
  }
  
  return (
    <section>
      <div className="form-header">
        <h2>Education</h2>
        <span className="material-symbols-outlined" onClick={handleExpand}>add</span>
      </div>
      {expanded ? <EducationForm handleCancel={handleCancel}></EducationForm> : null}
    </section>
  )
}

export { EducationSection };