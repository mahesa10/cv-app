import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function ExperienceForm() {
  return (
    <form action="">
      <InputField label='Place of Work' type='text'></InputField>
      <InputField label='Title' type='email'></InputField>
      <InputField label='Start Date' type='date'></InputField>
      <InputField label='End Date' type='date'></InputField>
      <button type="submit">Save</button>
    </form>
  )
}

function ExperienceSection() {
  const [expanded, setExpanded] = useState(false)

  const handleExpand = () => {
    setExpanded(true)
  }

  return (
    <section>
      <div className="form-header">
        <h2>Work Experience</h2>
        <span className="material-symbols-outlined" onClick={handleExpand}>add</span>
      </div>
      {expanded ? <ExperienceForm></ExperienceForm> : ''}
    </section>
  )
}

export { ExperienceSection };