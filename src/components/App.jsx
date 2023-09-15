import { useState } from 'react'
import '../styles/App.css'
import { PersonalSection } from './PersonalSection'
import CVResult from './CVResult'
import { EducationSection } from './EducationSection'
import { ExperienceSection } from './ExperienceSection'

function App() {
  return (
    <div id='wrapper'>
      <div className='col input-section'>
        <PersonalSection></PersonalSection>
        <EducationSection></EducationSection>
        <ExperienceSection></ExperienceSection>
      </div>
      <div className='col'>
        <CVResult></CVResult>
      </div>
    </div>
  )
}

export default App
