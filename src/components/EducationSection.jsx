import { useState } from 'react';
import InputField from './InputField';
import '../styles/form.css'

function EducationForm({hideForm, onSubmit}) {
  const [schoolName, setSchoolName] = useState('')
  const [degree, setDegree] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const changeSchoolName = (e) => {
    setSchoolName(e.target.value)
  }
  
  const changeDegree = (e) => {
    setDegree(e.target.value)
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

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(schoolName, degree, startDate, endDate, city, country)
      hideForm()
    }}>
      <InputField label='School / University Name' type='text' onChange={changeSchoolName}></InputField>
      <InputField label='Degree / Title of Study' type='text' onChange={changeDegree}></InputField>
      <InputField label='Start Date' type='text' onChange={changeStartDate}></InputField>
      <InputField label='End Date' type='text' onChange={changeEndDate}></InputField>
      <InputField label='City' type='text' onChange={changeCity}></InputField>
      <InputField label='Country' type='text' onChange={changeCountry}></InputField>
      <div className="btn-container">
        <button className='cancel-btn' onClick={hideForm}>Cancel</button>
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

function EducationSection({person, onSubmit}) {
  const [displayForm, setDisplayForm] = useState(false)

  const showForm = () => {
    setDisplayForm(true)
  }

  const hideForm = () => {
    setDisplayForm(false)
  }

  let content = <EducationList person={person}></EducationList>

  if (displayForm) {
    content = <EducationForm hideForm={hideForm} onSubmit={onSubmit}></EducationForm>
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