import { useState } from 'react';
import InputField from './InputField';
import { v4 as uuidv4 } from 'uuid';
import '../styles/form.css'

function EducationForm({hideForm, onSubmit, data}) {
  const [schoolName, setSchoolName] = useState(data.name)
  const [degree, setDegree] = useState(data.degree)
  const [startDate, setStartDate] = useState(data.startDate)
  const [endDate, setEndDate] = useState(data.endDate)
  const [city, setCity] = useState(data.city)
  const [country, setCountry] = useState(data.country)
  const schoolID = data.id

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
      onSubmit(schoolID, schoolName, degree, startDate, endDate, city, country)
      hideForm()
    }}>
      <InputField
      label='School / University'
      type='text'
      onChange={changeSchoolName}
      required={true}
      value={schoolName}>
      </InputField>

      <InputField
      label='Degree / Title of Study'
      type='text'
      onChange={changeDegree}
      required={true}
      value={degree}>
      </InputField>

      <InputField
      label='Start Date'
      type='text'
      onChange={changeStartDate}
      required={true}
      value={startDate}>
      </InputField>

      <InputField
      label='End Date'
      type='text'
      onChange={changeEndDate}
      value={endDate}>
      </InputField>

      <InputField
      label='City'
      type='text'
      onChange={changeCity}
      required={true}
      value={city}>
      </InputField>

      <InputField
      label='Country'
      type='text'
      onChange={changeCountry}
      required={true}
      value={country}>
      </InputField>

      <div className="btn-container">
        <button className='cancel-btn' onClick={hideForm}>Cancel</button>
        <button className='submit-btn' type='submit'>Save</button>
      </div>
    </form>
  )
}

function EducationList({person, showForm, handleEdit, handleDelete}) {
  let content = null
  
  if (person.education.length > 0) {
    content = (
      <>
        {person.education.map(school => (
          <div className="school-list" key={school.id}>
            <div className="school-list-name">{school.name}</div>
            <span onClick={() => {
              handleEdit(school.id)
              showForm()
            }} className="material-symbols-outlined edit-btn">
              edit
            </span>
            <span onClick={() => handleDelete(school.id)} className="material-symbols-outlined delete-btn">delete</span>
          </div>
        ))}
      </>
    )
  }

  return content
}

function EducationSection({person, onSubmit, handleDelete}) {  
  const [displayForm, setDisplayForm] = useState(false)
  const [schoolID, setSchoolID] = useState('')
  const defaultData = {
    id: schoolID,
    name: '',
    degree: '',
    startDate: '',
    endDate: '',
    city: '',
    country: ''
  }
  const [formData, setFormData] = useState(defaultData)

  const showForm = () => {
    setDisplayForm(true)
  }

  const hideForm = () => {
    setDisplayForm(false)
  }

  const displayDataOnForm = (schoolId) => {
    const school = person.education.find(school => school.id === schoolId);
    setFormData(school)
  }

  let content = <EducationList person={person} showForm={showForm} handleEdit={displayDataOnForm} handleDelete={handleDelete}></EducationList>

  if (displayForm) {
    content = <EducationForm hideForm={hideForm} onSubmit={onSubmit} data={formData}></EducationForm>
  }
  
  return (
    <section className="form-section">
      <div className="form-header">
        <h2>Education</h2>
        <span className="material-symbols-outlined" onClick={() => {
          setSchoolID(uuidv4())
          setFormData(defaultData)
          showForm()
        }}>add</span>
      </div>
      {content}
    </section>
  )
}

export { EducationSection };