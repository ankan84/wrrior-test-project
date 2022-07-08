import React from 'react'
import './style.css'
import Contact from '../parameter/Contact'
import About from '../parameter/About'
import Education from '../parameter/Education'
import Skill from '../parameter/Skill'
import Experience from '../parameter/Experience';
import Language from '../parameter/Language';
import Project from '../parameter/Project'

function MainContent_15() {
    return (<>

        <div className="temp-15-right-main-div">
            <div className="temp-15-right-header-div">
                <div className="temp-15-right-profile-information">
                    <div className="temp-15-right-img">
                        <img src="./images/temp-9-profile.png" alt="img-image" />
                    </div>
                    <div className="temp-15-right-name">
                        <h3>MORGAN MAXWELL</h3>
                        <h5>SOFTWARE EXPERT</h5>
                    </div>
                </div>
            </div>

            <div className="temp-15-right-middle-div">
                <div className="temp-15-right-user-information">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="user-information" style={{marginTop:"20%"}}>
                                <h3> Contact </h3>
                                <Contact font="14px" color="#0c2461"  ></Contact>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3> About</h3>
                                        <About color="#0c2461"></About>

                                    </div>
                                </div>
                                <div className="col-md-12">
                                <div className="user-information">
                                <h3> Skills </h3>
                                <Skill></Skill>
            
                            </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="temp-15-right-lower-div">
            <div className="temp-15-right-lower-user-information">
                <div className="row">
                    <div className="col-md-6">
                       <div className="user-information">
                         <h3>Education</h3>
                          <Education color="#0c2461" font="14px"></Education>
                       </div>
                    </div>
                    <div className="col-md-6">
                    <div className="user-information">
                         <h3>Work Experince</h3>

                          <Experience color="#0c2461" font="14px"></Experience>
                       </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="user-information">
                         <h3>Language</h3>
                          <Language color="#0c2461" font="14px"></Language>
                       </div>
                    </div>
                    <div className="col-md-6">
                    <div className="user-information">
                         <h3>Project</h3>
                          <Project color="#0c2461" font="14px"></Project>
                       </div>
                        </div>
                </div>
            </div>

            </div>

        </div>
    </>

    )
}

export default MainContent_15