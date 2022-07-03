import React from 'react'

function Skill(props) {
    return (
        <>
            <ul style={{color:props.color}}> Expertise Skill
                <li style={{fontSize:props.font}}>Logo Design</li>
                <li style={{fontSize:props.font}}>Creativity</li>
                <li style={{fontSize:props.font}}>Graphic Design</li>
                <li style={{fontSize:props.font}}>Video Editing</li>
            </ul>
        </>
    )
}

export default Skill