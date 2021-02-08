import React, { Component } from 'react'

class PageLoader extends Component {
    render() {
        return (
            <div>
                {/* Page Loader
========================================================= */}
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
            </div>
        )
    }
}

export default PageLoader; 