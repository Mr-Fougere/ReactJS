import logo from './src_image/fougere.png';
import knightGif from './src_image/knight.gif'
import KnightDance from './src_image/knighDance.gif';
import './App.css';
import { useEffect, useState } from 'react';
import Fire from './Fire';
import {EditOutlined, CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, CloseOutlined} from '@ant-design/icons';
import { Spin,Card, notification, Tooltip, Popconfirm} from 'antd';
import AddButton from './component/AddButton';
import Task from './component/Task';
import AddTask from './component/AddTask';
import GhostList from './component/GhostList';
import NewList from './component/NewList';
import ColorPanel from './component/ColorPanel';
import Tongue from './component/Tongue';
import ProgressBar from './component/ProgressBar';
import Spoopy from './component/Spoopy';


function App() {

  const [listName, setListName] = useState("");
  const [listColor, setListColor] = useState("#B11119");
  const [newListVisible,setNewListVIsible] = useState("invisible");
  const [lists,setLists] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState (null);
  const [tempModify,setTempModify] =useState("");
  const [e2Pak,setE2Pak] = useState("")
  const [selectedList, setSelectedList] = useState(null)
  let descriptNotif = "";
  let iconNotif ="";
  let messageNotif ="error";

  const openNotification = () => {
    notification.open({
      message:messageNotif,
      description:
        descriptNotif,
      icon: iconNotif,
    });
  };
 useEffect(() => {
  const firebase = new Fire((error)=>{
    if (error){
      setError("liste non trouvée");
    }else{
      firebase.getLists(lists =>{
        setLists(lists);
        setLoading(false);
      });
      return ()=>{
        firebase.detach();
   }
 }})},[])
  function notifManager(updated,oldName,newName,deleted){
    
    if (updated){
      iconNotif=(<EditOutlined style={{ color: '#EAAA03'  }}/>)
      messageNotif="Modification effectuée";
      descriptNotif="La liste "+ oldName + " est devenue " + newName +" !"
    }else if(deleted){
      iconNotif=(<CloseCircleOutlined style={{ color: '#FF0000'  }}/>)
      messageNotif="Liste Supprimée";
      descriptNotif="La liste "+ oldName + " a été supprimé avec succés !"
    }else if(listName!=="" && listColor !== "#F5DEB3"){
      iconNotif=(<CheckCircleOutlined style={{ color: '#58AA36'  }}/>)
      messageNotif="Nouvelle liste ajoutée"
      descriptNotif="La liste "+listName+ " a été crée avec succés !"
      reset();
      handleSubmit(updated); 
    }else if (listName==="" || listColor === "#F5DEB3"){
      iconNotif=(<ExclamationCircleOutlined style={{ color: '#FF0000'  }}/>)
      messageNotif="Erreur";
      descriptNotif="Vérifier les informations de la nouvelle liste !"   
    }
    openNotification();
    
  }
  function reset(){
      setListName("");
      setListColor("#B11119");
      setNewListVIsible("invisible");
  }
  
  function handleKeyPress(event,target){
    
    if(event.key === target){
      return true
    }}
   
  function handleSubmit(){
    let tasks=[]
    const firebase = new Fire((err)=>{
      if(err){
        setError("ERREUR AJOUT")
      }else {
        if(listName==="chevalier"&&listColor==="#000000"){
          setE2Pak("chevalier");
          tasks=[{"title":"Brûler la sorcière du village","completed":true},
                {"title":"Conquérir Damoiselle Camille","completed":false},
                {"title":"Acheter des oignons","completed":true},
                {"title":"Catapulter Régis","completed":true},
                {"title":"Retrouver les clés de mon cheval","completed":false},
                {"title":"Trouver les lutins de la forêt","completed":true}
                ]}
        else if(listName==="halloween"&&listColor==="#EBA12F"){
          setE2Pak("halloween");
          tasks=[{"title":"Faire peur aux enfants","completed":false},
                {"title":"Se déguiser en contrôleur fiscale","completed":true},
                {"title":"Invoquer HellBoy","completed":false},
                {"title":"Faire un pacte avec le diable","completed":true}
                ]}
        const list={
          "name": listName,
          "color": listColor,
          "tasks": tasks
        }
        firebase.addList(list);
        
        
        }
    })
  }

  function handleDelete(list){
    const firebase = new Fire((err)=>{
      if(err){
        setError("ERREUR DELETE")
      }else{
        firebase.deleteList(list)
      }
    })
  }

  function handleUpdate(listId, listName,listColor,taskUpdated){
    const firebase = new Fire((err)=>{
      if(err){
        setError("ERREUR UPDATE")
      }else{
        const listUpdated ={
          "name":listName,
          "color":listColor,
          "tasks":taskUpdated,
        };
        firebase.updateList(listUpdated,listId);
      }
    })
  }
  useEffect(() => {
    console.error(error)
    
  }, [error])  
  return (
    <div className="App">
      {e2Pak==="chevalier"&&(<img  className="knight"src={knightGif} alt="knight" ></img>)}
      {e2Pak==="halloween"&& <Spoopy/>}
        <header className = "App-header ">
        <img src={logo}  className = "App-logo" alt = "logo" />
        <p className="welcome" >
          Bienvenue sur GerefouY
        </p>  
        </header>      
        <div className="d-flex align-items-center flex-wrap justify-content-center ">
       
        {lists.map(list=>(
          <Card 
            className="cardList"
            key={list.id}
            headStyle = {{boxShadow:'-2px -2px 2px 0px ligthgrey',
                          backgroundColor:list.color,
                          border:'darkgrey 1px solid',
                          borderTopLeftRadius:'10px',
                          borderTopRightRadius:'10px'
                        }} 
            title = {(<div>
                        <Tooltip title="Modifier le nom de la liste" placement="bottomLeft" color="#751905">
                          <input 
                            className ="listName"
                            value={tempModify===list.name?null:list.name}   
                            maxLength="15"
                            onFocus={()=>setTempModify(list.name)}
                            onBlur={()=>setTempModify("")}
                            onKeyPress={(e)=>(
                              handleKeyPress(e,"Enter")?
                              (handleUpdate(list.id,e.target.value,list.color,list.tasks),
                              notifManager(true,list.name,e.target.value))
                                :null)}
                            >
                          </input>
                        </Tooltip>
                      </div>)}  
            extra={
              <div>
                 <AddButton 
                  style={{position:'absolute',top:'5px',right:'5px'}}
                  placementTool="topLeft"
                  tooltip="Suprimer la liste" 
                  type="text"
                  size="small" 
                  icon={<CloseOutlined style={{color:'white'}}/>}
                  placementPop={"top"}
                  colorTool="#751905"
                  textPop={`Confirmer la suppression de ${list.name}`}
                  handlePop={()=>(handleDelete(list),notifManager(false,list.name,null,true))}
                  >
                  </AddButton>  
                {selectedList === list && (
                  <ColorPanel style={{position:'absolute',bottom:'1px'}}
                    color={list.color}
                    handleEditColor={handleUpdate}
                    list={list}
                  />
                )}
                {selectedList!==list && 
                 <Tongue 
                    handleClick = {() => {
                      setSelectedList(list)
                    }}
                    color={list.color}
                  />}
                  {e2Pak==="chevalierDance" && list.name==="chevalier" && (<img  className="knightDance"src={KnightDance} alt="knightDance" ></img>)}
              </div>
               }
          >
            
            <ProgressBar tasks={list.tasks} listName={list.name} setE2Pak={setE2Pak} e2Pak={e2Pak}/>
            <div className="taskPanel" >
            
              {list.tasks.length !== 0 && list.tasks.map((task,index) =>(
              <Task checked={task.completed} 
                    verifCheck={task.completed?'-checked':''} 
                    handleCheck={handleUpdate} 
                    i={index} 
                    l={list} >
                 {task.title}
              </Task>
                ))
              }
              {list.tasks.length!=9&&
              <AddTask
              listPointer={list}
              update={handleUpdate}
              > 
              </AddTask>}
            </div> 
          </Card>))}

          {(newListVisible==="")
          ? <NewList 
              listVisible={newListVisible} 
              listColor={listColor} 
              handleChangeColor={setListColor}
              handleChangeName={(e)=>setListName(e.target.value)}
              handleKey={(e)=>(handleKeyPress(e,"Enter")?notifManager():null)}
              handleClick={()=>reset()}
              listName={listName}
            />
          : <GhostList 
              handleClick={()=>setNewListVIsible("")}
              lists={lists} 
              loading={loading}
            /> 
          }
        </div>
      
    </div>
  );
}

export default App;