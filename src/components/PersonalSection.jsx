import { useState } from "react";
import InputField from "./InputField";
import '../styles/form.css';

function PersonalForm() {
  return (
    <form action="">
      <InputField label='Full Name' type='text'></InputField>
      <InputField label='Email' type='email'></InputField>
      <InputField label='Phone Number' type='tel'></InputField>
      <button type="submit">Save</button>
    </form>
  )
}

function PersonalSection() {
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
      {expanded ? <PersonalForm></PersonalForm> : ''}
    </section>
  )
}

export { PersonalSection };