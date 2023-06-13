import {Card} from 'antd';
import BotMenu from './BotMenu';

const CardStyle = {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyItem: 'center',
    alignContent: 'center'
    

}

const ImgStyle = {
  width:'300px', height:'100px', objectFit:'contain'
}

const BotCard = ({data}) => {
  return (
    <Card   
    style={{width:'100%'}}
    // title="Default size card"
    // extra={<a href="#">More</a>}  
  >
    <div style={CardStyle}>
      <div>
        <img src="https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={ImgStyle}></img>
        
      </div>
      <div>Websitename/BotName</div>
      <div>Live Icon / Scaning Progress</div>
      <div>pages indexed</div>
      <BotMenu id = {data.name}/>
    </div>
    
  </Card>
  )
    
}

export default BotCard