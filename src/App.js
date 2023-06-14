import logo from './logo.svg';
// import './App.css';
import { useState, createContext,useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';

import { addToLocalStorage } from './helpers/localStorage';
import { Layout, Space } from 'antd';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Websites from './components/Websites'
import AiBotHome from './components/AiBot';

export const AppContext = createContext();
const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
  fontFamily: 'DM Sans'
};
const contentStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#108ee9',
  backgroundColor: '#F1F2F3',
  width: '100vw',
  fontFamily: 'DM Sans'

};
const siderStyle = {
  display: 'flex',
  textAlign: 'left',
  lineHeight: '120px',
  justifyContent:'center',
  height: '100%',
  borderRight: '1px solid #d5d8dc',
  backgroundColor: '#fff',
  fontFamily: 'DM Sans',

  
  //  maxWidth: 'max-content',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '40px 0px',

  width: '256px',
  // height: 848px;

  /* Basic / White */


  // boxShadow: 'inset -1px 1px 0px #F1F2F3',

};


function App() {
  // 
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
      color: 'pink',
      address: 'elementor.com',
      created: '14-06-2023',
      image: 'https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      pages:'1000',
      status: 'active',


    }]
  )
  
  const [toggle, setToggle]=useState(1)
  
  
  useEffect (()=> {
    addToLocalStorage('bots',bots)
  },[toggle])

  return (

    <AppContext.Provider value={{ bots, setBots,toggle, setToggle}}>
      <Layout style={{ height: '100vh', width: '100vw' }}>
        <Nav />
        <Layout hasSider style={{ height: '100vh' }}>
          <Sider style={siderStyle} width={300}><Sidebar /></Sider>
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
