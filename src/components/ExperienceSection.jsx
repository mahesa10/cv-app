import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function ExperienceForm({handleCancel}) {
  return (
    <form action="">
      <InputField label='Company Name' type='text'></InputField>
      <InputField label='Title' type='email'></InputField>
      <InputField label='Start Date' type='date'></InputField>
      <InputField label='End Date' type='date'></InputField>
      <InputField label='City' type='text'></InputField>
      <InputField label='Country' type='text'></InputField>
      <InputField label='Description' type='textarea'></InputField>
      <div className="btn-container">
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        <button className='submit-btn' type='submit'>Save</button>
      </div>
    </form>
  )
}

function ExperienceList({person}) {
  let content = null
  
  if (person.experience.length > 0) {
    content = (
      <>
        {person.experience.map(work => (
          <div className="experience-list" key={work.id}>
            <div className="experience-list-name">{work.company}</div>
            <span class="material-symbols-outlined">
            edit
            </span>
          </div>
        ))}
      </>
    )
  }

  return content
}

function ExperienceSection({person}) {
  const [displayForm, setDisplayForm] = useState(false)

  const showForm = () => {
    setDisplayForm(true)
  }

  const hideForm = () => {
    setDisplayForm(false)
  }

  let content = <ExperienceList person={person}></ExperienceList>

  if (displayForm) {
    content = <ExperienceForm handleCancel={hideForm}></ExperienceForm>
  }

  return (
    <section>
      <div className="form-header">
        <h2>Work Experience</h2>
        <span className="material-symbols-outlined" onClick={showForm}>add</span>
      </div>
      {content}
    </section>
  )
}

export { ExperienceSection };