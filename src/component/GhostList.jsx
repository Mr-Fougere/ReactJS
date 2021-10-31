import { PlusOutlined, UpOutlined } from '@ant-design/icons'
import React from 'react'
import AddButton from './AddButton'

export default function GhostList(props) {
    return (<div className="d-flex flex-column align-items-center">

          <div className="ghostList">
            <AddButton 
              tooltip="Commencer une nouvelle liste"
              placement="bottom"
              handleClick={props.handleClick}
              icon= {<PlusOutlined/>}
              size="large"
              type="circle"
              cName="plusDashed" >
            </AddButton>
          </div>
          {props.lists.length===0&&(<div>
          <UpOutlined className="upFirstList"style={{color:'brown'}}></UpOutlined>

          <div style={{color:'brown',fontSize:'15px'}}>Ajouter votre première liste</div></div>)}
        </div>
    )
}
