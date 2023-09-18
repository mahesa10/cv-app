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

function EducationList({person}) {
  let content = null
  
  if (person.education.length > 0) {
    content = (
      <>
        {person.education.map(school => (
          <div className="school-list" key={school.id}>
            <div className="school-list-name">{school.name}</div>
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

function EducationSection({person}) {
  const [displayForm, setDisplayForm] = useState(false)

  const showForm = () => {
    setDisplayForm(true)
  }

  const hideForm = () => {
    setDisplayForm(false)
  }

  let content = <EducationList person={person}></EducationList>

  if (displayForm) {
    content = <EducationForm handleCancel={hideForm}></EducationForm>
  }
  
  return (
    <section>
      <div className="form-header">
        <h2>Education</h2>
        <span className="material-symbols-outlined" onClick={showForm}>add</span>
      </div>
      {content}
    </section>
  )
}

export { EducationSection };