import React from 'react'
import './style/style.css'

function Education(props) {
    return (
        <>
           <ul>
            <li style={{fontSize:props.font}}>mKOUT university with technical wrok <span className='year-setion' style={{color:props.color}}>2019-2022 </span>  </li>
            <li style={{fontSize:props.font}}>mKOUT university with technical wrok <span className='year-setion' style={{color:props.color}}>2019-2022 </span> </li>
            <li style={{fontSize:props.font}}>mKOUT university with technical wrok <span className='year-setion' style={{color:props.color}}>2019-2022 </span>  </li>
            </ul>
        </>
    )
}

export default Education