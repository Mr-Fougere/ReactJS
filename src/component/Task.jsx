import { Checkbox } from 'antd'
import React from 'react'

function checkUpdater(listToUp,check,id){
        let newArray = listToUp.tasks
        newArray[id].completed= !check
    return newArray
}

export default function Task(props) {
    return (
        <Checkbox
        className="m-0"
            checked={props.checked}
            onClick={()=>
               props.handleCheck(props.l.id,props.l.name,props.l.color,(checkUpdater(props.l,props.checked,props.i)))
                    }
            ><div className={`taskTitle${props.verifCheck}`}>{props.children}</div>
                
        </Checkbox>
    )
}
