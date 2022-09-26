import Accordion from 'react-bootstrap/Accordion';

function FAQ(){
    return(
        <div className='FAQQuestion'>
            <p className='bannerHeader'>FAQ</p>
            <Accordion defaultActiveKey={['0']} alwaysOpen> 
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q.어떤 채소들을 받게 되나요?</Accordion.Header>
                    <Accordion.Body>
                        각각의 사연으로 판로를 잃은 친환경 농산물들로 꾸려집니다.
                        1. 모든 채소들은 모두 무농약/유기농 인증을 받은 제철 친환경 채소들입니다.
                        2. 모양이나 중량으로 버려질 위기의 못난이 채소, 급식 중단으로 판로를 잃은 채소 등 구출 긴급도를 따져 소싱하빈다.
                        3. 사연은 제각각이지만, 꼼꼼하게 선별해 맛과 신선도에는 문제가 없는 채소들로만 꾸려집니다. 불필요한 유통과정을 줄여 발송 직전 수확해 가장 신선하게 보내드려요.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q.어떤 채소가 올지 미리 알 수 있나요?</Accordion.Header>
                    <Accordion.Body>
                    네! 발송 전, 이번 주의 채소 구성과 추천 레시피를 문자로 보내드립니다. 미리 다음 주의 식단을 구상해볼 수 있습니다.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q.인증된 친환경 농산물이 맞나요?</Accordion.Header>
                    <Accordion.Body>
                    맞습니다! 친환경 취급자 인증을 꼭 확인하세요.
                    어글리어스 마켓은 친환경 취급자 인증(인증번호 10600899번)을 받아 모든 농산물이 입고 부터 출고까지 '친환경' 제품으로만 관리/추적됩니다. 보내드리는 레시피 페이퍼에 농산물들의 인증번호와 로트번호가 기재됩니다.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q.채소의 상태가 좋지 않으면 보상해주나요?</Accordion.Header>
                    <Accordion.Body>
                    물론입니다. 산지부터 포장까지 꼼꼼히 검수하지만, 만일 만족스럽지 않은 상태의 농산물을 받으셨을 경우 사진을 찍어 고객센터로 연락주세요. 보상을 도와드립니다. 책임지고 보상을 도와드립니다.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Q.채소를 다 먹지 못하면 어쩌죠?</Accordion.Header>
                    <Accordion.Body>
                    걱정마세요! 매 채소박스마다 '레시피 페이퍼'를 보내드려요. 채소들을 어떻게 보관해야할지 언제까지 먹어야할지 꼼꼼하게 알려드리고, 어떻게 맛있게 먹을 수 있을지 알려드려요.
                    그럼에도, 채소가 남았거나 일정이 바쁠 경우에는 ‘미루기’를 통해 배송일정을 미룰 수 있어요.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Q.채소들은 어떻게 소싱되나요?</Accordion.Header>
                    <Accordion.Body>
                    어글리어스 팀원들이 농가 상황을 수시로 체크하고 있습니다. 매주 산지에 방문하며 농작물과 생산환경을 확인합니다. 건강하게 자랐지만 판로가 없는 농산물들을 농부님들께 직접 공급받습니다.
                    더해, 생산단계부터 완벽한 외형을 위해 과도한 방제를 하지 않는 것을 추구하는 농부님들과 파트너쉽을 맺고 있습니다.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Q.정말 저렴한가요?</Accordion.Header>
                    <Accordion.Body>
                    매주 친환경 농산물의 시세를 체크하고 시세 대비 평균 20% 저렴하게 제공해드리고 있습니다. (농산물 유통정보 - kamis.or.kr)
                    이는 온라인 마켓에서 인증 받은 동일한 품목을, 동일 중량으로 계산했을 때 최대 35%까지 저렴한 수준입니다.
                    농부분들이 폐기나 밭갈이가 아닌 어글리어스 납품을 선택할 수 있도록 합리적인 정산을 지불해드림에도 이렇게 저렴한 제공이 가능한 이유는, 중간 유통과정 없이 산지와의 직거래를 통해 유통비용을 절감하고 정기배송 방식으로 재고를 남기지 않기 때문입니다.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    </div>
    )
}

export default FAQ;