import React from 'react'
import './style.css'
import Contact from '../parameter/Contact'
import Skill from '../parameter/Skill'
import Language from '../parameter/Language'
import Education from '../parameter/Education'
import Project from '../parameter/Project'
import About from '../parameter/About'
import Experience from '../parameter/Experience'

function MainContent_12() {
    return (
        <>
            <div className="temp-12-right-main-div">
                <div className="temp-12-right-inner-div">
                    <div className="temp-12-right-inner-left">
                        <div className="temp-12-right-inner-left-img">
                            <img src="./images/ch" alt="" />
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="user-information">
                                    <h4>CONTACT</h4>
                                    <hr />
                                    
                                    <Contact font="11px"></Contact>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="user-information">
                                    <h4>SKILLS</h4>
                                    <hr />
                                    
                                    <Skill></Skill>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="user-information">
                                    <h4>LANGUAGE</h4>
                                    <hr />
                                    
                                    <Language></Language>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="user-information">
                                    <h4>PROJECT</h4>
                                    <hr />
                                    
                                    <Project font="12px"></Project>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="temp-12-right-inner-top">
               
                            <h3>CHAD GIBBONS</h3>
                            <h5>graphic designer</h5>
                        
                    
                    </div>


                    <div className="temp-12-right-inner-right">
                    <div className="row">
                            <div className="col-md-12">
                            <div className="user-information">
                                    <h4>PROFESSIONAL PROFILE</h4>
                                    
                                    
                                    <About font="13px" color="black"></About>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                            <div className="user-information">
                                    <h4>EDUCATION</h4>
                                    
                                    
                                    <Education font="13px"></Education>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                            <div className="user-information">
                                    <h4>WORK EXPERIENCE</h4>
                                    
                                    
                                    <Experience font="13px"></Experience>
                                </div>
                            </div>
                        </div>

                    </div>
                    

                     



                </div>
            </div>
        </>
    )
}

export default MainContent_12