import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../styles/App.css'
import { PersonalSection } from './PersonalSection'
import CVResult from './CVResult'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'

const person = {
  fullName: 'John Doe',
  email: 'johndoe@gmail.com',
  phone: '+621234567890',
  education: [
    {
      id: uuidv4(),
      school: 'Harvard University',
      degree: 'Bachelor of Science',
      startDate: '09/2016',
      endDate: '08/2020'
    }
  ],
  experience: [
    {
      id: uuidv4(),
      workPlace: 'Alphabet Inc',
      position: 'Senior Web Developer',
      startDate: '09/2020',
      endDate: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus purus a dolor congue, nec finibus eros pulvinar. Praesent lobortis posuere tellus quis vulputate. Mauris mollis, lectus non eleifend sollicitudin, ipsum ante consectetur dui, nec feugiat risus nisl sit amet est.'
    }
  ]
}

function App() {
  return (
    <div id='wrapper'>
      <div className='col input-section'>
        <PersonalSection></PersonalSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div className='col cv-container'>
        <CVResult></CVResult>
      </div>
    </div>
  )
}

export default App
