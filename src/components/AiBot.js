import { useState, useEffect } from 'react'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/localStorage'
import BotCreationPopUp from './BotCreationPopUp'
import BotCard from './BotCard'
import BotMenu from './BotMenu'
import { Input, Select } from 'antd';

const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItem: 'center',
    margin: '0 2rem'
}
const { Search } = Input;
const onSearch = (value) => console.log(value);

const AiBotHome = () => {
    const [bots, setBots] = useState(
        //  getFromLocalStorage('bots') ||
        [{
            id: 1,
            name: 'myBot',
            site: 'mySite',
            pagesIndexed: 1000,
            urlIn: [],
            urlEx: [],
            greeting: "Hello",
            color: 'pink'

        }]
    )

    useEffect(() => {
         setBots(getFromLocalStorage('bots'))
    }, [bots])

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div >

            <div style={divStyle}>
                <h1>My AI Bots</h1>
                <div style={divStyle}>
                    <Search
                        placeholder=""
                        onSearch={onSearch}
                        style={{
                            // width: 200,
                        }}
                    />
                    <BotCreationPopUp />
                </div>

            </div>
            <div style={divStyle}>
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
            </div>
            {
                bots.map(bot => {
                    return (
                        <div style={divStyle}>
                            <BotCard data={bot}/>
                        </div>
                    )
                })
            }




        </div>
    )
}

export default AiBotHome