import {useState, useEffect, useContext} from'react'
import AppContext from '../App';
import { Button, Modal, Form, Input, Radio } from 'antd';

import BotCreationForm from './BotCreationForm'

// const FormItem = Form.Item;

// const CollectionCreateForm = Form.create()(
//   (props) => {
//     const { visible, onCancel, onCreate, form } = props;
//     const { getFieldDecorator } = form;
//     return (
//       <Modal
//         visible={visible}
//         title="Create a new collection"
//         okText="Create"
//         onCancel={onCancel}
//         onOk={onCreate}
//       >
//        <BotCreationForm/>
//       </Modal>
//     );
//   }
// );

const BotCreationPopUp = () => {
  const [show,setShow]=useState(false)
//     const {show, setShow,chosenBot,setChosen} = useContext(AppContext)
    const handleCancel = () => {
      setShow(false);
  
  }

    const showModal = () => {
        setShow(true);
    }
    
// useEffect(()=>{

// },show)
    

        return (
          <div>
            <Button type="primary" onClick={()=>{showModal()}}>+ Create new bot</Button>
            <Modal
            visible={show}
            onCancel={()=>{handleCancel()}}
            destroyOnClose
            footer={null}
            
            >
            <BotCreationForm
            // chosen={chosenBot}
            />
            </Modal>
           
          </div>
        );

    
}

export default BotCreationPopUp