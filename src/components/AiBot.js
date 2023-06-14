import { useState, useEffect, useContext } from 'react'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'
import BotCreationPopUp from './BotCreationPopUp'
import BotCard from './BotCard'
import BotMenu from './BotMenu'
import { Input, Select, Table } from 'antd';
import { AppContext } from '../App'
import magGlass from '../media/glass.svg'
import layoutOp from '../media/layoutIcon.svg'
import styled from 'styled-components'
import threedots from '../media/Shape.png'
import BotMenuDots from './BotMenuDots'
import progressIcon from  '../media/Oval Copy 2 (Stroke).png'

const divStyleMain = {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItem: 'center',
    margin: '2.5rem 3.5rem',
    alignItems: 'center'

}


const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItem: 'center',

    alignItems: 'center'

}


const h1Style = {
    fontStyle: 'normal',
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '120%',
    /* identical to box height, or 34px */

    letterSpacing: '-0.02em',

    /* Gray/Selected/700 */

    color: '#3A3F45',
}
const { Search } = Input;
const onSearch = (value) => console.log(value);

const AiBotHome = () => {
    const { bots, setBots, toggle, setToggle } = useContext(AppContext)
    //  getFromLocalStorage('bots') ||


    useEffect(() => {
        setBots(getFromLocalStorage('bots'))
    }, [toggle])

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const ImgStyle = {
        width: '150px', height: '70px', objectFit: 'contain'
    }

    const StyledTable = styled(Table)`
    && {
      border: none;
      background-color: #fff;



      .ant-table-thead > tr > th {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        border-bottom: none;
        border-inline-end:none;
        background-color: #fff;
        color: #69727D;
      }
  
      .ant-table-tbody > tr > td {
        font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 120%;
        border-top: none;
        border-bottom: 1px solid #e8e8e8;
        color: #525861;
      }
  
      .ant-table-tbody > tr:first-child > td {
        border-top: 1px solid #e8e8e8;
      }
      
      ant-table-tbody > tr > td: {
        border-inline-end: none;
      }
    }
  `;


    const columns =
        [{
            title: '',
            dataIndex: 'image',
            key: 'image',
            render: text => <img style={ImgStyle} src={text} />,
        }, {
            title: 'Website address',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: 'Created on',
            dataIndex: 'created',
            key: 'created',
        },
        {
            title: 'Pages indexed',
            dataIndex: 'pages',
            key: 'pages',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => <badge className={record.status}><img src={progressIcon} style={{paddingTop: '2px', marginRight: '2px'}}/>{record.status}</badge>
        },

        {
            title: 'Quick actions',
            dataIndex: 'actions',
            key: 'actions',
            className: 'actions',
            render: (text, record) => <div><BotMenu id={record.name}/>
            <BotMenuDots/>
            {/* <img id='three-dots' src={threedots} /> */}
            </div>
        },
        // {
        //     title: '',
        //     dataIndex: 'more-actions',
        //     key: 'more-actions',
        //     render: (text, record) => <BotMenuDots/>
        // },

        ]

    // const data = bots.map((bot, i) => {

    //     {
    //          key: bot[i + 1];

    //         name: bot.name;


    //     }
    // }





    // <img src="https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={ImgStyle}></img>

    {/* </div >
      <div>Websitename/BotName</div>
      <div>Live Icon / Scaning Progress</div>
      <div>pages indexed</div>
      <BotMenu id = {data.name}/>
    </div > */}

    return (
        <div >

            <div style={divStyleMain}>
                <h1 style={h1Style}>Chatbots</h1>
                <div style={divStyle}>
                    {/* <Search
                        placeholder=""
                        onSearch={onSearch}
                        style={{
                            // width: 200,
                        }}
                    /> */}
                    <img src={magGlass} style={{ height: '1.5em', margin: '0 1em' }} />
                    <img src={layoutOp} style={{ height: '1.5em', margin: '0 1em' }} />
                    <BotCreationPopUp />
                </div>

            </div>
            {/* <div style={divStyle}>
                <div>
                    <button>x</button>
                    <button>x</button>
                    <button>x</button>
                </div>
                <Select
                    defaultValue="Date created"
                    style={{
                        width: 'max-content',
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        {
                            value: 'Yiminghe',
                            label: 'yiminghe',
                        },
                        {
                            value: 'disabled',
                            label: 'Disabled',
                            disabled: true,
                        },
                    ]}
                />
            </div> */}
            <div style={{paddingRight:'3.5rem', paddingLeft:'3.5rem' }}>
            <StyledTable pagination={false} columns={columns} dataSource={bots} />
            </div>


            


            {/* {
            bots.map(bot => {
                return (
                    <div style={divStyleMain}>
                        <BotCard data={bot} />
                    </div>
                )
            })
        } */}




        </div>
    )
}

export default AiBotHome