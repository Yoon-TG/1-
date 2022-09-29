import '../compCss/login.css';
import { useState } from 'react';
import { Collapse, Form, Button } from 'react-bootstrap';
import { Navigate, useHref, useNavigate } from 'react-router-dom';


function Login(){

    let navigate = useNavigate();

    const [showLog, setShowLog] = useState(false);

    return(
    <div>
        <div className='loginCon'>
        <p className='bannerHeader'>로그인·회원가입</p>
        <div className='kakaoLog' onClick={()=>{
            window.open("https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fuglyus.co.kr%252Flogin%252Fkakao%252Fcallback%26state%3D%252Fmain%26through_account%3Dtrue%26client_id%3D06e56dda757545d5dd6bd11300c03f5c")
        }} />
        <p ><span onClick={()=>{
            setShowLog(!showLog)
        }}  aria-controls="example-collapse-text"
        aria-expanded={showLog} 
        style={{cursor:"pointer"}}>이메일로 계속하기 ∨</span></p>
        
        <Collapse in={showLog}>
            <div className='emailLog'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="이메일을 입력하세요" /> 
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                    </Form.Group>
                    <p style={{textAlign:'right', cursor:'pointer', color:'gray'}}><span>이메일 찾기</span>&nbsp;<span> 비밀번호 찾기</span></p>
                    
                    <Button variant="primary" type="submit" onClick={()=>{
                        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
                        navigate("/login"); //새로고침 되는 효과 주기
                    }}>
                        로그인
                    </Button>
                    <p>아직 회원이 아니신가요? &nbsp;<span id='sign'>회원가입</span> </p>
                </Form>
            </div>
        </Collapse>
        </div>
    </div>
)
}



export default Login;