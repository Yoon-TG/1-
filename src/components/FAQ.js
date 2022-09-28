import '../compCss/manual.css'

import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function FAQ(){

    let[showSub, setShowSub] = useState(true);
    let[showRec, setShowRec] = useState(true);
    let[showInfo, setShowInfo] = useState(true);
    let[showPay, setShowPay] = useState(true);
    let[showDel, setShowDel] = useState(true);


    let [sub, setSub] = useState([
        {
            que:'어떤 채소들을 받게 되나요?',
            ans:'모양이나 중량으로 버려질 위기의 못난이 채소, 급식 중단으로 판로를 잃은 채소 등 구출이 긴급한 채소들이 우선 구성됩니다.',
            ans2:'모든 채소들은 무농약/유기농 인증을 받은 제철 친환경 채소들이에요. 사연은 제각각이지만, 꼼꼼하게 선별해 맛과 신선도에는 문제가 없는 채소들로만 꾸려집니다.',
            ans3:'불필요한 유통 과정을 줄여 발송 직전 수확해 가장 신선하게 보내드려요!'
        },{
            que:'어떤 채소들이 올 지 미리 알 수 있나요?',
            ans:'발송 전 *매주 월요일 4시* 이번 주의 채소 구성과 추천 레시피를 카톡 알림으로 보내드려요.',
            ans2:'미리 다음 주의 식단을 구상해보실 수 있습니다.'
        },
        {
            que:'인증된 친환경 농산물이 맞나요?',
            ans:'저희 마켓은 친환경 취급자 인증(인증번호 123456789번)을 받은 업체입니다.',
            ans2:'모든 농산물은 입고부터 출고까지 \'친환경\' 제품으로만 관리/추적됩니다.'
        }]);

        let [rec, setRec] = useState([
            {
                que:'매주 레시피를 알려주나요?',
                ans:'네! 매주 채소박스마다 \'레시피 페이퍼\'를 보내드려요.',
                ans2: '채소들을 어떻게 보관해야 할 지 언제까지 먹어야 할 지 꼼꼼하게 알려드리고, 어떻게 맛있게 먹을 수 있을지 알려드려요.',
                ans3:'농산물들이 고객님의 식탁에서도 버려지지 않고 잘 활용되도록 도와드릴게요:)'
            },{
                que:'레시피 페이퍼가 없어요!',
                ans:'레시피 페이퍼를 받지 못하셨나요?',
                ans2:'채팅상담으로 문의 주시면 확인하실 수 있는 레시피 페이퍼 파일을 보내드릴게요!'
            }
            ]);

    let [info, setInfo] = useState([
        {
            que:'배송지 주소는 어떻게 변경하나요?',
            ans:'배송지 변경은 마이페이지에서 아래 경로를 통해 가능합니다.',
            ans2:'*로그인 후 마이페이지 > 구독정보 변경 > 배송지 [수정] 클릭 > 수정 완료 클릭',
            ans3:'📍 단, 유의해주세요! 수요일 16:00시 (결제 완료) 이후로는 출고 준비 상태가 되어 배송지를 수정할 수 없습니다. 수요일 16:00시까지 배송지 정보 수정을 완료해주세요.'
        },{
            que:'배송메세지를 변경할 수 있나요?',
            ans:'배송메시지 변경은 마이페이지에서 아래 경로를 통해 가능합니다.',
            ans2:'*로그인 후 마이페이지 > 구독정보 변경 > 배송지 [수정] 클릭 > 배송 요청사항에 기입 > 수정 완료 클릭! '
        },
        {
            que:'이메일 주소를 잘못 입력했어요. 바꿀 수 있을까요?',
            ans:'네, 물론입니다. 마이페이지에서 아래 경로를 통해 변경해주세요.',
            ans2:'*로그인 후 마이페이지 > 구독자명 옆 아이콘 클릭 > 내 정보 수정'
        },
        {
            que:'알림을 받지 못했어요!',
            ans:'품목 안내, 배송 안내, 어글리어스 공지 안내 등 꼭 받아야 하는 알림톡(or 문자)를 수신하지 못하셨나요?',
            ans2:'알림톡을 받지 못하셨다면, 등록된 마이페이지에서 연락처 정보를 한 번 확인해주세요!',
            ans3:'번호가 맞게 등록되어 잇는데도 알림 수신이 안되어 불편하셨다면, 주저 말고 고객센터로 도움을 요청해주세요. 시스템 발송 내역과 수신 거부 등록 여부를 확인하여 안내를 도와드릴게요!'
        }]);

        let [pay, setPay] = useState([
            {
                que:'정기 구독 시 결제는 어떻게 되나요?',
                ans:'구독 신청 후 배송이 진행되는 주 수요일 오후 4시경 결제가 진행됩니다.',
                ans2:'매번 채소박스를 주문하거나 신청하지 않으셔도 구독 주기에 맞춰 매주/격주 단위로 자동결제가 진행되고, 채소박스를 배송해드립니다.'
            },{
                que:'결제에 실패하면 어떻게 하나요?',
                ans:'안심하세요! 수요일 결제 실패건에 한해 다음날(목요일)오전 11시에 한 번 더 결제를 시도합니다.',
                ans2:'만약 목요일에도 결제에 실패할 경우 해당 주간 박스는 출고되지 않고 다음 주차에 다시 결제가 진행됩니다.'
            },
            {
                que:'카드 등록 시 자동 100원 결제 후 취소가 되었어요!',
                ans:'결제 카드 등록시 정상 등록 여부 확인을 위해 100원 결제 후 취소가 진행됩니다. 결제 된 금액은 10분 이내 자동 취소되니 걱정 마세요!'
            }
            ]);

        let [del, setDel] = useState([
            {
                que:'미루기/당기기는 어떻게 하나요?',
                ans:'배송을 미루거나 배송 미루기를 취소하고 싶을 때, 마이페이지에서 아래 경로를 통해 가능합니다.',
                ans2:'*로그인 후 마이페이지 > 구독 정보 변경 > 다음 배송 예정일 [미루기&당기기] 클릭!',
                ans3:'📍 단, 유의해주세요! 결제 이후 (수요일 16:00) 배송준비 상태가 되어 미루기가 불가능해요! 결제 후에는 미루기 버튼이 비활성화 되는 점 참고 부탁드립니다.'
            },{
                que:'미루기는 최대 몇 주까지 할 수 있나요?',
                ans:'최대 4주까지 가능합니다. 바쁜 일정이 예상된다면 넉넉하게 배송 시작일을 조정해두세요!'
            },
            {
                que:'구독 중지 or 해지는 어떻게 하나요?',
                ans:'구독 중지 및 해지는 마이페이지에서 아래 경로를 통해 가능합니다.',
                ans2:'*로그인 후 마이페이지 > 구독정보 변경 > 하단의 [구독 일시 정지] 또는 [구독 해지]를 선택해 주세요.'
            },
            {
                que:'구독 중지를 해제하고 다시 받을 수 있나요?',
                ans:'네, 물론입니다. 언제든 원하실 때 마이페이지에서 [구독 중지 해제]를 눌러 다시 배송을 받을 수 있습니다.',
                ans2:'*로그인 후 마이페이지 > 구독 > [구독 중지 해제]'
            }
            ]);
            


    return(
        <div className='FAQQuestion'>
            <p className='bannerHeader'>FAQ</p>
            <input type="text" placeholder='검색해보세요!'/>
            <button className='inputButton'>검색</button>
            <div className='QuestionNav'>
                <button onClick={()=>{
                    setShowSub(true);
                    setShowRec(true);
                    setShowInfo(true);
                    setShowPay(true);
                    setShowDel(true); 
                }}>전체보기</button>
                <button onClick={()=>{
                    setShowSub(true);
                    setShowRec(false);
                    setShowInfo(false);
                    setShowPay(false);
                    setShowDel(false);
                }}>구독</button>
                <button onClick={()=>{
                    setShowSub(false);
                    setShowRec(true);
                    setShowInfo(false);
                    setShowPay(false);
                    setShowDel(false);
                }}>레시피</button>
                <button onClick={()=>{
                    setShowSub(false);
                    setShowRec(false);
                    setShowInfo(true);
                    setShowPay(false);
                    setShowDel(false); 
                }}>정보 변경</button>
                <button onClick={()=>{
                    setShowSub(false);
                    setShowRec(false);
                    setShowInfo(false);
                    setShowPay(true);
                    setShowDel(false); 
                }}>결제</button>
                <button onClick={()=>{
                    setShowSub(false);
                    setShowRec(false);
                    setShowInfo(false);
                    setShowPay(false);
                    setShowDel(true); 
                }}>해지/미루기</button>
            </div>

            {showSub == true ? <div className='accordionQ'>
            <Accordion defaultActiveKey={['0']} alwaysOpen> 
                {sub.map((data,i)=>{
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>Q.{data.que}</Accordion.Header>
                            <Accordion.Body>
                                {data.ans}<br />
                                {data.ans2}<br />
                                {data.ans3}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })} 
            </Accordion>
            </div> : null}

            {showRec == true ? <div className='accordionQ'>
            <Accordion defaultActiveKey={['0']} alwaysOpen> 
                {rec.map((data,i)=>{
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>Q.{data.que}</Accordion.Header>
                            <Accordion.Body>
                                {data.ans}<br />
                                {data.ans2}<br />
                                {data.ans3}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })} 
            </Accordion>
            </div> : null}
            

            {showInfo == true ? <div className='accordionQ'>
            <Accordion defaultActiveKey={['0']} alwaysOpen> 
                {info.map((data,i)=>{
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>Q.{data.que}</Accordion.Header>
                            <Accordion.Body>
                                {data.ans}<br />
                                {data.ans2}<br />
                                {data.ans3}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })} 
            </Accordion>
            </div> : null}

            {showPay == true ? <div className='accordionQ'>
            <Accordion defaultActiveKey={['0']} alwaysOpen> 
                {pay.map((data,i)=>{
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>Q.{data.que}</Accordion.Header>
                            <Accordion.Body>
                                {data.ans}<br />
                                {data.ans2}<br />
                                {data.ans3}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })} 
            </Accordion>
            </div> : null}

            {showDel == true ? <div className='accordionQ'>
            <Accordion defaultActiveKey={['0']} alwaysOpen> 
                {del.map((data,i)=>{
                    return(
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>Q.{data.que}</Accordion.Header>
                            <Accordion.Body>
                                {data.ans}<br />
                                {data.ans2}<br />
                                {data.ans3}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })} 
            </Accordion>
            </div> : null}
    </div>
    )
}

export default FAQ;