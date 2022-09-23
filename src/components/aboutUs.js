import React, {useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination , Autoplay} from "swiper";

import {Container,Row,Col, Card} from 'react-bootstrap';


function AboutUs(){

    // let [videoName, setVideoNames] = useState(['corn','rice','wheat','bean','carrot1','cucumber','tomato','carrot2']);

    return(
        <div>
            <div className="topBanner">
                <div className="topBannerVideo">
                    <video muted autoPlay controls loop="loops" style={{pointerEvents:'none'}}>
                        <source src={process.env.PUBLIC_URL+'/videos/corn.mp4'} type="video/mp4" />
                        브라우저가 동영상 재생을 지원하지 않습니다.
                    </video>
                </div>
                <div className="topBannerText">
                <p>'못난이 농산물'을 아시나요?</p>
                </div>
            </div>

            <div className='aboutUs_firstBanner'>
                <div className='aboutUs_firstBannerSlider'>
                    <Swiper 
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">
                        <SwiperSlide>
                            <img className="d-block w-100"
                            src="https://images.unsplash.com/photo-1562447575-88db38dcc649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="Third slide"/></SwiperSlide>
                        <SwiperSlide>
                            <img className="d-block w-100"
                            src="https://images.unsplash.com/photo-1465362342881-f183990e82b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"/></SwiperSlide>
                        <SwiperSlide>
                            <img className="d-block w-100"
                            src="https://images.unsplash.com/photo-1478234082019-73726348a75b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt="Third slide"/></SwiperSlide>
                    </Swiper>
                </div>

                <div className='aboutUs_firstBannerText'>
                    <span style={{fontWeight:'lighter', fontSize:'16px', color:'gray'}}>크기가 커서, 너무 작아서, 상처가 나서...</span>
                    <p className='bannerHeader'><span style={{color:'#FF6741', fontWeight:'bold',  fontSize:'24px'}}>'예쁘지 않다'</span>는 이유로 버려지는 농산물들</p>
                    <br />
                    <p>
                        모양과 크기 등 겉모습 때문에 폐기되는 농산물은 <br/>
                        <span>연간 생산액의 1/3</span> 
                    </p>
                    {/* 그래프가 있으면 좋겠다~ <-나중에 추가하기+)문구 추가 : 못난이 농산물 생산 현황(by 뉴스2)//못난이 농산물의 폐기는 유통과 소비 모든 단계에서 환경적 경제적 사회적 손실을 야기합니다. 함께 못난이 농산물을 구출해나가며 지구를 위한 분명한 변화를 마들고 있습니다.*/}
                </div>
            </div>

            {/* 여기에 스크롤 애니메이션 넣을 거임 -배경: 하얀색 - > 초록색 / 글자 가 위에서 아래로 스르륵*/}
            <div className='aboutUs_secondBanner'>
                {/* <div className='aboutUs_secondBannerText'>
                    <p>지구를 위해, 우리를 위해</p>
                    <p>우리는 못난이 채소들을 구출합니다.</p>
                </div> */}
            
            
            </div>

            {/* 여기에 그리드 3개 -> 글 */}
            <div className='aboutUs_thirdBanner'>
                {/* <p className="bannerHeader" style={{paddingLeft:'20px', textAlign:'left'}}>어글리어스는</p> */}
                <Container>
                    <Row>
                        <Col>
                            <img src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                            <p className="pHeader">환경을 생각합니다</p>
                            <p>농산물이 폐기되며 발생하는 메탄 가스 등은 지구 온난화의 원인이 됩니다.
                                농산물 구출은 이러한 메탄 가스의 발생을 줄이고, 추가적으로 발생하는 자원과 노동력 낭비 또한 줄입니다.
                            </p>
                        </Col>
                        <Col>
                            <img src={process.env.PUBLIC_URL+'/navImg/coll.jpg'}></img>
                            <p className="pHeader">불필요한 낭비를 막습니다</p>
                            <p>농산물을 겉모습으로 판단하던 기존의 기준에서 벗어나, 신선함과 맛 등 본질에 집중하여 상품을 선별합니다. 못난이 농산물을 헐값에 사들이는 관행을 깨고, 합리적인 가격으로 정산하여 건강한 생산이 지속되도록 힘 씁니다. </p>
                        </Col> <Col>
                            <img src="https://images.unsplash.com/photo-1623428453655-44feea11454b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
                            <p className="pHeader">플라스틱 없는 포장</p>
                            <p>농산물의 신선도를 지키는 선에서 최소한의 포장을 끊임없이 실험하고 실천합니다. 플라스틱을 지양하고, 종이백과 펄프용기를 사용합니다. 조금 번거롭더라도 우리의 땅과 식탁에 이로운 방향을 선택합니다.</p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 짤막한 배너 */}
            <div className="aboutUs_fourthBanner">
                <p className="bannerHeader">못난이 농산물 구출이 어떤 변화를 만들고 있을까요?</p>
                {/* 애니메이션 추가 > 숫자 올라가도록 */}
                <div className="containerText">
                <Container>
                        <Row>
                            <Col>
                                <p>구출한 농산물</p>
                                <p>123143</p>
                            </Col>
                            <Col>
                                <p>아낀 물의 양</p>
                            </Col>
                            <Col>
                                <p>아낀 플라스틱 수</p>
                            </Col>
                            <Col>
                                <p>절감한 탄소</p>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                    <p style={{position:'relative', top:'170px'}}>함께 못난이 농산물을 구출해나가며 지구를 위한 분명한 변화를 만들고 있습니다.</p>

            </div>

            {/* 여기에 블로그 글 이동+더 보러가기(우선은 블로그 링크 이동하게 온클릭 걸어두기) */}
            <div className="aboutUs_fifthBanner">
                <p className="bannerHeader" style={{textAlign:'left', paddingLeft:'50px'}}>어글리어스가 전하는 농산물 이야기</p>
                    <Container>
                        <Row>
                            <Col>
                                <Card className="text-white" style={{border:'1px solid none'}} >
                                <Card.Img src="https://images.unsplash.com/photo-1599403417231-8387b0a3b7ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="다양한 감자 사진" />
                                <Card.ImgOverlay style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.1))'}}>
                                    <Card.Title>울퉁불퉁해도 맛있으니 괜찮아</Card.Title>
                                    <Card.Text>
                                        유통 기준보다 너무 크거나 작은 감자들이 모였어요
                                    </Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col>
                            <Card className="text-white" style={{border:'1px solid none'}}>
                                <Card.Img src="https://images.unsplash.com/photo-1627740281282-b8aad2a5c290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="낙과(사과) 사진" />
                                <Card.ImgOverlay style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.1))'}}>
                                    <Card.Title>조금 못생겨졌지만 맛있으니 괜찮아</Card.Title>
                                    <Card.Text>
                                        강풍으로 떨어진 낙과들이 모였어요
                                    </Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    <p 
                    style={{border:'bold', marginTop:'25px',position:'relative', left:'89%', cursor:'pointer'}}
                    onClick={()=>{
                        window.open("https://uglyus.co.kr/blogs")
                    }}>더 보러가기 &gt;
                    </p>
            </div>

            {/* 여기에 파트너사.. (이런 곳과 함께하고 있어요! - 사회적 기업, 농수산품 가공업체 등등-흘러가는 이미지~여도 재밋겟다) */}
            <div className="aboutUs_lastBanner">
                <p className="bannerHeader" style={{textAlign:'center'}}>이런 곳과 함께하고 있어요!</p>
                <div className="aboutUs_lastBannerImg">
                    {/* 이미지 넣기 */}
                    
                </div>
            </div>
        </div>
    )
}



export default AboutUs;