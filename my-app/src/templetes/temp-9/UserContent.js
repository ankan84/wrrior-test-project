import React from 'react'

function UserContent(props) {
  return (
    <div className='user-content'>
        <div className="logo"><i className={props.icon}></i></div>
        <div className="sections-name">{props.name}</div>
    </div>
  )
}

export default UserContent