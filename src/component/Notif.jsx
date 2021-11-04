import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import React from 'react'

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
  
export default function Notif(props) {

    if (props.updated){
        iconNotif=(<EditOutlined style={{ color: '#EAAA03'  }}/>)
        messageNotif="Modification effectuée";
        descriptNotif="La liste "+ props.oldName + " est devenue " + props.newName +" !"
      }else if(props.deleted){
        iconNotif=(<CloseCircleOutlined style={{ color: '#FF0000'  }}/>)
        messageNotif="Liste Supprimée";
        descriptNotif="La liste "+ props.oldName + " a été supprimé avec succés !"
      }else if(props.listName!=="" && props.listColor !== "#F5DEB3"){
        iconNotif=(<CheckCircleOutlined style={{ color: '#58AA36'  }}/>)
        messageNotif="Nouvelle liste ajoutée"
        descriptNotif="La liste "+props.istName+ " a été crée avec succés !"
        props.reset();
        props.handleSubmit(props.updated); 
      }else if (props.listName==="" || props.listColor === "#F5DEB3"){
        iconNotif=(<ExclamationCircleOutlined style={{ color: '#FF0000'  }}/>)
        messageNotif="Erreur";
        descriptNotif="Vérifier les informations de la nouvelle liste !"   
      }
      openNotification();
      
}
