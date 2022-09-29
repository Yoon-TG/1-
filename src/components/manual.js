import '../compCss/manual.css';

import { Outlet, useNavigate } from "react-router-dom";


function Manual(){

  let navigate = useNavigate();
  
  return(
        <div className='manual'>
          <div className="manualMainTopBanner">
                <p><span>똑똑 채소 왔어요!</span></p>
                <p className='bannerHeader'>합리적 가격, 선물같은 설렘 <br/>
                어글리어스 채소박스</p>
                <a href="/login">
                    <button onClick={()=>{
                      alert("먼저 로그인하세요!")
                    }}>시작하기</button>
                </a>
          </div>

          <div className='manualNav'>
              <button onClick={()=>{
                navigate("/manual")
              }}>이용방법</button>
              <button onClick={()=>{
                navigate("/manual/FAQ")
              }}>자주 묻는 질문</button>
              <button disabled>리뷰</button>
          </div>
          <Outlet />
        </div>
    )
}



export default Manual;