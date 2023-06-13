import {Card} from 'antd';

const CardStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'red'

}

const BotCard = () => {
    <Card   
      style={CardStyle}
      title="Default size card"
    //   extra={<a href="#">More</a>}
      
    >
      <p>Blabla</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
}

export default BotCard