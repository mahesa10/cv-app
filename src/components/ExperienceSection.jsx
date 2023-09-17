import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function ExperienceForm({handleCancel}) {
  return (
    <form action="">
      <InputField label='Place of Work' type='text'></InputField>
      <InputField label='Title' type='email'></InputField>
      <InputField label='Start Date' type='date'></InputField>
      <InputField label='End Date' type='date'></InputField>
      <InputField label='Description' type='textarea'></InputField>
      <div className="btn-container">
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        <button className='submit-btn' type='submit'>Save</button>
      </div>
    </form>
  )
}

function ExperienceSection() {
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
        <h2>Work Experience</h2>
        <span className="material-symbols-outlined" onClick={handleExpand}>add</span>
      </div>
      {expanded ? <ExperienceForm handleCancel={handleCancel}></ExperienceForm> : null}
    </section>
  )
}

export { ExperienceSection };