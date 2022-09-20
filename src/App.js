import logo from './logo.svg';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

function Main() {
  return (
    <div>
      <div className='navbar'>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={process.env.PUBLIC_URL+'/images/test.jpg'} style={{width:80}}></img>
            </a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">미션</a>
                <a class="nav-link" href="#">이용방법</a>
                <a class="nav-link" href="#">못난이상점</a>
                <a class="nav-link" href="#">레시피</a>
              </div>
              <div class="rightsideHeader">
                <img src={process.env.PUBLIC_URL+'/images/cart.png'} style={{width:20}} alt='<a href="https://www.flaticon.com/kr/free-icons/" title="카트 아이콘">카트 아이콘  제작자: uicon - Flaticon</a>'></img>
                <img src={process.env.PUBLIC_URL+'/images/person.png'} style={{width:25}} alt='<a href="https://www.flaticon.com/kr/free-icons/" title="사람 아이콘">사람 아이콘  제작자: spaceman.design - Flaticon</a>'></img>
              </div>
            </div>
          </div>
        </nav>
      </div>  

        <div className='FirstBanner'>
          <span>
          <p>못생겨도 맛있다</p>
          <p>친환경 못난이 채소박스</p>
          <p className='under'>조금씩 다양하게, 불필요한 낭비없이</p>
          <button>시작하기</button>
          </span>
        </div>

        <div className='secondBanner' >  
          <div className='secondBannerImg' style={{textAlign: 'center'}}>
            <img style={{width: 'auto', height:'130px'}} src='https://ik.imagekit.io/uhpparxr6/main/main_vp/main_vp_pc_cBSZrC968.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655786748538&ik-sdk-version=react-1.1.1'></img>
          </div>
          <div className='blankBig'></div>
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
          <div className='secondBannerAni'>
            <img src='https://ik.imagekit.io/uhpparxr6/pc_review_thumb-2_PxTishY16.png?ik-sdk-version=react-1.1.1' />
          </div>
          <div className='blankSmall'></div>
          <button className='secondBannerButton'>모든 리뷰 보기&nbsp;&nbsp;&nbsp;→</button>
        </div>
        <div className='blankBig'></div>

        <div className='thirdBanner'>
          <img className='leftImg'src='https://ik.imagekit.io/uhpparxr6/main-potato_r1bCa_tdt.jpg?ik-sdk-version=react-1.1.1'></img>
          <img className='rightImg' src='https://ik.imagekit.io/uhpparxr6/main/Group_4654_GSbTNC1RF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660614621280&ik-sdk-version=react-1.1.1'></img>
        </div>
        <div className='blankBig'></div>
        <div className='blankSmall'></div>

        <div className='fourthBanner' style={{textAlign:'center'}}>
          <p className='bannerHeader'>이들이 못난이가 된 사연</p>
          <img src='https://ik.imagekit.io/uhpparxr6/pc_vegetable_stories_type_B_ml8MCK4Oj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655081841582&ik-sdk-version=react-1.1.1'></img>
        </div>
        <div className='blankBig'></div>
  
        <div className='fifthBanner'>
          <div className='fifthBannerImg' /> 
          {/*배너 이미지 */}
          {/* <div className='fifthBannerImg'> */}
                {/* <img src='https://ik.imagekit.io/uhpparxr6/main-solution1.png?ik-sdk-version=react-1.1.1'></img> */}
                {/* <img src='https://ik.imagekit.io/uhpparxr6/main-solution2.png?ik-sdk-version=react-1.1.1'></img>
                <img src='https://ik.imagekit.io/uhpparxr6/main-solution3.png?ik-sdk-version=react-1.1.1'></img> */}
              {/* </div> */}

            <p>이렇게 해결해요</p>
            <p className='bannerHeader'>생산자와 소비자, 환경에도<br/>
            더 이로운 방식으로
            </p>
            <div className='fifthBannerMain'>
              <div>
                <p>
                  <div className='fifthBannerCircle'></div>
                  <span style={{fontWeight:'bold', fontSize:'24px', position:'relative', left:'10px', zIndex:'1'}}>1</span>
                  <span style={{fontWeight:'bold', position:'relative', left:'45px', marginBottom:'40px'}}>수확 직후 직매입</span><br/>
                  <span style={{position:'relative', left:'60px'}}>판로를 찾지 못한 농산물들을<br/>
                  농부님께 수확 2~7일 이내 직접 공급받아요.</span>
                </p>
                
              </div>
              <div>
                <p>
                  <div className='fifthBannerCircle'></div>
                  <span style={{fontWeight:'bold', fontSize:'24px', position:'relative', left:'10px', zIndex:'1'}}>2</span>
                  <span style={{fontWeight:'bold', position:'relative', left:'45px', marginBottom:'40px'}}>조금씩 다양하게 소포장</span><br/>
                  <span style={{position:'relative', left:'60px'}}>
                  가구 수에 맞게 소량으로 포장해요.</span>
                </p>
                {/* <p style={{fontWeight:'bold', fontSize:'24px'}}>2</p>
                <p>조금씩 다양하게 소포장</p>
                <p>가구 수에 맞게 소량으로 포장해요.</p> */}
              </div>
              <div>
                  <div className='fifthBannerCircle'></div>
                  <span style={{fontWeight:'bold', fontSize:'24px', position:'relative', left:'10px', zIndex:'1'}}>3</span>
                  <span style={{fontWeight:'bold', position:'relative', left:'45px', marginBottom:'40px'}}>집 앞까지 정기배송</span><br/>
                  <span style={{position:'relative', left:'60px'}}>
                  중간 유통 절차없이 즉시 보내드려요.</span>
                {/* <p style={{fontWeight:'bold', fontSize:'24px'}}>3</p>
                <p>집 앞까지 정기배송</p>
                <p>중간 유통 절차없이 즉시 보내드려요.</p> */}
              </div>
              <br />
              <p style={{position:'relative', left:'500px', color:'#EB6440'}}>구독 신청하기&gt;</p>
            </div>
            <div className='blankBig'/>
        </div>

        <div className='sixthBanner'>
          <div className='sixthBannerImg' />
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

        <div className='sixthBannerButtonBox'>
          <button className='sixthBannerButton'>시작하기</button>
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

      <div className='eightthBanner'>
        <p>생산자님들의 Thank you letter</p>
          <div className='eightthBannerCarousel'>  
          </div>
      </div>
      <div className='eightthBannerButtonBox'>
        <p>못생겨도 맛있는 친환경 못난이 채소박스, 어글리어스</p>
        <button className='eightthBannerButton'>시작하기</button>
      </div>





    </div>
  );
}

export default Main;
