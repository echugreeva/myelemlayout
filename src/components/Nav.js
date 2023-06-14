import { Layout, Space } from 'antd';
import logo from '../media/logo.svg';
import NavMenu from './NavMenu';
const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {

 


  
    backgroundColor: '#fff',
    // paddingLeft: '2.5rem',
    // paddingRight: '2.5rem',
    padding: '14px 40px',
    gap: '271px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #d5d8dc',
    height: '60px',
    minHeight: '60px',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
   

}
  


  const Nav =()=> {
    return (
        <Header style={headerStyle}>
          <img src={logo} style={{height:'2em'}}/>
          <NavMenu/>
        </Header>
    )
  }

  export default Nav