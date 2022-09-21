import logo from './logo.svg';
import './App.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import MainPage from './components/main.js';
import AboutUs from './components/aboutUs.js';
import Manual from './components/manual.js';
import Store from './components/store.js';


function Main() {

  return (
    <div>
      <div className='navbar'>
        <Navbar>
          <Container>
            <Navbar.Brand className='brandImg' href="/main">
              <img src={process.env.PUBLIC_URL+'/navImg/test.jpg'}></img>
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/aboutUs">소개</Nav.Link>
            <Nav.Link href="/manual">이용방법</Nav.Link>
            <Nav.Link href="/store">못난이 상점</Nav.Link>
            <Nav.Link className='cartImg' href='/main'>
              <img src={process.env.PUBLIC_URL+'/navImg/cart.png'}></img>
            </Nav.Link>
            <Nav.Link className='personImg' href="#">
              <img src={process.env.PUBLIC_URL+'/navImg/person.png'}></img>
            </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </div>  

      <Routes>
        <Route path='*' element={<div style={{textAlign:'center', position:'relative', top:'100px',fontSize:'40px'}}> 이런! 잘못된 경로입니다.</div>} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/manual' element={<Manual />} />
        <Route path='/store' element={<Store />} />
      </Routes>



    </div>
  );
}

export default Main;
