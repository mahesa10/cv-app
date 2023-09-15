import { useState } from 'react'
import '../styles/App.css'
import Form from './form'
import CVResult from './cv-result'
import InputField from './input-field'

function App() {
  return (
    <div id='wrapper'>
      <div className='col input-section'>
        <Form title='Personal Information'>
          <InputField label='Full Name' type='text'></InputField>
          <InputField label='Email' type='email'></InputField>
          <InputField label='Phone Number' type='tel'></InputField>
        </Form>
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
