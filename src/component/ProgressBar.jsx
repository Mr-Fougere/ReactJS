import { CheckCircleFilled, MinusOutlined } from '@ant-design/icons'
import Cache from './Cache'

export default function ProgressBar(props) {
    let cptCompleted= 0
    props.tasks.filter(task => task.completed===true).map(filtered=>(cptCompleted++))
    return (
        <div style={{color:'white',position:'absolute',top:"35px",right:'10px'}}>
            {cptCompleted!==props.tasks.length &&`${cptCompleted} / ${props.tasks.length}`}
            {cptCompleted!==props.tasks.length && props.listName==="chevalier" &&props.e2Pak==="chevalierDance"&& props.setE2Pak("")}
            {cptCompleted===props.tasks.length && props.tasks.length!==0 &&<CheckCircleFilled></CheckCircleFilled> }
            {cptCompleted===props.tasks.length && props.tasks.length!==0 &&<Cache/> }
            {cptCompleted===props.tasks.length && props.listName==="chevalier" && props.setE2Pak("chevalierDance")}
            {props.tasks.length===0&&<MinusOutlined></MinusOutlined>}
            
        </div>
    )
}
