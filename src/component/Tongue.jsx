import { Tooltip } from 'antd'
import React from 'react'

export default function Tongue(props) {
    return (
        <Tooltip title="Changer la couleur" color="#751905">
            <div
                onClick={props.handleClick} 
                style={{backgroundColor:props.color,position:'absolute',top:'-3px',left:'28px'}} 
                className="reverseTongue">      
            </div>
        </Tooltip>
    )
}
