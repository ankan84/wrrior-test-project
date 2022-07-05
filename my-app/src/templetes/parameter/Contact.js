import React from 'react'

function Contact(props) {
    return (<>
            <ul style={{
                listStyle:"none",
               
            }}>
            <li style={{fontSize:props.font,color:props.color}}><i className="fa-solid fa-envelope-circle-check"></i> <span>ankan@gmail.com</span></li>
            <li style={{fontSize:props.font,color:props.color}}><i className="fa-solid fa-phone"></i> <span>3423239834</span></li>
            <li style={{fontSize:props.font,color:props.color}}><i className="fa-solid fa-location-dot"></i> <span>soltlake sector 5 on road near by police station</span></li>
            </ul>

    </>
    )
}

export default Contact