import '../styles/cv-result.css'

function CVResult({person}) {
  let eduContent = null;
  let expContent = null;

  if (person.education.length > 0) {
    eduContent = (
      <div className="education-container">
        <h2>Education</h2>
        <hr />
        {person.education.map(school => (
          <div key={school.id} className='school-container'>
            <div className="row">
              <div className="school-name">{school.name}</div>
              <div className="school-time">{school.startDate} - {school.endDate === '' ? 'present' : school.endDate}</div>
            </div>
            <div className="row">
              <div className="school-degree">{school.degree}</div>
              <div className="school-address">{school.city}, {school.country}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (person.experience.length > 0) {
    expContent = (
      <div className="experience-container">
        <h2>Work Experience</h2>
        <hr />
        {person.experience.map(work => (
          <div key={work.id} className='work-container'>
            <div className="row">
              <div className="company-name">{work.company}</div>
              <div className="work-time">{work.startDate} - {work.endDate === '' ? 'present' : work.endDate}</div>
            </div>
            <div className="row">
              <div className="work-position">{work.position}</div>
              <div className="work-address">{work.city}, {work.country}</div>
            </div>
            <div className="work-description">{work.description}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="cv-result">
      <div className="cv-header">
        <h1 className="full-name">{person.fullName}</h1>
        <div className="person-info">
          {person.address} | {person.phone} | {person.email}
        </div>
      </div>
      {eduContent}
      {expContent}
    </div>
  )
}

export default CVResult;