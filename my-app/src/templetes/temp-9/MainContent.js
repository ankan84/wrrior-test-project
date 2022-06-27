import React from 'react'
import UserContent from './UserContent'
function MainContent() {
  return (
    <>
        
              <div className="right-main-div">
              <div className="margin-total-main-div">
                <div className="right-upper-part">
                    <div className="right-upper-image">
                        <img src="./images/temp-9-profile.png"  className='rounded-circle profile-img' alt="" />
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
                          <UserContent name="About Me" icon="fa-solid fa-user"></UserContent>
                        </div>
                        <div className="col-md-6 border border-danger">
                        <UserContent name="Skills" icon="fa-solid fa-gear"></UserContent>
                        </div>
                       </div>
                       <div className="row">
                        <div className="col-md-6 border border-danger"> <UserContent name="Education" icon="fa-solid fa-book-open"></UserContent></div>
                        <div className="col-md-6 border border-danger"> <UserContent ></UserContent></div>
                       </div>
                       <div className="row">
                        <div className="col-md-6 border border-danger"> <UserContent name="Work Experience" icon="fa-solid fa-briefcase"></UserContent></div>
                        <div className="col-md-6 border border-danger"> <UserContent name="Hobbies" icon="fa-solid fa-user"></UserContent></div>
                       </div>
                   </div>
                </div>
              </div>
              </div>
    </>
  )
}

export default MainContent