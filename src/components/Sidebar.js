import { MailOutlined, SettingOutlined,AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import websitesIcon from '../media/websites.png';
import subsc from '../media/subscrpitions.png';
import botIcon from '../media/Vector.png';
import teamIcon from '../media/People.png'
import businessIcon from '../media/business.png';
import community from '../media/Union.png';



  const items = [

{
    label: 'Websites',
    key: 'website',
    icon: <img src={websitesIcon} />
},
{
    label: 'Subscriptions',
    key: 'subscriptions',
    icon: <img src={subsc} style={{width:'1.5em'}}/>,
},
{
    label: 'Chatbots',
    key: 'bots',
    icon: <img src={botIcon} />,
},
{
    label: 'Teams',
    key: 'teams',
    icon: <img src={teamIcon} style={{width:'1.5em'}}/>,
},
{
    label: 'Brand & Business',
    key: 'brand-and-business',
    icon: <img src={businessIcon} style={{width:'1.5em'}}/>,
},

{
    label: 'Community',
    key: 'community',
    icon: <img src={community} style={{width:'1.5em'}}/>,
},


  
    
  ];


  const Sidebar = () => {

    const navigate=useNavigate()
    
      return (
        <Menu
          onClick={(e)=>{navigate(`/${e.key}`)}}
          style={{
            borderInlineEnd: 'none',
            marginLeft: '2rem'
          }}
          defaultSelectedKeys={['1']}
        //   defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
         
        />
      );
  }




export default Sidebar


