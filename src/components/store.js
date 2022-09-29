import '../compCss/store.css';
import {Container, Row, Col, Figure} from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Menu1 from './menu1.js';
import Menu2 from './menu2.js';


function Store(){

    let navigate = useNavigate();

    let [menu1List, setMenu1List] = useState([
        {
            srcNum:'38',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/5491-040692-9875.jpg?tr=w-471",
            region:'해남',
            itemName:'무농약 꿀무화과 1kg/2kg',
            per:'18%',
            price:'21,900'
        },
        {
            srcNum:'30',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/5499-559603-5661.jpg?tr=w-471",
            region:'임실',
            itemName:'유기농 생과/냉동 블루베리',
            per:'14%',
            price:'29,900'
        },
        {
            srcNum:'50',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/49bd2e0d-9283-4d96-94cb-195260889c7c.jpeg?tr=w-471",
            region:'문경',
            itemName:'무농약 포포 1kg/2kg',
            per:'18%',
            price:'30,000'
        }
    ])

    let [menu2List, setMenu2List] = useState([
        {
            srcNum:'20',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/5492-872003-9934.jpeg?tr=w-471",
            region:'영천',
            itemName:'무농약 유럽상추 1kg/2kg',
            per:'10%',
            price:'16,200'
        },
        {
            srcNum:'52',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/0726297b-91be-4402-aaa8-447320c1480d.jpg?tr=w-471",
            region:'산청',
            itemName:'무농약 태추단감 2.5kg',
            per:'19%',
            price:'22,500'
        },
        {
            srcNum:'51',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/39f725ea-d5cb-443e-bdfa-990f9580eb8d.jpeg?tr=w-471",
            region:'부여',
            itemName:'껍질째 먹는 친환경 사과대추 1kg/2kg',
            per:'25%',
            price:'22,200'
        },
        {
            srcNum:'50',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/49bd2e0d-9283-4d96-94cb-195260889c7c.jpeg?tr=w-471",
            region:'문경',
            itemName:'무농약 포포 1kg/2kg',
            per:'18%',
            price:'30,000'
        },
        {
            srcNum:'49',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/2435db46-2759-44dc-bcb8-a84f7c518f46.jpg?tr=w-471",
            region:'창원',
            itemName:`껍질째 먹는 GAP 태추단감2.5kg/4.5kg`,
            per:'14%',
            price:'24,800'
        },
        {
            srcNum:'48',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/dcaacada-03d3-4cde-b554-6ae860d5e340.jpg?tr=w-471",
            region:'익산',
            itemName:'[긴급구출]신동진 탑마루 2kg/10kg',
            per:'45%',
            price:'10,900'
        },
        {
            srcNum:'47',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/5445-254993-6976.jpeg?tr=w-471",
            region:'순천',
            itemName:'땅콩호박 5kg',
            per:'22%',
            price:'24,900'
        },
        {
            srcNum:'44',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/5498-408829-5110.png?tr=w-471",
            region:'양구',
            itemName:'무농약 대추 방울토마토 2/3/5kg',
            per:'21%',
            price:'17,900'
        },
        {
            srcNum:'43',
            imgPath:"https://ik.imagekit.io/uhpparxr6/uglyus-prod/5445-276569-4713.png?tr=w-471",
            region:'아산',
            itemName:'유기농 참머루포도, 청포도 2kg',
            per:'12%',
            price:'28,800'
        },
    ])

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
                            {menu1List.map((data,i)=>{
                                return(
                                    <Menu1 data={data}/>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            
                <div className='menu2'>
                    <p id='menuHeader'>전체보기</p>
                    <Container>
                        <Row md={3}>
                            {menu2List.map((data,i)=>{
                                    return(
                                        <Menu2 data={data}/>
                                    )
                                })}
                        </Row>
                    </Container>
                </div>

                
            </div>
        </div>
    )
}



export default Store;