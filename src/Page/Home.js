import React, { Component } from 'react';



class Home extends Component {
    render() {
        return (
            <div>
           
                <div>
 
  <div className="loader-container" id="page-loader"> 
    <div className="loading-wrapper">
      <div className="loader-animation" id="loader-animation">
        <span className="loader"><span className="loader-inner" /></span>
      </div>    
      {/* Edit With Your Name */}
      <div className="loader-name" id="loader-name">
        John <strong>Rex</strong>
      </div>
      {/* /Edit With Your Name */}
      {/* Edit With Your Job */}
      <p className="loader-job" id="loader-job">Web Designer &amp; Web Developer</p>
      {/* /Edit With Your Job */}
    </div>   
  </div>
  {/* /End of Page loader
========================================================= */}
  {/* Main Content
================================================== */}
  <section id="body" className>
    <div className="container">
      {/* MAIN MENU */}
      <div className="main-menu" id="main-menu">
        <ul className="main-menu-list">
          <li><a href="#page-resume" className="link-home">Home</a></li>
          <li><a href="#page-resume" className="link-page">Resume</a></li>
          <li><a href="#page-skills" className="link-page">Skills</a></li>
          <li><a href="#page-portfolio" className="link-page">Portfolio</a></li>
          <li><a href="#page-blog" className="link-page">Blog</a></li>
          <li><a href="#page-contact" className="link-page">Contact</a></li>
        </ul>
      </div>
    
      {/* PAGE: RESUME */}
      <div className="section-vcardbody section-page" id="page-resume">
        {/* SECTION: Education */}
        <div className="section-education">
          {/* Section title */}
          <h2 className="section-title">Resume</h2>
          {/* /Section title */}
          {/* Buttons */}
          <div className="resume-buttons header-page-buttons">
            {/* Download CV button */}
            <a href="#" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
            {/* /Download CV button */}
            {/* Get in Touch button */}
            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
            {/* /Get in Touch button */}
          </div>
          {/* /Buttons */}
          <h2 className="section-title2"><i className="fa fa-university" />&nbsp; Education</h2>
          {/* Resume Item */}
          <div className="resume-item">
            {/* Graduation title */}
            <h3 className="section-item-title-1">Graphic Design</h3>
            {/* /Graduation title */}
            {/* Graduation time */}
            <h4 className="graduation-time">St. Patrick University (2 Years Course) - <span className="graduation-date">Graduation May 2013</span></h4>
            {/* /Graduation time */}
            {/* content */}
            <div className="graduation-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* /Content */}
          </div>
          {/* /Resume Item */}
          {/* Resume Item */}
          <div className="resume-item">
            {/* Graduation title */}
            <h3 className="section-item-title-1">Master of Web Design</h3>
            {/* /Graduation title */}
            {/* Graduation time */}
            <h4 className="graduation-time">St. Patrick University (2 Years Course) - Graduation May 2013</h4>
            {/* /Graduation time */}
            {/* content */}
            <div className="graduation-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* /Content */}
          </div>
          {/* /Resume Item */}
        </div>
        {/*/ SECTION: Education */}
        {/* SECTION: WORK EXPERIENCE */}
        <div className="section-education">
          <h2 className="section-title2"><i className="fa fa-flag" />&nbsp; Work Experience</h2>
          {/* Resume Item */}
          <div className="resume-item">
            {/* Work Place */}
            <h3 className="section-item-title-1">DotRex Co.</h3>
            {/* /Work Place */}
            {/* Job Time */}
            <h4 className="job">Lead Designer - <span className="job-date">June 2012 - Current</span></h4>
            {/* /Job Time*/}
            {/* content */}
            <div className="graduation-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* /Content */}
          </div>
          {/* /Resume Item */}
          {/* Resume Item */}
          <div className="resume-item">
            {/* Work Place */}
            <h3 className="section-item-title-1">Oasis Ltda.</h3>
            {/* /Work Place */}
            {/* Job Time */}
            <h4 className="job">Front-end Developer - <span className="job-date">Jan 2010 - Apr 2012</span></h4>
            {/* /Job Time*/}
            {/* content */}
            <div className="graduation-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* /Content */}
          </div>
          {/* /Resume Item */}
          {/* Resume Item */}
          <div className="resume-item">
            {/* Work Place */}
            <h3 className="section-item-title-1">Dupstudio</h3>
            {/* /Work Place */}
            {/* Job Time */}
            <h4 className="job">Designer - <span className="job-date">Jan 2010 - Apr 2012</span></h4>
            {/* /Job Time*/}
            {/* content */}
            <div className="graduation-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* /Content */}
          </div>
          {/* /Resume Item */}
          {/* Resume Item */}
          <div className="resume-item">
            {/* Work Place */}
            <h3 className="section-item-title-1">Black Tie Corp.</h3>
            {/* /Work Place */}
            {/* Job Time */}
            <h4 className="job">Web Designer - <span className="job-date">Jan 2010 - Apr 2012</span></h4>
            {/* /Job Time*/}
            {/* content */}
            <div className="graduation-description">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* /Content */}
          </div>
          {/* /Resume Item */}
        </div>
        {/*/ SECTION: WORK EXPERIENCE */}
        <h2 className="section-title2"><i className="fa fa-commenting" />&nbsp; Testimonials</h2>
        {/* Testimonials */}
        <div className="testimonials">
          {/* Testimonial Slides */}
          <div className="testimonial-slides" id="testimonial-carousel">
            {/* item */}
            <div className="testimonial-item">
              {/* Testimonial Content */}
              <div className="testimonial-content">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
              </div>						
              {/* /Testimonial Content */}	
              {/* Testimonial Author */}
              <div className="testimonial-credits">
                {/* picture */}
                <div className="testimonial-picture">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.6nPqPTl9BU0SVq6PBf8VywHaEQ&pid=Api&P=0&w=295&h=170" alt />
                </div>							
                {/* /picture */}
                <p className="testimonial-author">Steve Jobs</p>
                <p className="testimonial-firm">Apple</p>
              </div>
              {/* /Testimonial Author */}								
            </div>
            {/* /item */}
            {/* item */}
            <div className="testimonial-item">
              {/* Testimonial Content */}
              <div className="testimonial-content">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
              </div>						
              {/* /Testimonial Content */}	
              {/* Testimonial Author */}
              <div className="testimonial-credits">
                {/* picture */}
                <div className="testimonial-picture">
                  <img src="https://tse2.mm.bing.net/th?id=OIP.fketJRoxSTIJLwr-k-Yk0AHaEK&pid=Api&P=0&w=269&h=152" alt />
                </div>							
                {/* /picture */}
                <p className="testimonial-author">BillGates</p>
                <p className="testimonial-firm">Microsoft</p>
              </div>
              {/* /Testimonial Author */}								
            </div>
            {/* /item */}
            {/* item */}
            <div className="testimonial-item">
              {/* Testimonial Content */}
              <div className="testimonial-content">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat malesuada aliquet. Morbi vulputate nisl eget adipiscing consequat. Cras arcu tortor, ornare vel libero et, sagittis adipiscing leo. Aenean eget."</p>
              </div>						
              {/* /Testimonial Content */}	
              {/* Testimonial Author */}
              <div className="testimonial-credits">
                {/* picture */}
                <div className="testimonial-picture">
                  <img src="img/team3.jpg" alt />
                </div>							
                {/* /picture */}
                <p className="testimonial-author">Jhonathan Smith</p>
                <p className="testimonial-firm">RedWings Co.</p>
              </div>
              {/* /Testimonial Author */}								
            </div>
            {/* /item */}
          </div>
          {/* Testimonial Slides */}
        </div>
        {/* /testimonials */}
        <div className="page-footer">
          {/* Buttons */}
          <div className="resume-buttons">
            {/* Download CV button */}
            <a href="#" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
            {/* /Download CV button */}
            {/* Get in Touch button */}
            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
            {/* /Get in Touch button */}
          </div>
          {/* /Buttons */}
          {/* Quote */}
          <p className="footer-quote">"The best way to predict the future is to create it" <br /><i>Peter Drucker</i></p>
          {/* /Quote */}
        </div>			
      </div>
      {/* /PAGE: RESUME  */}	
      {/* SECTION: SKILLS*/}
      <div className="section-vcardbody section-page" id="page-skills">
        <div className="section-skills">
          {/* Section title */}
          <h2 className="section-title">SKILLS</h2>
          {/* /Section title */}
          {/* Subtitle */}
          <h3 className="section-item-title-2"><i className="fa fa-users" />&nbsp;&nbsp; Professional Skills</h3>
          {/* /Subtitle */}
          {/* Skils List */}
          <ul className="skills-list">
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-percent="70%" style={{width: '70%'}}>
                  <span className="sr-only">70% Complete</span>
                </div>
                <span className="progress-type">Comunication</span>
                <span className="progress-completed">70%</span>
              </div>
            </li>
            {/* /item list */}
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar progress-bar-2" role="progressbar" data-percent="85%" style={{width: '85%'}}>
                  <span className="sr-only">85% Complete</span>
                </div>
                <span className="progress-type">Leadership</span>
                <span className="progress-completed">85%</span>
              </div>
            </li>
            {/* /item list */}
            {/* item-list */}
            <li>
              <div className="progress" title="Doing my best!">
                <div className="progress-bar progress-bar-3" role="progressbar" data-percent="85%" style={{width: '85%'}}>
                  <span className="sr-only">85% Complete</span>
                </div>
                <span className="progress-type">Confidence</span>
                <span className="progress-completed">85%</span>
              </div>
            </li>
            {/* /item list */}
          </ul>
          {/* /Skils List */}
          {/* Subtitle */}
          <h3 className="section-item-title-2"><i className="fa fa-laptop" />&nbsp;&nbsp; Software Skills</h3>
          {/* /Subtitle */}
          {/* Skils List */}
          <ul className="skills-list">
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar" data-percent="85%" role="progressbar" style={{width: '85%'}}>
                  <span className="sr-only">85% Complete</span>
                </div>
                <span className="progress-type">Adobe Photoshop</span>
                <span className="progress-completed">85%</span>
              </div>
            </li>
            {/* /item list */}
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar progress-bar-2" data-percent="85%" role="progressbar" style={{width: '85%'}}>
                  <span className="sr-only">85% Complete</span>
                </div>
                <span className="progress-type">Adobe Illustrator</span>
                <span className="progress-completed">85%</span>
              </div>
            </li>
            {/* /item list */}
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style={{width: '40%'}}>
                  <span className="sr-only">40% Complete</span>
                </div>
                <span className="progress-type">Adobe Fireworks</span>
                <span className="progress-completed">40%</span>
              </div>
            </li>
            {/* /item list */}
          </ul>
          {/* /Skils List */}
          {/* Subtitle */}
          <h3 className="section-item-title-2"><i className="fa fa-code" />&nbsp;&nbsp; Code Skills</h3>
          {/* /Subtitle */}
          {/* Skils List */}
          <ul className="skills-list">
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar" data-percent="80%" role="progressbar" style={{width: '80%'}}>
                  <span className="sr-only">80% Complete</span>
                </div>
                <span className="progress-type">HTML5 / CSS3</span>
                <span className="progress-completed">80%</span>
              </div>
            </li>
            {/* /item list */}
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style={{width: '60%'}}>
                  <span className="sr-only">60% Complete</span>
                </div>
                <span className="progress-type">Javascript</span>
                <span className="progress-completed">60%</span>
              </div>
            </li>
            {/* /item list */}
            {/* item-list */}
            <li>
              <div className="progress">
                <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style={{width: '40%'}}>
                  <span className="sr-only">40% Complete</span>
                </div>
                <span className="progress-type">PHP</span>
                <span className="progress-completed">40%</span>
              </div>
            </li>
            {/* /item list */}
          </ul>
          {/* /Skils List */}
        </div>			
      </div>
      {/* /SECTION: SKILLS  */}	
      {/* SECTION: PORTFOLIO*/}
      <div className="section-vcardbody section-page" id="page-portfolio">
        <div className="section-portfolio">
          {/* Section title */}
          <h2 className="section-title">Portfolio</h2>
          {/* /Section title */}
          {/* Projects list */}
          <div className="projects-list">
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p1.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p1.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p2.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p2.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p3.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p3.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p4.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p4.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p5.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p5.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p6.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p6.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p7.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p7.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p8.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p8.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
            {/* item */}
            <div className="project-item">
              {/* ==> Put your thumbnail as a background */}
              <a href="img/portfolio/p9.jpg" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{backgroundImage: 'url("img/portfolio/thumb-p9.jpg")'}}>
                {/* project-description */}
                <div className="project-description-wrapper">
                  <div className="project-description">
                    {/* project name */}
                    <h2 className="project-title">Project Title</h2>
                    {/* /project name */}
                    <span className="see-more">Project Tags</span>
                  </div>
                </div>
                {/* /project-description */}
              </a>
            </div>			
            {/* /item */}
          </div>
          {/* /projects list */}	
        </div>			
      </div>
      {/* /SECTION: PORTFOLIO  */}	
      {/* SECTION: BLOG*/}
      <div className="section-vcardbody section-page" id="page-blog">
        <div className="section-blog">
          {/* Section title */}
          <h2 className="section-title">Blog</h2>
          {/* /Section title */}          
          {/* BLOG POSTS */}
          <div className="blog-posts">
            {/* blog-item */}
            <div className="blog-item">
              <div className="blog-item-wrapper">
                {/* blog item thumbnail */}
                <div className="blog-item-thumb">
                  <a href="single.html" className="loadPost"><img src="img/blog1.jpg" alt /></a>
                </div>
                {/* /blog item thumbnail */}
                {/* Blog item - infos */}
                <div className="blog-item-infos">
                  {/* blog-item-title */}
                  <div className="blog-item-title-wrapper">
                    <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">How to succeed in meetings</a></h2>
                  </div>
                  {/* /blog-item-title */}
                  {/* blog item - description */}
                  <div className="blog-item-description">
                    <p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                  </div>
                  {/* /blog-item-description */}
                  {/* blog item - link */}
                  <div className="blog-item-link">
                    <a href="single.html" className="btn btn-default loadPost">See More</a>
                  </div>
                  {/* /blog item - link */}
                </div>
                {/* /blog item - infos */}
              </div>
            </div>
            {/* /blog-item */}
            {/* blog-item */}
            <div className="blog-item">
              <div className="blog-item-wrapper">
                {/* blog item thumbnail */}
                <div className="blog-item-thumb">
                  <a href="single.html" className="loadPost"><img src="img/blog2.jpg" alt /></a>
                </div>
                {/* /blog item thumbnail */}
                {/* Blog item - infos */}
                <div className="blog-item-infos">
                  {/* blog-item-title */}
                  <div className="blog-item-title-wrapper">
                    <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">10 tips to improve your laptop</a></h2>
                  </div>
                  {/* /blog-item-title */}
                  {/* blog item - description */}
                  <div className="blog-item-description">
                    <p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                  </div>
                  {/* /blog-item-description */}
                  {/* blog item - link */}
                  <div className="blog-item-link">
                    <a href="single.html" className="btn btn-default loadPost">See More</a>
                  </div>
                  {/* /blog item - link */}
                </div>
                {/* /blog item - infos */}
              </div>
            </div>
            {/* /blog-item */}
            {/* blog-item */}
            <div className="blog-item">
              <div className="blog-item-wrapper">
                {/* blog item thumbnail */}
                <div className="blog-item-thumb">
                  <a href="single.html" className="loadPost"><img src="img/blog3.jpg" alt /></a>
                </div>
                {/* /blog item thumbnail */}
                {/* Blog item - infos */}
                <div className="blog-item-infos">
                  {/* blog-item-title */}
                  <div className="blog-item-title-wrapper">
                    <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">News of the week</a></h2>
                  </div>
                  {/* /blog-item-title */}
                  {/* blog item - description */}
                  <div className="blog-item-description">
                    <p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                  </div>
                  {/* /blog-item-description */}
                  {/* blog item - link */}
                  <div className="blog-item-link">
                    <a href="single.html" className="btn btn-default loadPost">See More</a>
                  </div>
                  {/* /blog item - link */}
                </div>
                {/* /blog item - infos */}
              </div>
            </div>
            {/* /blog-item */}
            {/* blog-item */}
            <div className="blog-item">
              <div className="blog-item-wrapper">
                {/* blog item thumbnail */}
                <div className="blog-item-thumb">
                  <a href="single.html" className="loadPost"><img src="img/blog4.jpg" alt /></a>
                </div>
                {/* /blog item thumbnail */}
                {/* Blog item - infos */}
                <div className="blog-item-infos">
                  {/* blog-item-title */}
                  <div className="blog-item-title-wrapper">
                    <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">How to be a leader</a></h2>
                  </div>
                  {/* /blog-item-title */}
                  {/* blog item - description */}
                  <div className="blog-item-description">
                    <p><a href="single.html" className="loadPost">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales varius sagittis. Proin a arcu vitae turpis congue facilisis. Quisque a lectus pretium, sagittis augue in, fringilla risus....</a></p>
                  </div>
                  {/* /blog-item-description */}
                  {/* blog item - link */}
                  <div className="blog-item-link">
                    <a href="single.html" className="btn btn-default loadPost">See More</a>
                  </div>
                  {/* /blog item - link */}
                </div>
                {/* /blog item - infos */}
              </div>
            </div>
            {/* /blog-item */}
            {/* blog-item */}
            <div className="blog-item">
              <div className="blog-item-wrapper">
                {/* blog item thumbnail */}
                <div className="blog-item-thumb">
                  <a href="single.html" className="loadPost"><img src="img/blog5.jpg" alt /></a>
                </div>
                {/* /blog item thumbnail */}
                {/* Blog item - infos */}
                <div className="blog-item-infos">
                  {/* blog-item-title */}
                  <div className="blog-item-title-wrapper">
                    <h2 className="blog-item-title title-border"><a href="single.html" className="loadPost">Tips to talk in public</a></h2>
                  </div>
                  {/* /blog-item-title */}
                  {/* blog item - description */}
                  <div className="blog-item-description">
                    <p><a href="single.html" className="loadPost">Designed by Norway-based practice Snhetta, in collaboration with local firm EHDD, the 10-story concrete structure will compliment SFMOMA’s original...</a></p>
                  </div>
                  {/* /blog-item-description */}
                  {/* blog item - link */}
                  <div className="blog-item-link">
                    <a href="single.html" className="btn btn-default loadPost">See More</a>
                  </div>
                  {/* /blog item - link */}
                </div>
                {/* /blog item - infos */}
              </div>
            </div>
            {/* /blog-item */}
          </div>
          {/* /BLOG POSTS */}
          {/* Pagination */}
          <div className="section-pagination">
            <div className="row">
              <div className="col-xs-12">
                <span className="pagination-numbers">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                </span>
              </div>
            </div>								
          </div>
          {/* /Pagination */}
        </div>			
      </div>
      {/* /SECTION: BLOG  */}	
      {/* SECTION: BLOG SINGLE*/}
      <div className="section-vcardbody section-page section-page-single" id="page-blog-single">
        <div className="section-blog-single">
          {/* Load the single.html content via AJAX */}
          <div id="postHere" />			
          {/* /Load the single.html content via AJAX */}
        </div>			
      </div>
      {/* /SECTION: BLOG SINGLE  */}
      {/* SECTION: CONTACT*/}
      <div className="section-vcardbody section-page" id="page-contact">
        <div className="section-contact">
          {/* Section title */}
          <h2 className="section-title">Contact</h2>
          {/* /Section title */}
          <div className="map">
            <div className="map-overlay" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8352.985568651915!2d-0.12905994797222892!3d51.50665753790812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1spt-BR!2sbr!4v1443128181953" height={250} style={{border: 0}} allowFullScreen />
          </div>
          {/* Contact infos */}                 
          <div className="contact-infos">
            <h4 className="contact-subtitle-1"><i className="fa fa-map" />&nbsp;   Address</h4>
            <p>451 Lorem Ipsum, London - Uk</p>
            <h4 className="contact-subtitle-1"><i className="fa fa-phone-square" />&nbsp; Phone</h4>
            <p>+61 3 8376 6284</p>
            <h4 className="contact-subtitle-1"><i className="fa fa-envelope" />&nbsp; Mail</h4>
            <p>john.Rex@dotrex.com</p>
          </div>
          {/* /Contact infos */} 
          {/* Contact form */}
          <h4 className="contact-subtitle-1"><i className="fa fa-paper-plane-o" />&nbsp; Send Me a Message</h4>
          <form id="contactForm" method="post" className="form">
            {/* Form Field */}
            <div className="form-group">
              <input className="form-control required" id="name" name="name" placeholder="Name" type="text" required />
            </div>
            {/* /Form Field */}
            {/* Form Field */}
            <div className="form-group">
              <input className="form-control required" id="email" name="email" placeholder="Email" type="email" required />
            </div>
            {/* /Form Field */}
            {/* Form Field */}
            <div className="form-group">
              <input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required />
            </div>
            {/* /Form Field */}
            {/* Form Field */}
            <div className="form-group">
              <textarea className="form-control required" id="message" name="message" placeholder="Message" rows={5} required defaultValue={""} />
            </div>
            {/* /Form Field */}
            {/* Form Field */}
            <div className="form-group">
              <input type="submit" className="btn btn-default form-send" defaultValue="Send!" />
            </div>  
            {/* /Form Field */}
          </form>
          {/* /Contact Form */}
        </div>			
      </div>
      {/* /SECTION: CONTACT  */}	
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
  {/* /form-error */}
  {/* Contact Form - Ajax Messages
========================================================= */}
  {/* >> JS
============================================================================== */}
  {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
  {/* Include all compiled plugins (below), or include individual files as needed */}
  {/* Holder JS */}
  {/* Modal box*/}
  {/* /Modal Box */}
  {/* Perfect ScrolBar */}
  {/* /Perfect ScrolBar */}
  {/* Owl Caroulsel */}
  {/* Google Maps */}
  {/* Cross-browser */}
  {/* Main Scripts */}
  {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
  {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
  {/*[if lt IE 9]>
  
  
<![endif]*/}
  {/* >> /JS
============================================================================= */}
</div>

            </div>
        )
    }
}

export default Home;