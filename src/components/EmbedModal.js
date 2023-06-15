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
  fontWeight: '500',
  marginLeft: 'auto'
  
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
      <div onClick={() => { showModal() }}>Embed Bot</div>
      <Modal
        visible={show}
        onCancel={() => { handleCancel() }}
        destroyOnClose
        footer={null}
        style={modalStyle}

      >
        <h1>Embed Chatbot</h1>
        <p>
          Copy and paste this code at the end of the &lt;body&gt; tag of a page on your website</p>
          {/* <pre> */}
            <p style={{backgroundColor:'#F1F2F3', border:'1px solid #BABFC5', padding:"1em, 2em", tesxtAlign: 'center'}}>
            &lt;script 
            src="https://app.insite.ai/scripts/insite.js" data-name='Insite' data-address='app.insite.ai'. data-id="clfrnibt7004pmc0kw4p6jup4" defer /&gt;
            </p>
          {/* </pre> */}
          <Button style={ButtonStyle}>Copy to clipboard</Button>
          
      </Modal>

    </div>
  );


}

export default EmbedModal