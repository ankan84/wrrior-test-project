import React from 'react'
import './style.css'
import About from '../parameter/About'
import Language from '../parameter/Language'
import Contact from '../parameter/Contact'
import WorkExprience from '../parameter/WorkExprience'
import Education from '../parameter/Education'
import Skill from '../parameter/Skill'
import Project from '../parameter/Project'
function MainContent_13() {
    return (
        <>
            <div className="temp-13-right-main-div">
                <div className="temp-13-right-inner-div">
                    <div className="temp-13-right-inner-right-div">
                        <div className="temp-13-right-img">
                            <img src="./images/temp-9-profile.png" alt="" />
                        </div>
                        <div className="temp-13-right-profile-information">
                            <h3> Cahaya Dewi</h3>
                            <h6>Bs Biology Major</h6>
                        </div>

                        <div className="temp-13-user-information">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>About</h3>
                                        <About color="white"></About>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>Contact</h3>
                                        <Contact color="white"></Contact>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>Language</h3>
                                        <Language color="white"></Language>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="temp-13-right-inner-left-div">
                        <div className="temp-13-right-left-user-information">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>Work Experience</h3>
                                        <WorkExprience font="14px"></WorkExprience>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>Education</h3>
                                        <Education font="14px"></Education>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>Skill</h3>
                                        <Skill font="14px"></Skill>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="user-information">
                                        <h3>Project</h3>
                                        <Project font="14px"></Project>
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

export default MainContent_13