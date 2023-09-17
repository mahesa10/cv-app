import '../styles/input-field.css'

function InputField({label, type}) {
  return (
    <label>
      {label}
      {type === 'textarea' ? <textarea rows='5'></textarea> : <input type={type} />}
    </label>
  )
}

export default InputField;