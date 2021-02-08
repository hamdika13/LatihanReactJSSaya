import React, { Component } from 'react';
// import Resume from '../Components/Resume'

class Base extends Component {
    render() {
        return (
            <div>
                {/* <h1>Alhamdulillah</h1> */}

  {/* Main Content
================================================== */}
  <section id="body" className>
    <div className="container">
      {/* MAIN MENU */}
      <div className="main-menu" id="main-menu">
        <ul className="main-menu-list">
          <li><a className="link-home">Home</a></li>
          <li><a>Resume</a></li>
          <li><a >Skills</a></li>
          <li><a >Portfolio</a></li>
          <li><a >Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      {/* /MAIN MENU */}


      {/* SECTION: vCard Body  */}	
      <div className="section-vcardbody section-home" id="section-home">
        {/* Profile pic*/}
        <div className="vcard-profile-pic">
          <img src="img/" id="profile2" alt />
          <img src="img/profile.jpg" id="profile1" className="profileActive" alt />
        </div>
        {/* /Profile pic */}
        {/* Description */}
        <div className="vcard-profile-description">
          {/* Profile title */}
          <h1 className="profile-title">Hi, i'm <span className="color1">Muhammad Mufti Hamdika!</span></h1>
          <h2 className="profile-subtitle">Web Designer &amp; Developer</h2>
          {/* /Profile Title */}
          {/* Description Text */}
          <hr className="hr1" />
          <div className="vcard-profile-description-text">
            <p>Founder of DotRex. Professional UI/UX designer and web developer based on Indonesia. Sometimes works as a freelancer.</p>
          </div>	
          {/*/ Description Text */}	
          {/* Description feature */}
          <div className="vcard-profile-description-feature">
            {/* item */}
            <div className="vcard-profile-description-ft-item">
              <p>email:  hamdikamufti10@gmail.com/ phone +62 821 6636 0396</p>
            </div>
            {/* item */}
          </div>	
          {/* /Description feature */}		
        </div>
        {/* /Description */}	
     
      </div>
      {/* /SECTION: vCard Body  */}	
     
      
      {/* SECTION: BLOG SINGLE*/}
      <div className="section-vcardbody section-page section-page-single" id="page-blog-single">
        <div className="section-blog-single">
          {/* Load the single.html content via AJAX */}
          <div id="postHere" />			
          {/* /Load the single.html content via AJAX */}
        </div>			
      </div>
      {/* /SECTION: BLOG SINGLE  */}
     
    </div>
  </section>
  {/* /Main Content
================================================== */}
  {/* Contact Form - Ajax Messages
========================================================= */}
  {/* Form Sucess */}
  <div className="form-result modal-wrap" id="contactSuccess">
    <div className="modal-bg" />
    <div className="modal-content">
      <h4 className="modal-title"><i className="fa fa-check-circle" /> Success!</h4>
      <p>Your message has been sent to us.</p>
    </div>
  </div>
  {/* /Form Sucess */}
  {/* form-error */}
  <div className="form-result modal-wrap" id="contactError">
    <div className="modal-bg" />
    <div className="modal-content">
      <h4 className="modal-title"><i className="fa fa-times" /> Error</h4>
      <p>There was an error sending your message.</p>
    </div>
  </div>

        </div>
 )


           
       
    }
}


export default Base;