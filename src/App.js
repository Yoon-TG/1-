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
    </div>
  );
}

export default Main;
