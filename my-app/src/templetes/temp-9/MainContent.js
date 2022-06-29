import React from 'react'

function MainContent() {
  return (
    <>

      <div className="right-main-div">
        <div className="margin-total-main-div">
          <div className="right-upper-part">
            <div className="right-upper-image">
              <img src="./images/temp-9-profile.png" className='rounded-circle profile-img' alt="" />
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

                      <p>Hello! I am Olivia. I am an experienced Graphic Designer with over 10 years of working experience in the advertising industry. I mainly work on Logo design and web design.  </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-6 my-border border-top-right-only border-bottom-right-only ">


                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-gear"></i></div>
                    <div className="sections-name">Skills</div>
                    <div className="user_information">
                    <ul> Expertise Skill
                        <li>Logo Design</li>
                        <li>Creativity</li>
                        <li>Graphic Design</li>
                        <li>Video Editing</li>
                      </ul>

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
                      
                      <li>mKOUT university with 20@ with</li>
                      <li>kolkata university with 20@ with</li>
                      <li>delhi  university with 20@ with </li>
                    </div>

                  </div>

                </div>
                <div className="col-md-6 my-border  border-bottom-right-only border-top-only">
                <div className='user-content'>
                <div className="user_information">
                    <ul> Language Skill
                        <li>English</li>
                        <li>Chinese </li>
                        <li>Portuguese</li>
                        <li>French</li>
                      </ul>

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

                    <li>mKOUT university with 20@ with</li>
                      <li>kolkata university with 20@ with</li>
                    
                      </div>

                  </div>
                </div>
                <div className="col-md-6 my-border border-bottom-right-only">

                  <div className='user-content'>
                    <div className="logo"><i className="fa-solid fa-user"></i></div>
                    <div className="sections-name">Hobbies</div>
                    <div className="user_information">

                    <li className='hobbies'>Listening Music</li>
                    <li className='hobbies'>Designing</li>
                    <li className='hobbies'>Writing Journal</li>
                    <li className='hobbies'>Writing Journal</li>
              
                  
                    </div>

                  </div>

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