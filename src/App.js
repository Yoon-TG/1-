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
                <img src={process.env.PUBLIC_URL+'/images/cart.png'} style={{width:20}}></img>
                <img src={process.env.PUBLIC_URL+'/images/person.png'} style={{width:25}}></img>
              </div>
            </div>
          </div>
        </nav>

        <div className='banner'>
          <span>
          <p>못생겨도 맛있다</p>
          <p>친환경 못난이 채소박스</p>
          <p className='under'>조금씩 다양하게, 불필요한 낭비없이</p>
          <button>시작하기</button>
          </span>
        </div>

        <div>
          {/* 이미지 파일 추가하기 */}
        </div>

        <div>
          {/* 지속 가능한 식탁~ */}
        </div>
    </div>
  );
}

export default Main;
