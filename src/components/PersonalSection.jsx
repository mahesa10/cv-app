import { useState } from "react";
import InputField from "./InputField";
import '../styles/form.css';

function PersonalForm({onSubmit, person}) {
  const [fullName, setFullName] = useState(person.fullName);
  const [email, setEmail] = useState(person.email);
  const [phone, setPhone] = useState(person.phone);
  const [address, setAddress] = useState(person.address);

  const changeFullName = (e) => {
    setFullName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePhone = (e) => {
    setPhone(e.target.value)
  }

  const changeAddress = (e) => {
    setAddress(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit(fullName, email, phone, address)
    }}>
      <InputField label='Full Name' type='text' onChange={changeFullName} value={fullName}></InputField>
      <InputField label='Email' type='email' onChange={changeEmail} value={email}></InputField>
      <InputField label='Phone Number' type='text' onChange={changePhone} value={phone}></InputField>
      <InputField label='Address' type='text' onChange={changeAddress} value={address}></InputField>
      <button className="submit-btn" type="submit">Save</button>
    </form>
  )
}

function PersonalSection({onSubmit, person}) {
  const [expanded, setExpanded] = useState(true);

  const handleDropdown = () => {
    setExpanded(current => !current);
  }

  return (
    <section>
      <div className="form-header">
        <h2>Personal Information</h2>
        <span
        className="material-symbols-outlined"
        onClick={handleDropdown}
        >
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      {expanded ? <PersonalForm onSubmit={onSubmit} person={person}></PersonalForm> : null}
    </section>
  )
}

export { PersonalSection };