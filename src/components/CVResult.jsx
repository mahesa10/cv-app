import '../styles/cv-result.css'

function CVResult() {
  return (
    <div className="cv-result">
      <div className="cv-header">
        <h2 className="full-name">John Doe</h2>
        <div className="person-info">
          Mountain View, CA | +1 302 123 4567 | johndoe@gmail.com
        </div>
        <div className="personal-web">linkedin.com/johndoe</div>
      </div>
      <div className="education-container">
        <h2>Education</h2>
        <hr />
        <div className="row">
          <div className="school-name">Harvard University</div>
          <div className="school-time">Sep, 2016 - Aug, 2020</div>
        </div>
        <div className="row">
          <div className="school-degree">Bachelor of Engineering</div>
          <div className="school-address">Boston, MA</div>
        </div>
      </div><div className="experience-container">
        <h2>Work Experience</h2>
        <hr />
        <div className="row">
          <div className="company-name">Alphabet Inc.</div>
          <div className="work-time">Sep, 2020 - present</div>
        </div>
        <div className="row">
          <div className="work-title">Senior Web Developer</div>
          <div className="work-address">Mountain View, CA</div>
        </div>
        <div className="work-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus purus a dolor congue, nec finibus eros pulvinar. Praesent lobortis posuere tellus quis vulputate. Mauris mollis, lectus non eleifend sollicitudin, ipsum ante consectetur dui, nec feugiat risus nisl sit amet est.
        </div>
      </div>
    </div>
  )
}

export default CVResult;