import '../styles/input-field.css'

function InputField({label, type, onChange, value, placeholder, required = false}) {
  let input = <input type={type} onChange={onChange} value={value} placeholder={placeholder} />
  let textarea = <textarea rows='5' onChange={onChange} value={value} placeholder={placeholder}></textarea>

  if (required) {
    input = <input type={type} onChange={onChange} value={value} placeholder={placeholder} required/>
  }

  return (
    <label>
      <div className='label-container'>
        {label}
        {!required ? <span className='optional'>(optional)</span> : null}
      </div>
      {type === 'textarea' ? textarea : input}
    </label>
  )
}

export default InputField;