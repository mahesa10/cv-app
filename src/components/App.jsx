import { useState } from 'react'
import '../styles/App.css'
import Form from './form'
import CVResult from './cv-result'

function App() {
  return (
    <div id='wrapper'>
      <div className='col input-section'>
        <Form title='Personal Information'></Form>
        <Form title='Education'></Form>
        <Form title='Work Experiences'></Form>
      </div>
      <div className='col'>
        <CVResult></CVResult>
      </div>
    </div>
  )
}

export default App
