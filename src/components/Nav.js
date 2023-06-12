import { Layout, Space } from 'antd';
import NavMenu from './NavMenu';
const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  
    backgroundColor: '#fff',
    // paddingLeft: '2.5rem',
    // paddingRight: '2.5rem',
    alignItems: 'center',
    display: 'flex',
    borderBottom: '1px solid #d5d8dc',
    height: '60px',
    minHeight: '60px',
    flexWrap: 'nowrap',
    justufyContent: 'flex-start',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    width: '100%',
   

}
  


  const Nav =()=> {
    return (
        <Header style={headerStyle}>
          <p>Elementor</p>
          <NavMenu/>
        </Header>
    )
  }

  export default Nav