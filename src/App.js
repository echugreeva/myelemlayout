import logo from './logo.svg';
// import './App.css';
import { useState, createContext } from 'react'
import { Route, Routes } from 'react-router-dom';


import { Layout, Space } from 'antd';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Websites from './components/Websites'
import AiBotHome from './components/AiBot';

export const AppContext = createContext()
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
  color: '#108ee9',
  backgroundColor: '#fff',
  width: '100vw'

};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  height: '100%',
  borderRight: '1px solid #d5d8dc',
  backgroundColor: '#fff',
  // width: 'max-content'

};


function App() {
  const [show, setShow] = useState(false)
  const [chosenBot, setChosen] = useState('')


  return (

    <AppContext.Provider value={{show, setShow,chosenBot, setChosen}}>
      <Layout style={{ height: '100vh', width: '100vw' }}>
        <Nav />
        <Layout hasSider style={{ height: '100vh' }}>
          <Sider style={siderStyle}><Sidebar /></Sider>
          <Routes>
            <Route path="/" element={<Content style={contentStyle}><AiBotHome /></Content>} />
            <Route path="/website" element={<Content style={contentStyle}><Websites /></Content>} />
            <Route path="/bots" element={<Content style={contentStyle}><AiBotHome /></Content>} />

          </Routes>

        </Layout>
      </Layout>
    </AppContext.Provider>


  );
}

export default App;
