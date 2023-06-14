import { useState, useEffect, useContext } from 'react'
import AppContext from '../App';
import { Button, Modal, Form, Input, Radio } from 'antd';

import BotCreationForm1 from './BotCreationForm1'
import BotCreationForm2 from './BotCreationForm2'
import BotTwoStepForm from './BotTwoStepForm';

const ButtonStyle = {
  backgroundColor: '#040080',
  color: '#46F2B6',
  padding: '12px 36px',
  gap: '10px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius:'0',
  fontWeight: '500'
  
}

const modalStyle ={
  borderRadius:'0'
}

const BotCreationPopUp = () => {
  const [show, setShow] = useState(false)
  //     const {show, setShow,chosenBot,setChosen} = useContext(AppContext)
  const handleCancel = (x) => {
    setShow(x);

  }

  const showModal = () => {
    setShow(true);
  }

  // useEffect(()=>{

  // },show)


  return (
    <div>
      <Button style={ButtonStyle} size='large'onClick={() => { showModal() }}>+ Create new bot</Button>
      <Modal
        visible={show}
        onCancel={() => { handleCancel(false) }}
        destroyOnClose
        footer={null}
        style={modalStyle}

      >
        {/* <BotCreationForm1 */}
        {/* // chosen={chosenBot} */}
        
        {/* <BotCreationForm2/> */}
        <BotTwoStepForm handleCancel={handleCancel}/>
      </Modal>

    </div>
  );


}

export default BotCreationPopUp