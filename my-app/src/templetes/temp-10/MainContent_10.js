import React from 'react'
import './style.css'
import About from '../parameter/About'
import Experience from '../parameter/Experience'
import Skill from '../parameter/Skill'
import Education from '../parameter/Education'
import Contact from '../parameter/Contact'
function MainContent_10() {
  return (
    <>
      <div className="temp-10-right-main-div">
        <div className="temp-10-right-upper-div">
          <div className="temp-10-right-profile-information">
            <div className="profile-name">
              <h5> playback singer</h5>
              <h3>Naazni mitra</h3>
            </div>
            <div className="profile-img">
              <img src="./images/temp-9-profile.png" className='img-fluid rounded' alt="profile image" />
            </div>

          </div>
          <div className="temp-10-right-about">
            <About font="18px" color="black"></About>

          </div>

        </div>


        <div className="temp-10-right-lower-div">
          <div className="temp-10-lower-information">
            <div className="row">
              <div className="col-md-6 ">
                <div className="user-content">
                  <h3 className="user-content-name">
                    Work Exprience
                  </h3>
                  <Experience font="15px"></Experience>
                </div>

              </div>
              <div className="col-md-6 temp-10-border-left-only">
                <div className="user-content">
                  <h3 className="user-content-name">
                  Skills
                  </h3>
                  <Skill font="17px" color="white"></Skill>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 temp-10-border-top-only">
                <div className="user-content">
                  <h3 className="user-content-name">
                    Education
                  </h3>
                  <Education font="15px" color="white"></Education>
                </div>
              </div>
              <div className="col-md-6 temp-10-border-left-only temp-10-border-top-only">
                <div className="user-content">
                  <h3 className="user-content-name">
                    Contact
                  </h3>
                  <Contact font="15px"></Contact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent_10


