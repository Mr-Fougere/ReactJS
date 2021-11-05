import { CloseOutlined } from '@ant-design/icons'
import { Card, Tooltip } from 'antd'
import React from 'react'
import AddButton from './AddButton'
import ColorPanel from './ColorPanel'


export default function NewList(props) {
    return (
        <Card
            className={`newList ${props.ListVisible}`}           
            headStyle={{backgroundColor:props.listColor, 
                        borderBottom:'grey 1px dashed',
                        borderTopLeftRadius:'10px',
                        borderTopRightRadius:'10px'}}
            title={<Tooltip trigger='focus' placement="bottomLeft" title="Appuyez sur entrer" color="#751905"><input 
                    autoFocus={true}
                    id="inputNewName"
                    className="inputNewName" 
                    type="text"
                    placeholder="Nom de la Liste"
                    maxLength="15"
                    style={{backgroundColor:props.listColora}}
                    onChange={props.handleChangeName}
                    onKeyPress={props.handleKey}
                    > 
                  </input></Tooltip>
                  } 
            extra={<div><ColorPanel color="#B11119"disabled="false" handleChangeColor={props.handleChangeColor}></ColorPanel><div className=" d-flex flex-column" style={{position:'absolute',top:'2px',right:'2px'}}>
                 <AddButton 
                  placementTool="bottom"
                  tooltip="Annuler" 
                  type="text"
                  size="small" 
                  colorTool="#751905"
                  icon={<CloseOutlined style={{color:'white'}}/>}
                  handleClick={props.handleClick}
                  >
                </AddButton>   
              </div>
              </div> }
          >   
          </Card>
    )
}
