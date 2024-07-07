import React from 'react';
import MyNavbar from './components/Navbar';
import PostContent from './components/PostContent';
import SideWidgets from './components/SideWidgets';
import Footer from './components/Footer';
import { Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Container className="mt-5">
        <Row>
          <PostContent />
          <SideWidgets />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
