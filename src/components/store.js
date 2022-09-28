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
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>               
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
                                    <p>무농약 꿀무화과 - 1kg/2kg</p>
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
                                    <p><span>해남</span></p>
                                    <p>무농약 꿀무화과 - 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 21,900원</p>
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
                                    <p><span>해남</span></p>
                                    <p>무농약 꿀무화과 - 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 21,900원</p>
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
                                        src="https://ik.imagekit.io/uhpparxr6/uglyus-prod/5491-040692-9875.jpg?tr=w-471"
                                    />
                                    <p><span>해남</span></p>
                                    <p>무농약 꿀무화과 - 1kg/2kg</p>
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
                                    <p><span>해남</span></p>
                                    <p>무농약 꿀무화과 - 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 21,900원</p>
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
                                    <p><span>해남</span></p>
                                    <p>무농약 꿀무화과 - 1kg/2kg</p>
                                    <p><span id="percent">18%</span> 21,900원</p>
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