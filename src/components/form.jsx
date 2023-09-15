import '../styles/form.css'

function Form({title, children}) {
  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form action="">
        {children}
        {title === 'Personal Information' ? <button type="submit">Save</button> : ''}
      </form>
    </div>
  )
}

export default Form;