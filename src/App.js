import './App.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
import MainPage from './components/main.js';
import AboutUs from './components/aboutUs.js';
import Manual from './components/manual.js';
import Store from './components/store.js';
import Review from './components/Review.js';
import FAQ from './components/FAQ.js';
import ManualMain from './components/ManualMain.js';
import Login from './components/login.js';

function Main() {

  let navigate = useNavigate();

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
            <Nav.Link href="/manual/">이용방법</Nav.Link>
            <Nav.Link href="/store">못난이 상점</Nav.Link>
            <Nav.Link className='cartImg' onClick={()=>{
              alert("먼저 로그인하세요!")
            }}>
              <img src={process.env.PUBLIC_URL+'/navImg/cart.png'}></img>
            </Nav.Link>
            <Nav.Link className='personImg' onClick={()=>{
              alert("먼저 로그인하세요!");
              navigate('/login');
            }}>
              <img src={process.env.PUBLIC_URL+'/navImg/person.png'}></img>
            </Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </div>  

      <Routes>
        <Route path='*' element={<div style={{width:'auto', height:'300px', textAlign:'center', position:'relative', top:'100px',fontSize:'40px'}}> 이런! 잘못된 경로입니다.</div>} />
        <Route path='/' element={<MainPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/manual' element={<Manual />}>
          <Route path='/manual' element={<ManualMain />} />
          <Route path='/manual/FAQ' element={<FAQ />} />
          <Route path='/manual/review' element={<Review />} />
        </Route>
        <Route path='/store' element={<Store />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <div className='footer'>
        <button className='askButton' onClick={()=>{
          alert('먼저 로그인하세요.')
        }}>문의하기</button>
        <button className='FAQButton' onClick={()=>{
          navigate("/manual/FAQ")
        }}>자주 묻는 질문</button>

        <p>어글리어스 고객센터<span className='footerRightTxt'>02.1234.5678</span></p>
        
        <p>월-목요일 <span className='footerRightTxt'>11:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</span></p>
        <p>금요일        <span className='footerRightTxt'>09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</span></p>
        <p>토·일·공휴일 <span className='footerRightTxt'>휴무</span></p>
        </div>

    </div>
  );
}

export default Main;
