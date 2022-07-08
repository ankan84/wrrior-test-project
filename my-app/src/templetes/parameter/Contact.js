import React from 'react'

function Contact(props) {
    return (<>
            <ul style={{
                listStyle:"none",
               
            }}>
            <li style={{fontSize:props.font,color:props.color}}><i className="fa-solid fa-envelope-circle-check"></i>  <span style={{
                marginLeft:"7px"
            }}>ankan@gmail.com</span></li>
            <li style={{fontSize:props.font,color:props.color}}><i className="fa-solid fa-phone"></i>  <span style={{
                marginLeft:"7px"
            }}>3423239834</span></li>
            <li style={{fontSize:props.font,color:props.color}}><i className="fa-solid fa-location-dot"></i>  <span style={{
                marginLeft:"7px"
            }}>soltlake sector 5 on road near by police station</span></li>
            </ul>

    </>
    )
}

export default Contact