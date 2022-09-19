import logo from './logo.svg';
import './App.css';

function Main() {
  return (
    <div class="navbar">
        <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL+'/test.jpg'}></img>
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">미션</a>
            <a class="nav-link" href="#">이용방법</a>
            <a class="nav-link" href="#">못난이상점</a>
            <a class="nav-link disabled">레시피</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Main;
