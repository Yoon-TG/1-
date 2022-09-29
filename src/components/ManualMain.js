import { useState } from 'react';
import {Tab, Tabs, Accordion, Modal} from 'react-bootstrap';


function ManualMain(){

    const [show, setShow] = useState(false);

    return(
        <div>
            <div className="manualMainFirstBanner">
                <p>후기가 증명하는 채소 맛집</p>
                <a href="#">후기 전체보기&gt;</a>
                <img src="https://ik.imagekit.io/uhpparxr6/manual/Group_4719__2__6uk-aBkgM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659500390641" />
            </div>

            <div className="manualMainStep1">
                <p><span className="stepNum">STEP 1</span> &nbsp;구독신청</p>
                <h2>나에게 딱 맞는<br />
                    플랜으로 신청하세요
                </h2>
                <br />
                <div className="test">
                <div className="step1Img">
                    <img src="https://ik.imagekit.io/uhpparxr6//manual/Group_4862_CWX6BVrUY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659936518829" />
                </div>
                <div className="step1Content">
                    <p className="topicText">못 먹는 채소는 제외하기!</p>
                    <p>5개까지 등록 가능해요.<br/>
                        배송되는 주간의 다른 채소로 대체해 보내드려요.
                    </p>
                    <br />
                    <p className="topicText">채소 박스 구성 예시</p>
                    <p>스탠다드와 점보의 양을 비교해보세요.</p>
                    <Tabs
                    defaultActiveKey="스탠다드"
                    id="justify-tab-example"
                    className="mb-3"
                    justify
                    >
                        <Tab eventKey="스탠다드" title="스탠다드">
                            <div className='standardBox' />
                        </Tab>
                        <Tab eventKey="점보" title="점보">
                            <div className='jumboBox' />
                        </Tab>
                    </Tabs>
                </div>
                </div>
            </div>

            <div className="manualMainStep2">
                <p><span className="stepNum">STEP 2</span> &nbsp;배송</p>
                <h2>설레는 금요일<br />
                    신선한 채소를 배송받아요
                </h2>
                <div className='test'>
                    <div className="step2Img">
                        <img src="https://ik.imagekit.io/uhpparxr6/manual/manual-guide-delivery-pc_2oYkBFN3W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659060777089" />
                    </div>
                    <div className="step2Content">
                        <Accordion defaultActiveKey={['0']} style={{width:'320px'}}>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>이번 주 배송 미루기</Accordion.Header>
                                <Accordion.Body>
                                    배송 일정을 최대 4주까지 미룰 수 있어요.<br />
                                    미룬 배송을 당겨올 수도 있어요.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>채소·과일 별도 추가</Accordion.Header>
                                <Accordion.Body>
                                    이번 주에 소량 구출된 품목이 있어요.<br />
                                추가 구매해 박스에 담을 수 있어요.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>구독 플랜 수정 가능</Accordion.Header>
                                <Accordion.Body>
                                    배송 전 언제든지 나의 구독 플랜과 배송 정보를 수정할 수 있어요.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <p>※매주 수요일 오후 4시까지 변경 가능</p>
                    </div>
                </div>
                
            </div>

            <div className="manualMainStep3">
                <p><span className="stepNum">STEP3</span> &nbsp;채소 즐기기</p>
                <h2>레시피 페이퍼로<br />
                    쉽게 요리해요
                </h2>
                <div className="step3Content">
                    <img src="https://ik.imagekit.io/uhpparxr6/manual/manual-recipepaper-pc_LN3BnwDHs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659493262258" />
                <p>이번 주 구출된 채소들의 <span>원산지, 사연, 보관법, 보관기간, 레시피</span>까지<br/>
                    활용 방법이 꼼꼼히 적혀있어요.
                </p>
                </div>
            </div>

            <a href='/login'>
                <button id='manualButton' onClick={()=>{
                    alert('먼저 로그인하세요!')
                }}>시작하기</button>
                </a>

            <div className="manualMainSecondBanner">
                <h2>매주 달라지는<br/>
                    채소 미리보기
                </h2>
                <ul>
                    <li>무농약·유기농 채소로만 구성돼요.</li>
                    <li>사연을 가지고 있지만 가장 신선해요.</li>
                    <li>제철에 꼭 먹어야 할 채소들이에요.</li>
                </ul>
                <button onClick={()=>setShow(true)}>126가지 채소 전체보기</button>
                    <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    size="lg">
                    <Modal.Header closeButton></Modal.Header>
                    <img src="https://ik.imagekit.io/uhpparxr6/manual/pc_vegetables2_jZQUsow3hWh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657518562638"  
                    style={{width:'790px', height:'700px'}}/>
                    </Modal>
            </div>

            <div className="manualMainThirdBanner">
                <h2>걱정마세요!</h2>
                <img src="https://ik.imagekit.io/uhpparxr6/manual/manual-vp-pc_LxkfEp7aZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659316199669" />
            </div>

            <div className="manualMainLastBanner">
                <p>평소 경험하지 않던 채소까지 만나 식탁이 다채로워져요.</p>
                <a href='/login'>
                    <button onClick={()=>{
                        alert('먼저 로그인하세요!')
                    }}>시작하기</button>
                </a>
                <p>지금 주문하면 <span style={{color:'#EB6440', fontWeight:'bold'}}>9월 30일</span>에 도착!</p>
            </div>
        </div>
    )
}

export default ManualMain;