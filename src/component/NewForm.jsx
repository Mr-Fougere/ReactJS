import {Input} from 'antd';
import React from 'react'

export default function NewForm(props) {
  
    return (
        <div>
            <form>
                <label 
                htmlFor="listName" 
                className={`Color${props.label_name}`} 
                >
                    Nom de la liste
                </label>
                <Input 
                    type="text"
                    name="listName" 
                    id="listName" 
                    placeholder="Entrez le nom de la liste"
                    value={props.listName} 
                    onChange={(e)=> props.changeName(e.target.value)}
                />
                <label htmlFor="color" className={`Color${props.label_color}`}>Choissisez une couleur</label>
                <Input 
                    type="color" 
                    name="color" 
                    id="color" 
                    value={props.listColor} 
                    onChange={(e)=>props.changeColor(e.target.value)}
                />
                
            </form>
            
        </div>
    )
}
