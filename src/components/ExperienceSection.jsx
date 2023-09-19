import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function ExperienceForm({handleCancel, onSubmit}) {
  const [companyName, setCompanyName] = useState('')
  const [position, setPosition] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [description, setDescription] = useState('')

  const changeCompanyName = (e) => {
    setCompanyName(e.target.value)
  }
  
  const changePosition = (e) => {
    setPosition(e.target.value)
  }

  const changeStartDate = (e) => {
    setStartDate(e.target.value)
  }

  const changeEndDate = (e) => {
    setEndDate(e.target.value)
  }

  const changeCity = (e) => {
    setCity(e.target.value)
  }

  const changeCountry = (e) => {
    setCountry(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(companyName, position, startDate, endDate, city, country, description)
      handleCancel()
    }}>
      <InputField label='Company Name' type='text' onChange={changeCompanyName}></InputField>
      <InputField label='Position' type='text' onChange={changePosition}></InputField>
      <InputField label='Start Date' type='text' onChange={changeStartDate}></InputField>
      <InputField label='End Date' type='text' onChange={changeEndDate}></InputField>
      <InputField label='City' type='text' onChange={changeCity}></InputField>
      <InputField label='Country' type='text' onChange={changeCountry}></InputField>
      <InputField label='Description' type='textarea' onChange={changeDescription}></InputField>
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
            <span className="material-symbols-outlined">
            edit
            </span>
          </div>
        ))}
      </>
    )
  }

  return content
}

function ExperienceSection({person, onSubmit}) {
  const [displayForm, setDisplayForm] = useState(false)

  const showForm = () => {
    setDisplayForm(true)
  }

  const hideForm = () => {
    setDisplayForm(false)
  }

  let content = <ExperienceList person={person}></ExperienceList>

  if (displayForm) {
    content = <ExperienceForm handleCancel={hideForm} onSubmit={onSubmit}></ExperienceForm>
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