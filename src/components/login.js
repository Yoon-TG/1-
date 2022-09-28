import '../compCss/login.css';
import { useState } from 'react';
import { Collapse, Form, Button } from 'react-bootstrap';


function Login(){

    const [showLog, setShowLog] = useState(false);

    return(
    <div>
        <div className='loginCon'>
        <p className='bannerHeader'>로그인·회원가입</p>
        <div className='kakaoLog' />
        <p onClick={()=>{
            setShowLog(!showLog)
        }}  aria-controls="example-collapse-text"
        aria-expanded={showLog} 
        style={{cursor:"pointer"}}>이메일로 계속하기 ∨</p>
        
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
                        alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
                        
                    }}>
                        로그인
                    </Button>
                </Form>
            </div>
        </Collapse>
        </div>
    </div>
)
}



export default Login;