import '../compCss/store.css';
import {Container, Row, Col, Figure} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";


function Store(){
    return(
        <div>
            <div className='storeNav'>
                <p>못난이 상점 <span>씩씩한 채소들의 SOS!</span></p>
            </div>

            <div className='storeBanner'>
                <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1607720336444-7990bedc2bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1598639308970-099032f8cf9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1624142550261-6c163e94fd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.pixabay.com/photo/2016/09/10/08/09/fig-tree-1658686_960_720.jpg" />
                </SwiperSlide>               
            </Swiper>
            
            </div>

            <div className='storeMenu'>
                <div className='menu1'>
                    <p id='menuHeader'>요즘 제철 과일</p>
                    <Container>
                        <Row>
                            <Col> 
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src="https://ik.imagekit.io/uhpparxr6/uglyus-prod/5491-040692-9875.jpg?tr=w-471"
                                    />
                                    <p><span>해남</span></p>
                                    <p>무농약 꿀무화과 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 21,900원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src="https://ik.imagekit.io/uhpparxr6/uglyus-prod/5499-559603-5661.jpg?tr=w-471"
                                    />
                                    <p><span>임실</span></p>
                                    <p>유기농 생과/냉동 블루베리</p>
                                    <p><span id="percent">14%</span> 29,900원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src="https://ik.imagekit.io/uhpparxr6/uglyus-prod/49bd2e0d-9283-4d96-94cb-195260889c7c.jpeg?tr=w-471"
                                        style={{objectFit:'contain'}}
                                    />
                                    <p><span>문경</span></p>
                                    <p>무농약 포포 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 30,000원</p>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </div>
            
                <div className='menu2'>
                    <p id='menuHeader'>전체보기</p>
                    <Container>
                        <Row>
                            <Col> 
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/5492-872003-9934.jpeg?tr=w-471'
                                    />
                                    <p><span>영천</span></p>
                                    <p>무농약 유럽상추 1kg</p>
                                    <p><span id="percent">10%</span> 16,200원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/0726297b-91be-4402-aaa8-447320c1480d.jpg?tr=w-471'
                                    />
                                    <p><span>산청</span></p>
                                    <p>무농약 태추단감 2.5kg</p>
                                    <p><span id="percent">19%</span> 22,500원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/39f725ea-d5cb-443e-bdfa-990f9580eb8d.jpeg?tr=w-471'
                                        style={{objectFit:'contain'}}
                                    />
                                    <p><span>부여</span></p>
                                    <p>껍질째 먹는 친환경 사과대추 1kg/2kg</p>
                                    <p><span id="percent">25%</span> 22,200원</p>
                                </Figure>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src="https://ik.imagekit.io/uhpparxr6/uglyus-prod/49bd2e0d-9283-4d96-94cb-195260889c7c.jpeg?tr=w-471"
                                    />
                                    <p><span>문경</span></p>
                                    <p>무농약 포포 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 30,000원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/2435db46-2759-44dc-bcb8-a84f7c518f46.jpg?tr=w-471'
                                        />
                                    <p><span>창원</span></p>
                                    <p>껍질째 먹는 GAP 창원 태추단감 <br/> 부유단감 대봉 2.5kg/4.5kg</p>
                                    <p><span id="percent">14%</span> 24,800원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/dcaacada-03d3-4cde-b554-6ae860d5e340.jpg?tr=w-471'
                                        style={{objectFit:'contain'}}
                                    />
                                    <p><span>익산</span></p>
                                    <p>친환경 쌀 긴급구출 - 신동진 탑마루 <br/>
                                    2kg/10kg</p>
                                    <p><span id="percent">45%</span> 10,900원</p>
                                </Figure>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/5445-254993-6976.jpeg?tr=w-471'
                                    />
                                    <p><span>순천</span></p>
                                    <p>땅콩호박 5kg</p>
                                    <p><span id="percent">22%</span> 24,900원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={300}
                                        height={300}
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/5498-408829-5110.png?tr=w-471'
                                    />
                                    <p><span>양구</span></p>
                                    <p>무농약 대추 방울토마토 2/3/5kg</p>
                                    <p><span id="percent">21%</span> 17,900원</p>
                                </Figure>
                            </Col>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        alt="171x180"
                                        src='https://ik.imagekit.io/uhpparxr6/uglyus-prod/5445-276569-4713.png?tr=w-471'
                                        style={{objectFit:'contain'}}
                                    />
                                    <p><span>아산</span></p>
                                    <p>유기농 참머루포도, 청포도 2kg</p>
                                    <p><span id="percent">12%</span> 28,800원</p>
                                </Figure>
                            </Col>
                        </Row>
                    </Container>
                </div>

                
            </div>
        </div>
    )
}

export default Store;