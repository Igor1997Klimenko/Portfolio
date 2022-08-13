import Sidebar from './components/Sidebar/Sidebar';
import AboutMe from './components/AboutMe/AboutMe';
import React from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';


function App() {
  return (
  <>
    <Row>
      <Col span={16} push={8}>
      <AboutMe/>
      </Col>
      <Col span={8} pull={16}>
      <Sidebar/>  
      </Col>
    </Row>
  </>
  );
}

export default App;
