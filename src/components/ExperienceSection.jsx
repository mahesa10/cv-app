import { useState } from 'react';
import InputField from './InputField';
import { v4 as uuidv4 } from 'uuid';
import '../styles/form.css'

function ExperienceForm({handleCancel, onSubmit, data}) {
  const [companyName, setCompanyName] = useState(data.company)
  const [position, setPosition] = useState(data.position)
  const [startDate, setStartDate] = useState(data.startDate)
  const [endDate, setEndDate] = useState(data.endDate)
  const [city, setCity] = useState(data.city)
  const [country, setCountry] = useState(data.country)
  const [description, setDescription] = useState(data.description)
  const jobID = data.id

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
      onSubmit(jobID, companyName, position, startDate, endDate, city, country, description)
      handleCancel()
    }}>
      <InputField
      label='Company'
      type='text'
      onChange={changeCompanyName}
      required={true}
      value={companyName}>        
      </InputField>

      <InputField
      label='Position'
      type='text'
      onChange={changePosition}
      required={true}
      value={position}>        
      </InputField>

      <InputField
      label='Start Date'
      type='text'
      onChange={changeStartDate}
      required={true}
      value={startDate}>        
      </InputField>

      <InputField label='End Date' 
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

      <InputField label='Country' 
      type='text' 
      onChange={changeCountry} 
      required={true}
      value={country}>        
      </InputField>

      <InputField 
      label='Description' 
      type='textarea' 
      onChange={changeDescription}
      value={description}>        
      </InputField>

      <div className="btn-container">
        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
        <button className='submit-btn' type='submit'>Save</button>
      </div>
    </form>
  )
}

function ExperienceList({person, showForm, handleEdit, handleDelete}) {
  let content = null
  
  if (person.experience.length > 0) {
    content = (
      <>
        {person.experience.map(job => (
          <div className="experience-list" key={job.id}>
            <div className="experience-list-name">{job.company}</div>
            <span onClick={() => {
              handleEdit(job.id)
              showForm()
            }}
            className="material-symbols-outlined edit-btn">
            edit
            </span>
            <span onClick={() => handleDelete(job.id)} className="material-symbols-outlined delete-btn">delete</span>
          </div>
        ))}
      </>
    )
  }

  return content
}

function ExperienceSection({person, onSubmit, handleDelete}) {
  const [displayForm, setDisplayForm] = useState(false)
  const [jobID, setJobID] = useState('')
  const defaultData = {
    id: jobID,
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    city: '',
    country: '',
    description: ''
  }

  const [formData, setFormData] = useState(defaultData)

  const showForm = () => {
    setDisplayForm(true)
  }

  const hideForm = () => {
    setDisplayForm(false)
  }

  const displayDataOnForm = (jobID) => {
    const job = person.experience.find(job => job.id === jobID);
    setFormData(job)
  }

  let content = <ExperienceList person={person} showForm={showForm} handleEdit={displayDataOnForm} handleDelete={handleDelete}></ExperienceList>

  if (displayForm) {
    content = <ExperienceForm handleCancel={hideForm} onSubmit={onSubmit} data={formData}></ExperienceForm>
  }

  return (
    <section>
      <div className="form-header">
        <h2>Job Experience</h2>
        <span
        className="material-symbols-outlined"
        onClick={() => {
          setJobID(uuidv4())
          setFormData(defaultData)
          showForm()
        }}>
          add
        </span>
      </div>
      {content}
    </section>
  )
}

export { ExperienceSection };