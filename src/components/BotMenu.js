import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space,Menu, Button } from 'antd';
import { getFromLocalStorage, addToLocalStorage } from '../helpers/localStorage';
import { useState, useContext } from 'react'
import { AppContext } from '../App'
import ManageBotPopUp from './ManageBotPopUp';
import down from '../media/down.svg'
import embed from '../media/Embed.png'
import pause from '../media/Pause.png'
import update from '../media/Arrow repeat.png'
import EmbedModal from './EmbedModal';





const BotMenu = ({ id }) => {
    console.log(id)

function handleMenuClick(e) {
    console.log('click', e);
  }

const menu = (
    <Menu onClick={handleMenuClick} width={300}>
      <Menu.Item key="1"><div><img src={embed} style={{width:'1.5em'}}/><span><EmbedModal/></span></div></Menu.Item>
      <Menu.Item key="2"><div><img src={update} style={{width:'1.5em'}}/><span>Update index</span></div></Menu.Item>
      <Menu.Item key="3"><div><img src={pause} style={{width:'1.5em'}}/><span>Pause bot</span></div></Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
    <Button>
      Manage bot <img src={down} style={{width:'1em', marginBottom: '-3px', marginLeft: '1em'}}/>
    </Button>
  </Dropdown>
  )
 

}

export default BotMenu

