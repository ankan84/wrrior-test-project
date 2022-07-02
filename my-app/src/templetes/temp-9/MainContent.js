import React from 'react'
import './style.css'
import About from '../parameter/About'
import Contact from '../parameter/Contact'
import Project from '../parameter/Project'
import Language from '../parameter/Language'
import Education from '../parameter/Education'
import Skill from '../parameter/Skill'
import WorkExprience from '../parameter/WorkExprience'



function MainContent() {
  return (
    <>

      <div className="right-main-div">
        <div className="margin-total-main-div">
          <div className="right-upper-part">
            <div className="right-upper-image">
              <img src="" className='rounded-circle profile-img' alt="" />
            </div>
            <div className="right-upper-info">
              <div className="right-upper-info-heading">
                <h3>Olivia Wilson</h3>
                <h4>Graphic designer</h4>
              </div>
              <div className="right-upper-info-body">
                <h5>Contact Me</h5>
                <ul>
                  <li>+123-456-7890</li>
                  <li> hello@reallygreatsite.co</li>
                  <li> www.testweb.com</li>
                  <li> 123 Anywhere st., Any City, ST 12345</li>
                </ul>


              </div>





            </div>
          </div>
          <div className="right-lower-part">

            <div className="container">
              <div className="row ">
                <div className="col-md-6">


                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-user"></i></div>
                    <div className="sections-name">About Me</div>
                    <div className="user_information">
                      <About></About>

                    </div>

                  </div>
                </div>
                <div className="col-md-6 my-border border-top-right-only border-bottom-right-only ">


                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-gear"></i></div>
                    <div className="sections-name">Skills</div>
                    <div className="user_information">

                      <Skill></Skill>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">

                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-book-open"></i></div>
                    <div className="sections-name">Education</div>
                    <div className="user_information">

                    <Education></Education>
                    </div>

                  </div>

                </div>
                <div className="col-md-6 my-border  border-bottom-right-only border-top-only">
                  <div className='user-content'>
                    <div className="user_information">

                      <Language></Language>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-6  ">

                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-briefcase"></i></div>
                    <div className="sections-name">Work Experience</div>
                    <div className="user_information">

                    <WorkExprience></WorkExprience>

                    </div>

                  </div>
                </div>
                <div className="col-md-6 my-border border-bottom-right-only">

                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-user"></i></div>
                    <div className="sections-name">Projects</div>
                    <div className="user_information">

                      <Project></Project>


                    </div>

                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 ">


                  <div className='user-content'>
                    <div className="logo">  <i className="fa-solid fa-user"></i></div>
                    <div className="sections-name">Contact</div>
                    <div className="user_information">
                      <Contact></Contact>

                    </div>

                  </div>
                </div>

                <div className="col-md-6 my-border border-bottom-right-only border-top-only">


                
                </div>

              </div>



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent