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
import threedots from '../media/Shape.png'






const BotMenuDots = ({ id }) => {
    console.log(id)

function handleMenuClick(e) {
    console.log('click', e);
  }

const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1"><div><img src={embed} style={{width:'1.5em'}}/><span>Embed</span></div></Menu.Item>
      <Menu.Item key="2"><div><img src={update} style={{width:'1.5em'}}/><span>Update index</span></div></Menu.Item>
      <Menu.Item key="3"><div><img src={pause} style={{width:'1.5em'}}/><span>Pause bot</span></div></Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
   
       <img src={threedots} style={{height:'1em', marginTop: '0.5em', marginLeft:'1.5rem'}}/>
   
  </Dropdown>
  )
 

}

export default BotMenuDots

