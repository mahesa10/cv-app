import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PersonalSection } from './PersonalSection'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'
import CVResult from './CVResult'
import '../styles/App.css'

function App() {
  const [person, setPerson] = useState(
    {
      fullName: 'John Doe',
      email: 'johndoe@gmail.com',
      phone: '+1 320 123 4567',
      address: 'Mountain View, CA',
      education: [
        {
          id: uuidv4(),
          name: 'Harvard University',
          degree: 'Bachelor of Engineering',
          startDate: 'Sep, 2016',
          endDate: 'Aug, 2020',
          city: 'Boston',
          country: 'USA'
        }
      ],
      experience: [
        {
          id: uuidv4(),
          company: 'Alphabet Inc',
          position: 'Senior Web Developer',
          startDate: 'Sep, 2020',
          endDate: '',
          city: 'Mountain View',
          country: 'USA',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus purus a dolor congue, nec finibus eros pulvinar. Praesent lobortis posuere tellus quis vulputate. Mauris mollis, lectus non eleifend sollicitudin, ipsum ante consectetur dui, nec feugiat risus nisl sit amet est.'
        }
      ]
    }
  )

  const handlePersonalSubmit = (fullName, email, phone, address) => {
    setPerson({...person, fullName, email, phone, address})
  }

  const handleEducationSubmit = (id, schoolName, degree, startDate, endDate = '', city, country ) => {
    const newSchool = {
      id,
      name: schoolName,
      degree,
      startDate,
      endDate,
      city,
      country
    }

    let schoolIndex = person.education.findIndex(school => school.id === id)
    let education = [...person.education]

    if (schoolIndex >= 0) {
      education[schoolIndex] = newSchool
    } else {
      education.push(newSchool)
    }

    setPerson({...person, education})
  }

  const handleExperienceSubmit = (id, companyName, position, startDate, endDate = '', city, country, description ) => {
    const newJob = {
      id,
      company: companyName,
      position,
      startDate,
      endDate,
      city,
      country,
      description
    }

    let jobIndex = person.experience.findIndex(job => job.id === id)
    let experience = [...person.experience]

    if (jobIndex >= 0) {
      experience[jobIndex] = newJob
    } else {
      experience.push(newJob)
    }

    setPerson({...person, experience})
  }

  const handleDeleteEducation = (schoolID) => {
    const schoolIndex = person.education.findIndex(school => school.id === schoolID)
    let education = [...person.education]
    education.splice(schoolIndex, 1)
    setPerson({...person, education})
  }

  const handleDeleteExperience = (jobID) => {
    const jobIndex = person.experience.findIndex(job => job.id === jobID)
    let experience = [...person.experience]
    experience.splice(jobIndex, 1)
    setPerson({...person, experience})
  }

  return (
    <div id='wrapper'>
      <div className='col input-section'>
        <section className='download-section'>
          <div>Save your CV as PDF</div>
          <button className='download-btn'><span className="material-symbols-outlined">download</span>Download</button>
        </section>
        <PersonalSection onSubmit={handlePersonalSubmit} person={person}></PersonalSection>
        <EducationSection onSubmit={handleEducationSubmit} person={person} handleDelete={handleDeleteEducation}></EducationSection>
        <ExperienceSection onSubmit={handleExperienceSubmit} person={person} handleDelete={handleDeleteExperience}></ExperienceSection>
      </div>
      <div className='col cv-container'>
        <CVResult person={person}></CVResult>
      </div>
    </div>
  )
}

export default App
