import { Tooltip } from 'antd'
import React from 'react'


function taskUpdater(oldTasks,newTask){
     oldTasks.push({"title": newTask, "completed": false});
    return oldTasks
}

export default function AddTask(props   ) {
    return (
        <div >
            <Tooltip trigger='focus' placement="bottom" title="Entrer pour ajouter" color="#751905">
                <input autoFocus className="addTask" placeholder="+   ajouter une tâche"
                        maxLength="20" 
                        onKeyPress={
                            (e)=>((e.key==="Enter" && e.target.value!== "") 
                            ?(props.update(props.listPointer.id,props.listPointer.name,props.listPointer.color,taskUpdater(props.listPointer.tasks,e.target.value)),e.target.value="")
                            :(e.key==="Enter" &&props.notifManager(false,"","","",true)))}>
                </input>
           </Tooltip>
        </div>
    )
}
