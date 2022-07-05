import React from 'react'

function Language(props) {
  return (
    <>
          <ul style={{color:props.color}}> Language Skill
                        <li style={{color:props.color}}>English</li>
                        <li style={{color:props.color}}>Chinese </li>
                        <li style={{color:props.color}}>Portuguese</li>
                        {/* <li>French</li> */}
                      </ul>
    </>
  )
}

export default Language