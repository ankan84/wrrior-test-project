import React from 'react'
import './style.css'
import About from '../parameter/About'
import Education from '../parameter/Education'
import Experience from '../parameter/Experience'
import Skill from '../parameter/Skill'
import Language from '../parameter/Language'
import Project from '../parameter/Project'

function MainContent_16() {
  return (
    <>
      <div className="temp-16-right-main-div">
        <div className="temp-16-right-upper-div">
          <div className="temp-16-right-profile-information">
            <div className="profile-img">
              <img src="./images/temp-9-profile.png" alt="" />
            </div>
            <div className="profile-information">
              <div className="profile-information-name">
                <h3>Henrietta Mitchell</h3>
                <h5>SoftWare Devoloper</h5>
              </div>
              <div className="profile-information-about">
                <About font="14px" color="#AC6015"></About>
              </div>


            </div>

          </div>
        </div>
        <div className="temp-16-right-middle-div">
          <div className="temp-16-right-user-information">
            <div className="row">
              <div className="col-md-4"><h3>EDUCATION</h3></div>
              <div className="col-md-8 temp-16-my-border-top">
                <div className="user-information">
                      <Education color="#6C3D29" font="13px"></Education>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>EXPERIENCE</h3>
              </div>
              <div className="col-md-8 temp-16-my-border-top">
                <div className="user-information" style={{
                  marginTop:"10px"
                }}>
                 <Experience color="#6C3D29" font="14px"></Experience>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>SKILLS</h3>
              </div>
              <div className="col-md-8 temp-16-my-border-top">
                <div className="user-information">
                 <div className="user-information-skill-div">
                 <Skill font="13px" color="#6C3D29"></Skill>
                   <Language color="#6C3D29" font="13px"></Language>
                    <div style={{
                      visibility:"hidden"
                    }}>
                    <Language color="#6C3D29" font="14px"></Language>
                    </div>
                  
                   
                 </div>
                   
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>PROJECTS</h3>
              </div>
              <div className="col-md-8 temp-16-my-border-top">
                <div className="user-information">
                <Project color="#6C3D29"></Project>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="temp-16-right-lower-div">
           <div className="temp-16-right-lower-information">
              <div className="lower-information-left">
              <ul style={{
                listStyle:"none",
               
            }}>
            <li style={{
               fontSize:"13px",color:"#fff"
            }} ><i className="fa-solid fa-envelope-circle-check"></i>  <span style={{
                marginLeft:"7px"
            }}>ankan@gmail.com</span></li>
            <li style={{
               fontSize:"13px",color:"#fff"
            }} ><i className="fa-solid fa-phone"></i>  <span style={{
                marginLeft:"7px"
            }}>3423239834</span></li>
            
            </ul>
              </div>
              <div className="lower-information-right">
              <ul style={{
                 listStyle:"none"
              }}>
              <li  style={{
               fontSize:"13px",color:"#fff"
            }}><i className="fa-solid fa-location-dot"></i>  <span style={{
                marginLeft:"7px"
            }}>soltlake sector 5 on road near by police station</span></li>
            </ul>
              </div>
           </div>
        </div>
      </div> </>
  )
}

export default MainContent_16