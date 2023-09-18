import '../styles/input-field.css'

function InputField({label, type, onChange, value}) {
  return (
    <label>
      {label}
      {type === 'textarea' ? <textarea rows='5' onChange={onChange} value={value}></textarea> : <input type={type} onChange={onChange} value={value} />}
    </label>
  )
}

export default InputField;