import React, { useEffect, useState } from 'react'

function updateHeight(id){
    let newArray=['15px','15px','15px','15px','15px','15px','15px','15px','15px']
    newArray[id]='20px'
    return newArray
}

let colors = ["#B11119","#051A8B","#11B19F","#B14D11","#40B111","#A311B1","#000000","#EBA12F","#189A06"];
export default function ColorPanel(props) {
    useEffect(() => {
        setHeigthTongue(updateHeight(colors.indexOf(props.color)));
    }, [])
    const[heightTongue,setHeigthTongue] = useState([]);
    return (
        
       <div className="d-flex flex-row align-items-end" style={{position:'absolute',top:'-20px',left:'8px'}}>
         {colors.map(color=>(
            <div 
                className="colorTongue" 
                onClick={()=>{   
                    (props.handleChangeColor
                        ?props.handleChangeColor(color)
                        :props.handleEditColor(props.list.id,props.list.name,color,props.list.tasks));
                    setHeigthTongue(updateHeight(colors.indexOf(color)))
                    }}

                style={{backgroundColor:color,height:heightTongue[colors.indexOf(color)]}}>
            </div>
        )) }
        </div>
    )
}
