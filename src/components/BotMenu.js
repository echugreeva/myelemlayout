import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { getFromLocalStorage, addToLocalStorage } from '../helpers/localStorage';
import { useState, useContext } from 'react'
import AppContext from 'antd/es/app/context';





const BotMenu = ({ data }) => {



    const { show, setShow, chosenBot, setChosen } = useContext(AppContext)

    const handleManage = () => {
        setShow(true)
        setChosen(data)
    }

    const items = [
        {
            label: (<div style={{ display: 'flex' }}>

                <div>
                    Manage bot
                </div>

            </div>

            ),
            key: '0',

        },
        {
            type: 'divider',
        },
        {
            label: <div>Embed bot</div>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <div style={{ display: 'flex' }}
            // onClick={()=>{
            //     let bots = getFromLocalStorage('bots')
            //     bots = bots.filter(bot=>bot.name !== data.name)
            //     addToLocalStorage('bots', bots)
            // }}

            > Delete bot

            </div>,
            key: '3',
        },
    ];


    const DropdownStyle = {

        color: '#d5d8dc',

        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',

        marginLeft: 'auto',


    }

    
    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => {

                e.preventDefault()
                // setChosen(data)
            }}>
                <Space>
                    <div style={{ display: 'flex' }}>
                        <div>Manage Bot</div>
                    </div>

                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    )
}

export default BotMenu

