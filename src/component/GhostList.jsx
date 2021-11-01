import { PlusOutlined, UpOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import AddButton from './AddButton'

export default function GhostList(props) {
    return (<div className="d-flex flex-column align-items-center">

          <div className="ghostList">
            {props.loading===true?<Spin></Spin>:(
            <AddButton 
              tooltip="Commencer une nouvelle liste"
              placement="bottom"
              handleClick={props.handleClick}
              icon= {<PlusOutlined/>}
              size="large"
              type="circle"
              style={{color:'#751905',border:'dashed 2px #751905',boxShadow: '-4px 4px 4px 0px rgba(44, 42, 41, 0.19)'}}
              colorTool="#751905" >
            </AddButton>)}
          </div>
          {props.lists.length===0&&(<div>
          <UpOutlined className="upFirstList"style={{color:'#751905'}}></UpOutlined>

          <div style={{color:'#751905',fontSize:'15px'}}>Ajouter votre première liste</div></div>)}
        </div>
    )
}
