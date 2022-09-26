import { Outlet, useNavigate } from "react-router-dom";


function Manual(){

  let navigate = useNavigate();
  
  return(
        <div style={{width:'100%', height:'auto', position:'relative', top:'60px'}}>
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