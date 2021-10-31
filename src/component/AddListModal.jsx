import React from 'react'
import { Modal} from 'antd';
import NewForm from './NewForm';
import AddButton from './AddButton';

export default function AddListModal(props) {
    
    return (
        
        <div>
            <Modal 
              title="Ajouter une liste"
              style={{ top: 50 }}
              visible={props.modal3}
              onCancel={()=>props.modal(false)}
              footer={[
                <AddButton 
                  type="primary" 
                  handleClick={props.handleClick}>Créer la liste </AddButton>
                  ]}
          > 
          <NewForm 
            changeName={props.changeName}
            changeColor={props.changeColor}
            listName={props.listName}
            listColor={props.listColor}
          />
         
          </Modal>
        </div>
    )
}
