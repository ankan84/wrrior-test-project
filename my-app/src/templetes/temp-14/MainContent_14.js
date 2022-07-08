import React from 'react'
import './style.css'
import About from '../parameter/About'
import Skill from '../parameter/Skill'
import Education from '../parameter/Education'
import Experience from '../parameter/Experience'
import Contact from '../parameter/Contact'
import Language from '../parameter/Language'
import Project from '../parameter/Project'
function MainContent_14() {
    return (<>
        <div className="temp-14-right-main-div">
            <div className="temp-14-right-inner-div">
                <div className="temp-14-right-inner-profile-div">
                    <div className="temp-14-right-inner-profile-name">
                        <h3>OLIVIA WILSON</h3>
                        <h5>DIGITAL MARKETER</h5>
                    </div>
                    <div className="temp-14-right-profile-img">
                        <img src="./images/temp-9-profile.png" alt="" />
                    </div>
                </div>

                <div className="temp-14-right-lower-div">
                    <div className="temp-14-right-user-information">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>About</h3>
                                    <div className="h-line"></div>
                                    <About color="#0c2461" font="13px"></About>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>Education</h3>
                                    <div className="h-line"></div>
                                    <Education font="13px" color="#0c2461"></Education>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>SKILL</h3>
                                    <div className="h-line"></div>
                                    <Skill font="13px" color="#0c2461"></Skill>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>WORK EXPERIENCE</h3>
                                    <div className="h-line" style={{ width: "40%" }}></div>
                                    <Experience font="13px" color="#0c2461"></Experience>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>CONTACT</h3>
                                    <div className="h-line"></div>
                                    <Contact font="13px" color="#0c2461"></Contact>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>LANGUAGE</h3>
                                    <div className="h-line" ></div>
                                    <Language font="13px" color="#0c2461"></Language>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="user-information">
                                    <h3>CONTACT</h3>
                                    <div className="h-line"></div>
                                    <Project font="13px" color="#0c2461"></Project>
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

export default MainContent_14