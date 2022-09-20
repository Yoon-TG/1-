import logo from './logo.svg';
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

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
            <span className='rightText'>전체 만족도   </span>
            <span className='rightText'>   전체 리뷰 수</span>
            <br />
            <span className='leftText'>지속 가능한 식탁을 만들고 있어요!</span>
            <span className='rightText'>4.8      </span>
            <span className='rightText'>7257</span>
            <div className='blankSmall'></div>
          </div>
          <div className='secondBannerAni'>
            <img src='https://ik.imagekit.io/uhpparxr6/pc_review_thumb-2_PxTishY16.png?ik-sdk-version=react-1.1.1' />
          </div>
          <div className='blankSmall'></div>
          <button className='secondBannerButton'>모든 리뷰 보기  →</button>
        </div>
        <div className='blankBig'></div>

        <div className='thirdBanner'>
          <img className='leftImg'src='https://ik.imagekit.io/uhpparxr6/main-potato_r1bCa_tdt.jpg?ik-sdk-version=react-1.1.1'></img>
          <img className='rightImg' src='https://ik.imagekit.io/uhpparxr6/main/Group_4654_GSbTNC1RF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660614621280&ik-sdk-version=react-1.1.1'></img>
        </div>
        <div className='blankBig'></div>
        <div className='blankSmall'></div>

        <div className='fourthBanner' style={{textAlign:'center'}}>
          <p>이들이 못난이가 된 사연</p>
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
          <p style={{fontWeight:'bold', fontSize:'24px'}}>생산자와 소비자, 환경에도<br/>
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
            <p style={{position:'relative', left:'500px', color:'#EB6440'}}>구독 신청하기></p>
          </div>
          <div className='blankBig'/>
        </div>











        
    </div>
  );
}

export default Main;
