import logo from './logo.svg';
// import './App.css';
import {Route, Routes} from 'react-router-dom';


import { Layout, Space } from 'antd';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';

const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',

  
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  height: '100%',
  borderRight: '1px solid #d5d8dc',
  backgroundColor: '#fff',
  width: 'max-content'

};


function App() {
  return (
  
 
    <Layout style={{height: '100vh', width: '100%'}}>
      <Nav/>
      <Layout hasSider style={{height: '100vh'}}>
        <Sider style={siderStyle}><Sidebar/></Sider>
        <Routes>
          <Route path="/" element = {<Content style={contentStyle}>Content</Content>}/>
          <Route path="/websites" element = {<Content style={contentStyle}>Content</Content>}/>
          <Route path="/bots" element = {<Content style={contentStyle}>Content</Content>}/>

        </Routes>
        
      </Layout>
    </Layout>  


  );
}

export default App;
