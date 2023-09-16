import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function EducationForm() {
  return (
    <form action="">
      <InputField label='School / University Name' type='text'></InputField>
      <InputField label='Degree / Title of Study' type='email'></InputField>
      <InputField label='Start Date' type='date'></InputField>
      <InputField label='End Date' type='date'></InputField>
      <button type="submit">Save</button>
    </form>
  )
}

function EducationSection() {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(true)
  }
  
  return (
    <section>
      <div className="form-header">
        <h2>Education</h2>
        <span className="material-symbols-outlined" onClick={handleExpand}>add</span>
      </div>
      {expanded ? <EducationForm></EducationForm> : ''}
    </section>
  )
}

export { EducationSection };