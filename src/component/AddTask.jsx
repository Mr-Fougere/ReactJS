import { Tooltip } from 'antd'
import React from 'react'


function taskUpdater(oldTasks,newTask){
     oldTasks.push({"title": newTask, "completed": false});
    return oldTasks
}

export default function AddTask(props   ) {
    return (
        <div >
            <Tooltip trigger='focus' placement="right" title="Entrer pour ajouter">
                <input autoFocus className="addTask" placeholder="+   ajouter une tâche"
                        maxLength="20" 
                        onKeyPress={
                            (e)=>(e.key==="Enter"?(props.update(props.listPointer.id,props.listPointer.name,props.listPointer.color,taskUpdater(props.listPointer.tasks,e.target.value)),e.target.value=""):null)}>
                </input>
           </Tooltip>
        </div>
    )
}
