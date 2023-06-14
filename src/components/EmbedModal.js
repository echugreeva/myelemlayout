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

const EmbedModal = () => {
  const [show, setShow] = useState(false)
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
      <Button  size='large'onClick={() => { showModal() }}>Embed Chatbot</Button>
      <Modal
        visible={show}
        onCancel={() => { handleCancel() }}
        destroyOnClose
        footer={null}
        style={modalStyle}

      >
        <h1>Embed Chatbot</h1>
        <p>Copy
          Copy and paste this code at the end of the {'&lt;body&gt;'} tag of a page on your website</p>
          <p>{'&lt;<script src="https://app.insite.ai/scripts/insite.js" data-name=“Insite” data-address=“app.insite.ai”. data-id="clfrnibt7004pmc0kw4p6jup4" defer />&gt;'}</p>
      </Modal>

    </div>
  );


}

export default EmbedModal