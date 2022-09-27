import '../compCss/store.css';
import {Container, Row, Col} from 'react-bootstrap';


function Store(){
    return(
        <div>
            <div className='storeNav'>
                <p>못난이 상점 <span>씩씩한 채소들의 SOS!</span></p>
            </div>

            <div className='storeBanner'>
            여기에 슬라이드 추가하기
            </div>

            <div className='storeMenu'>
            <Container>
                <Row>
                    <Col>여기에는 박스 그려두기</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}

export default Store;