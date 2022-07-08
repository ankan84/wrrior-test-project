import React from 'react'

function Language(props) {
  return (
    <>
          <ul style={{color:props.color}}> Language Skill
                        <li style={{color:props.color,fontSize:props.font}}>English</li>
                        <li style={{color:props.color,fontSize:props.font}}>Chinese </li>
                        <li style={{color:props.color,fontSize:props.font}}>Portuguese</li>
                        {/* <li>French</li> */}
                      </ul>
    </>
  )
}

export default Language