import React from 'react'
import './style/style.css'

function Education(props) {
    return (
        <>
           <ul>
           <span className='year-setion' style={{color:props.color,fontWeight:"600",fontSize:props.font}}>2019-2022 </span>
            <li style={{fontSize:props.font,color:props.color}}>mKOUT university with technical wrok   </li>
            <span className='year-setion' style={{color:props.color,fontWeight:"600",fontSize:props.font}}>2019-2022 </span>
            <li style={{fontSize:props.font,color:props.color}}>mKOUT university with technical wrok  </li>
            <span className='year-setion' style={{color:props.color,fontWeight:"600",fontSize:props.font}}>2019-2022 </span>
            <li style={{fontSize:props.font,color:props.color}}>mKOUT university with technical wrok   </li>
            </ul>
        </>
    )
}

export default Education