import contentimg from '../media/content.png'
import BotCard from './BotCard'
import { Input } from 'antd';

const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    justifyItem: 'center',
    margin: '0 2rem'
}
const { Search } = Input;
const onSearch = (value) => console.log(value);

const AiBotHome = () => {
    return (
        <div >
            {/* <img src={contentimg} style={{objectFit: 'contain', width: '1000px'}}></img> */}
            <div style={divStyle}>
                <h1>My AI Bots</h1>
                <div style={divStyle}>
                    <Search
                        placeholder=""
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />
                    <button>+ Create a new bot</button>
                </div>

            </div>
            <div style={divStyle}>
                <div>
                    <button>x</button>
                    <button>x</button>
                    <button>x</button>
                </div>
                <p>dropdown</p>
            </div>
            
                <BotCard />
            
        </div>
    )
}

export default AiBotHome