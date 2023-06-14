import {useState, useEffect, useContext} from'react'

import { Button, Modal, Form, Input, Radio } from 'antd';

import BotCreationForm from './BotCreationForm1'



const ManageBotPopUp = () => {
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
            <div onClick={()=>{showModal()}}>Manage bot</div>
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

export default ManageBotPopUp