import logo from './logo.svg';
import './App.css';

function Main() {
  return (
    <div>
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

        <div >
          <div>
            
          </div>
          
          
        </div>
    </div>
  );
}

export default Main;
