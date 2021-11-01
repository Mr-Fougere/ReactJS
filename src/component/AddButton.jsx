import React from 'react'
import { Button, Popconfirm, Tooltip } from 'antd';

export default function AddButton(props) {

    return (
        <Popconfirm placement={props.placementPop} title={props.textPop} onConfirm={props.handlePop} okText="Oui" okType="danger" cancelText="Non">
            <Tooltip title={props.tooltip} placement={props.placementTool} color={props.colorTool}>
                <Button 
                    style={props.style}
                    disabled={props.dis} 
                    icon={props.icon} 
                    onClick={props.handleClick} 
                    type={props.type} 
                    size={props.size} 
                    shape={props.shape} >
                        {props.children}
                </Button>
            </Tooltip>
        </Popconfirm>

    )
}
