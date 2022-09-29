import { useState } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {useNavigate, Routes, Route} from 'react-router-dom';
import '../compCss/main.css';

function MainPage(){
  let navigate = useNavigate();

  

  const colorCh1 = document.querySelector(".fifthBannerText1 .fifthBannerTopic");
  const colorCh2 = document.querySelector(".fifthBannerText2 .fifthBannerTopic");
  const colorCh3 = document.querySelector(".fifthBannerText3 .fifthBannerTopic");




    return(
      <div>
        <div className='FirstBanner'>
          <p>못생겨도 맛있다</p>
          <p>친환경 못난이 채소박스</p>
          <p className='under' style={{fontWeight:'100', fontSize:'15px', color:'#707070'}}>조금씩 다양하게, 불필요한 낭비없이</p>
          <a href='/manual'>
            <button>시작하기</button>
          </a>
        </div>


        <div className='firSecBetweenBanner'>          
            <img style={{width: 'auto', height:'130px'}} src='https://ik.imagekit.io/uhpparxr6/main/main_vp/main_vp_pc_cBSZrC968.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655786748538&ik-sdk-version=react-1.1.1'></img>
        </div>
        
        <div className='secondBanner' > 
          <div className='secondBannerText'>
            <p className='leftText'>이렇게 많은 분들이
              <span className='rightText'>전체 만족도&nbsp; &nbsp; </span>
              <span className='rightText'>&nbsp;전체 리뷰 수</span>
              </p>
            <p className='leftText'>지속 가능한 식탁을 만들고 있어요!
              <span className='rightTextNum1'>4.8</span>
              <span className='rightTextNum2'>7257</span>
            </p>
          </div>
          
          <div className='aniImg'>
            <img id='img1' src="https://ik.imagekit.io/uhpparxr6/pc_review_thumb-2_PxTishY16.png?ik-sdk-version=react-1.1.1" />
            <img id='img2' style={{overflowY:'hidden'}} src="https://ik.imagekit.io/uhpparxr6/pc_review_thumb-2_PxTishY16.png?ik-sdk-version=react-1.1.1" />
          </div>
          
          <button className='secondBannerButton' disabled onClick={()=>{
            navigate("/Manual/review")
          }}>모든 리뷰 보기 &nbsp;→</button>
        </div>

        <div className='thirdBanner'>
          <img className='leftImg'src='https://ik.imagekit.io/uhpparxr6/main-potato_r1bCa_tdt.jpg?ik-sdk-version=react-1.1.1'></img>
          <img className='rightImg' src='https://ik.imagekit.io/uhpparxr6/main/Group_4654_GSbTNC1RF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660614621280&ik-sdk-version=react-1.1.1'></img>
        </div>

        <div className='fourthBanner'>
          <p className='bannerHeader'>이들이 못난이가 된 사연</p>
          <img src='https://ik.imagekit.io/uhpparxr6/pc_vegetable_stories_type_B_ml8MCK4Oj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655081841582&ik-sdk-version=react-1.1.1'></img>
        </div>


          {/* 연습~~ */}

          <div className='fifthBanner'>
            <div className='fifthBannerImg'>
              <img src="https://ik.imagekit.io/uhpparxr6/main-solution1.png?ik-sdk-version=react-1.1.1"></img>
              <img src=""></img>
              <img src=""></img>
            </div>
            <p style={{color:'#707070', lineHeight:'0px', position:'relative', top:'5px' }}>이렇게 해결해요</p>
            <p className='bannerHeader'>
              생산자와 소비자, 환경에도<br/>
              더 이로운 방식으로
            </p> 

              <div className='fifthBannerText1'>
                <div className='fifthBannerCircle'></div>
                <p className='fifthBannerTopic1'>
                  <span className='circleNum'>1</span>
                  <span>수확 직후 직매입</span></p>
                <p className='fifthBannerCon'>판로를 찾지 못한 농산물들을<br/>
                  농부님께 수확 2~7일 이내 직접 공급받아요.</p>        
              </div> 

              <div className='fifthBannerText2'>
                  <div className='fifthBannerCircle'></div>
                <p className='fifthBannerTopic2'>
                  <span className='circleNum'>2</span>
                  <span>조금씩 다양하게 소포장</span></p>
                <p className='fifthBannerCon'>
                가구 수에 맞게 소량으로 포장해요.
                  </p>        
              </div>

              <div className='fifthBannerText3'>
                  <div className='fifthBannerCircle'></div>
                <p className='fifthBannerTopic3'>
                  <span className='circleNum'>3</span>
                  <span>집 앞까지 정기배송</span></p>
                <p className='fifthBannerCon'>
                  중간 유통 절차없이 즉시 보내드려요.
                </p>     
              </div>   
            
              <a href='/manual' 
              style={{position:'relative', top:'0px',left:'350px', textAlign:'left', color:'#EB6440', textDecoration:'none'}}>
                구독 신청하기&gt;
              </a>
        </div>


        <div className='sixthBanner'>
          <div className='sixthBannerImg'>
            <img src='https://ik.imagekit.io/uhpparxr6/main/main-vegetables-pc_Nel5vcXXo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659941827894&ik-sdk-version=react-1.1.1' />
          </div>
            <p style={{color:'#707070', lineHeight:'0px', marginBottom:'30px', position:'relative', top:'10px'}}>이렇게 보내드려요</p>
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
        <a href='/manual'>
          <button className='seventhBannerButton'>시작하기</button>
        </a>
      </div>

      <div className='lastBanner'>
        <p>미션</p>
        <p className='bannerHeader'>지속 가능한 식탁을 만듭니다.</p>
        <p>
          농산물의 폐기 문제는 지구 온난화의 원인이 되고 물과 비료, 노동 에너지의 낭비로 이어집니다.<br/>
          농산물들의 제 가치를 찾아, 음식물 폐기는 줄이고 친환경 땅을 늘림으로써<br/>
          소비자의 건강한 식탁과 미래를 위한 환경이 지속가능하게 합니다.
        </p>
        <a href='/aboutUs' style={{textDecoration:'none', color:'white', fontWeight:'normal'}}>더 알아보기 &gt;</a>
        {/* <p style={{cursor:'pointer'}} onClick={()=>{
          navigate("/aboutUs")
        }}>더 알아보기&gt;</p> */}
        
        <p className='bannerHeader' style={{wordSpacing:'50px', marginTop:'70px'}}>339,664kg+ 259 208,508개</p>
        <p > 구출한 농산물 <span>함께 하는 농가</span>  <span>아낀 플라스틱</span></p>
      </div>
    </div>
  )
}

export default MainPage;