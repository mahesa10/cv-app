import '../styles/input-field.css'

function InputField({label, type}) {
  return (
    <label>
      {label}
      <input type={type} />
    </label>
  )
}

export default InputField;