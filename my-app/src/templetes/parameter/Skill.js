import React from 'react'

function Skill(props) {
    return (
        <>
            <ul style={{color:props.color}}> Expertise Skill
                <li style={{fontSize:props.font,color:props.color }}>Logo Design</li>
                <li style={{fontSize:props.font,color:props.color}}>Creativity</li>
                <li style={{fontSize:props.font,color:props.color}}>Graphic Design</li>
                <li style={{fontSize:props.font,color:props.color}}>Video Editing</li>
            </ul>
        </>
    )
}

export default Skill