import React from 'react'
import './style.css'
import About from '../parameter/About';
import Education from '../parameter/Education';
import Skill from '../parameter/Skill';
import Contact from '../parameter/Contact';
import Language from '../parameter/Language';



function MainContent_11() {
  return (
      <>
        <div className="temp-11-right-main-div">
         <div className="temp-right-upper-div">
            <div className="temp-11-profile-img">
                <img src="./images/temp-9-profile.png" alt="" />
            </div>
            <div className="temp-11-right-profile-name">
                <h3>RIDHAM SURI</h3>
                <h5>Classical Music Teacher</h5>
            </div> 

             </div>
            <div className="temp-11-lower-div">
                 <div className="temp-11-lower-div-information">
                     <div className="row">
                        <div className="col-md-6">
                          <div className="user-information">
                             <h3>About</h3>
                              <About font="14px" color="black"></About>
                          </div>

                        </div>
                        <div className="col-md-6 temp-11-border-left-only">
                        <div className="user-information">
                             <h3>Skills</h3>
                             <Skill></Skill>
                              
                          </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                        <div className="user-information">
                             <h3>Education</h3>
                             
                              <Education font="14px"></Education>
                          </div>

                        </div>
                        <div className="col-md-6 temp-11-border-left-only">
                        <div className="user-information">
                             <h3>Language skill</h3>
                             <Language font="14px"></Language>
                          </div>

                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                        <div className="user-information">
                             <h3>Contact</h3>
                             <Contact font="14px"></Contact>
                          </div>

                        </div>
                        <div className="col-md-6 temp-11-border-left-only">
                        <div className="user-information">
                             
                          </div>

                        </div>
                     </div>
                     
                 </div>
            </div>

            

        </div>

      </>
  )
}

export default MainContent_11