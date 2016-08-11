var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')

class Edituser extends React.Component {

  onsignUp (e) {
    e.preventDefault()
    var editForm = document.querySelector('#editForm')
    var editData = serialize(editForm)
    console.log(editData)
    cofoundersApi.editMyStats(editData)
  }
  render () {
    return (
      <div>
        <p><br/></p>
          <div className="mui-container">
      <div className="mui-panel">
  <form id="editForm" onSubmit={this.onsignUp.bind(this)}>
  <legend>Edit Profile</legend>
  <div className="mui-textfield">
    <input type="text" name="expertise" required/>
    <label>Expertise</label>
  </div>
  <div className="mui-textfield">
    <textarea name="workexp" required></textarea>
    <label>Work Experience</label>
  </div>
  <div className="mui-textfield">
    <input type="text" name="skills" required/>
    <label>Skills</label>
  </div>
  <div className="mui-textfield">
    <input type="text" name="education" required/>
    <label>Education</label>
  </div>
  <div className="mui-select">
    <select name="age">
  <option>Below 20</option>
  <option>20-30</option>
  <option>31-50</option>
  <option>Above 50</option>
  </select>
<label>Age Group</label>
</div>
  <div className="mui-textfield">
    <input type="text" name="location" required/>
    <label>Location</label>
  </div>
  <div className="mui-textfield">
    <input type="text" name="partnerexpertise" required/>
    <label>Partner Expertise</label>
  </div>
  <div className="mui-textfield">
    <textarea name="partnerworkexp" required></textarea>
    <label>Partner Experience</label>
  </div>
  <div className="mui-textfield">
    <input type="text" name="partnerskills" required/>
    <label>Partner Skills</label>
  </div>
  <button type="submit" name="commit" value="Update" className="mui-btn mui-btn--raised">Update</button>
</form>
</div>
    </div>
      </div>


    )
  }
}

module.exports = Edituser
