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





const BotMenu = ({ id }) => {
    console.log(id)

    // const {toggle, setToggle}= useContext(AppContext)

    // const { show, setShow, chosenBot, setChosen } = useContext(AppContext)

    // const handleManage = () => {
    //     setShow(true)
    //     setChosen(data)
    // }

//     const items = [
//         {
//             label: (<div style={{ display: 'flex' }}>

               
//                 <ManageBotPopUp/>
                

//             </div>

//             ),
//             key: '0',

//         },
//         {
//             type: 'divider',
//         },
//         {
//             label: <a target='_blank' href="elementor.com">Embed bot</a>,
//             key: '1',
//         },
//         {
//             type: 'divider',
//         },
//         {
//             label: <div style={{ display: 'flex' }}
//             onClick={()=>{
                
//                 let newBots = getFromLocalStorage('bots')
//                 console.log(newBots)
//                 newBots = newBots.filter(bot=>bot.name !== id)
//                 console.log(newBots)
//                 addToLocalStorage('bots', newBots)
//                 // console.log(toggle)
//                 // setToggle(toggle+1)
//             }}

//             > Delete bot

//             </div>,
//             key: '3',
//         },
//     ];


//     const DropdownStyle = {

//         color: '#d5d8dc',

//         alignItems: 'center',
//         display: 'flex',
//         flexDirection: 'row',

//         marginLeft: 'auto',


//     }

    
//     return (
//         <Dropdown menu={{ items }} trigger={['click']}>
//             <a onClick={(e) => {

//                 e.preventDefault()
//                 // setChosen(data)
//             }}>
//                 <Space>
//                     <div style={{ display: 'flex' }}>
//                         <div>Manage Bot</div>
//                     </div>

//                     <DownOutlined />
//                 </Space>
//             </a>
//         </Dropdown>
//     )
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
    <Button>
      Actions <img src={down} style={{width:'1em', marginTop: '0.5em'}}/>
    </Button>
  </Dropdown>
  )
 

}

export default BotMenu

