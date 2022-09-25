import {Container, Navbar, Nav} from 'react-bootstrap';
import {useNavigate, Routes, Route} from 'react-router-dom';
import Main from '../App';

function MainPage(){
  let navigate = useNavigate();

    return(
        <div>
        <div className='FirstBanner'>
          <span>
          <p>못생겨도 맛있다</p>
          <p>친환경 못난이 채소박스</p>
          <p className='under'>조금씩 다양하게, 불필요한 낭비없이</p>
          <button onClick={()=>{
            navigate("/Manual")
          }}>시작하기</button>
          </span>
        </div>

        <div className='secondBanner' >  
          <div className='secondBannerImg'>          
            <img style={{width: 'auto', height:'130px'}} src='https://ik.imagekit.io/uhpparxr6/main/main_vp/main_vp_pc_cBSZrC968.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655786748538&ik-sdk-version=react-1.1.1'></img>
          </div>
          <div>
            <span className='leftText'>이렇게 많은 분들이</span>
            <span className='rightText'>전체 만족도&nbsp; &nbsp;</span>
            <span className='rightText'>&nbsp;전체 리뷰 수</span>
            <br />
            <span className='leftText'>지속 가능한 식탁을 만들고 있어요!</span>
            <span className='rightTextNum'>4.8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className='rightTextNum'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7257</span>
            <div className='blankSmall'></div>
          </div>

          {/* <div className='aniImg'>
            <img src="https://ik.imagekit.io/uhpparxr6/pc_review_thumb-2_PxTishY16.png?ik-sdk-version=react-1.1.1" />
          </div> */}
          <button className='secondBannerButton' onClick={()=>{
            navigate("/Manual#review")
          }}>모든 리뷰 보기&nbsp;&nbsp;&nbsp;→</button>
        </div>

        <div className='thirdBanner'>
          <img className='leftImg'src='https://ik.imagekit.io/uhpparxr6/main-potato_r1bCa_tdt.jpg?ik-sdk-version=react-1.1.1'></img>
          <img className='rightImg' src='https://ik.imagekit.io/uhpparxr6/main/Group_4654_GSbTNC1RF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660614621280&ik-sdk-version=react-1.1.1'></img>
        </div>

        <div className='fourthBanner'>
          <p className='bannerHeader'>이들이 못난이가 된 사연</p>
          <img src='https://ik.imagekit.io/uhpparxr6/pc_vegetable_stories_type_B_ml8MCK4Oj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655081841582&ik-sdk-version=react-1.1.1'></img>
        </div>
  
        <div className='fifthBanner'>
          <div className='fifthBannerImg' /> 
            <p>이렇게 해결해요</p>
            <p className='bannerHeader'>생산자와 소비자, 환경에도<br/>
            더 이로운 방식으로
            </p>
            <div className='fifthBannerMain'>
              <div>
                <p>
                  <div className='fifthBannerCircle'></div>
                  <span style={{fontWeight:'bold', fontSize:'24px', position:'relative', left:'10px'}}>1</span>
                  <span style={{fontWeight:'bold', position:'relative', left:'45px', marginBottom:'40px'}}>수확 직후 직매입</span><br/>
                  <span style={{position:'relative', left:'60px'}}>판로를 찾지 못한 농산물들을<br/>
                  농부님께 수확 2~7일 이내 직접 공급받아요.</span>
                </p>
                
              </div>
              <div>
                <p>
                  <div className='fifthBannerCircle'></div>
                  <span style={{fontWeight:'bold', fontSize:'24px', position:'relative', left:'10px'}}>2</span>
                  <span style={{fontWeight:'bold', position:'relative', left:'45px', marginBottom:'40px'}}>조금씩 다양하게 소포장</span><br/>
                  <span style={{position:'relative', left:'60px'}}>
                  가구 수에 맞게 소량으로 포장해요.</span>
                </p>
              </div>
              <div>
                  <div className='fifthBannerCircle'></div>
                  <span style={{fontWeight:'bold', fontSize:'24px', position:'relative', left:'10px'}}>3</span>
                  <span style={{fontWeight:'bold', position:'relative', left:'45px', marginBottom:'40px'}}>집 앞까지 정기배송</span><br/>
                  <span style={{position:'relative', left:'60px'}}>
                  중간 유통 절차없이 즉시 보내드려요.</span>
              </div>
              <br />
              <p style={{position:'relative', left:'500px', color:'#EB6440', cursor:'pointer'}} onClick={()=>{
                navigate("/manual");
              }}>구독 신청하기&gt;</p>
            </div>
            <div className='blankBig'/>
        </div>

        <div className='sixthBanner'>
          <div className='sixthBannerImg'>
            <img src='https://ik.imagekit.io/uhpparxr6/main/main-vegetables-pc_Nel5vcXXo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659941827894&ik-sdk-version=react-1.1.1' />
          </div>
            <p>이렇게 보내드려요</p>
            <p className='bannerHeader'>가장 신선한 제철 채소를<br/>
            소량씩 즐겨요
            </p>
            <div className='sixthBannerMain'>
              <p>
                <img src="https://ik.imagekit.io/uhpparxr6/main/Frame_4774_irxmm28Db.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659941162686&ik-sdk-version=react-1.1.1"></img>
                &nbsp; 7~10종 무농약·유기농 채소
              </p>
              <p>
                <img src="https://ik.imagekit.io/uhpparxr6/main/Frame_4774_1__BUUTXzfH9.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659941162743&ik-sdk-version=react-1.1.1"></img>
                &nbsp; 원하지 않는 채소 제외
              </p>
              <p>
                <img src="https://ik.imagekit.io/uhpparxr6/main/Frame_4774_2__XtGpKLkPU.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659941162900&ik-sdk-version=react-1.1.1"></img>
                &nbsp; 이번 주 구출 품목 별도 추가 
              </p>
            </div>
        </div>
        
        <div className='seventhBanner'>
          <p className='bannerHeader'>못난이 채소박스 구독,<br/>
            이렇게 진행돼요
          </p>
          <p>7~10종의 다양한 못난이 채소들을 구출해 보내드려요. <br/>
            미리 품목을 알 수 있고 배송 일정을 자유롭게 조정할 수 있어요.
          </p>
          <div className='seventhBannerImg'>
            <img src='https://ik.imagekit.io/uhpparxr6/how-to-use-subscription/pc_how_to_use_subscription_fihXmhbMl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655344454300&ik-sdk-version=react-1.1.1'/>
          </div>
        </div>

      <div className='seventhBannerButtonBox'>
          <button className='seventhBannerButton' onClick={()=>{
                navigate("/manual");
              }}>시작하기</button>
      </div>

      <div className='lastBanner'>
        <p>미션</p>
        <p className='bannerHeader'>지속가능한 식탁을 만듭니다.</p>
        <p>
          농산물의 폐기 문제는 지구 온난화의 원인이 되고 물과 비료, 노동 에너지의 낭비로 이어집니다.<br/>
          농산물들의 제 가치를 찾아, 음식물 폐기는 줄이고 친환경 땅을 늘림으로써<br/>
          소비자의 건강한 식탁과 미래를 위한 환경이 지속가능하게 합니다.
        </p>
        <p style={{cursor:'pointer'}} onClick={()=>{
          navigate("/aboutUs")
        }}>더 알아보기&gt;</p>
        <br/>
        &nbsp;
        <p className='bannerHeader' style={{wordSpacing:'45px'}}>339,664kg+ 259 208,508개</p>
        <p >&nbsp;구출한 농산물 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;함께 하는 농가  &nbsp; &nbsp; &nbsp;아낀 플라스틱</p>

      </div>

      {/* <div className='footer'>
        <button className='askButton' onClick={()=>{
          alert('먼저 로그인하세요.')
        }}>문의하기</button>
        <button className='FAQButton' onClick={()=>{
          navigate("/manual#FAQ")
        }}>자주 묻는 질문</button>

        <p>어글리어스 고객센터<span className='footerRightTxt'>02.1234.5678</span></p>
        
        <p>월-목요일 <span className='footerRightTxt'>11:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</span></p>
        <p>금요일        <span className='footerRightTxt'>09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</span></p>
        <p>토·일·공휴일 <span className='footerRightTxt'>휴무</span></p>
        </div> */}
      </div>
    )
}

export default MainPage;