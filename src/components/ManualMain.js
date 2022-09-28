


function ManualMain(){
    return(
        <div>
            <div className="manualMainTopBanner">
                <p>똑똑 채소 왔어요!</p>
                <p>합리적 가격, 선물같은 설렘</p>
                <p>어글리어스 채소박스</p>
                <button>시작하기</button>
            </div>

            <div className="manualMainNav">

            </div>

            <div className="manualMainFirstBanner">
                <p>후기가 증명하는 채소 맛집</p>
                <span>후기 전체보기&gt;</span>
                <img src="https://ik.imagekit.io/uhpparxr6/manual/Group_4719__2__6uk-aBkgM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659500390641" />
            </div>

            <div className="manualMainStep1">
                <p><span className="stepNum">STEP 1</span>구독신청</p>
                <h1>나에게 딱 맞는<br />
                    플랜으로 신청하세요
                </h1>
                <div className="step1Img">
                    <img src="https://ik.imagekit.io/uhpparxr6//manual/Group_4862_CWX6BVrUY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659936518829" />
                </div>
                <div>
                    <p>못 먹는 채소는 제외하기!</p>
                    <p>5개까지 등록 가능해요.<br/>
                        배송되는 주간의 다른 채소로 대체해 보내드려요.
                    </p>
                    <p>채소 박스 구성 예시</p>
                    <p>스탠다드와 점보의 양을 비교해보세요.</p>
                    {/* 여기에~~ bootstrap */}
                    <img src="https://ik.imagekit.io/uhpparxr6//manual/standard-pc_ZMI_I3NO0U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659489643911" />
                    <img src="https://ik.imagekit.io/uhpparxr6//manual/jumbo-pc_swHaLlRDf6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659489643211" />
                </div>
            </div>

            <div className="manualMainStep2">
                <p><span className="stepNum">STEP 2</span>배송</p>
                <h1>설레는 금요일<br />
                    신선한 채소를 배송받아요
                </h1>
                <div className="step2Img">
                    <img src="https://ik.imagekit.io/uhpparxr6/manual/manual-guide-delivery-pc_2oYkBFN3W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659060777089" />
                </div>
                <div>
                    {/* 여기에~~ bootstrap */}
                    <p>이번 주 배송 미루기</p>
                    <p>배송 일정을 최대 4주까지 미룰 수 있어요.<br />
                        미룬 배송을 당겨올 수도 있어요.
                    </p>
                    <p>채소·과일 별도 추가</p>
                    <p>이번 주에 소량 구출된 품목이 있어요.
                        추가 구매해 박스에 담을 수 있어요.
                    </p>
                    <p>구독 플랜 수정 가능</p>
                    <p>배송 전 언제든지 나의 구독 플랜과 배송 정보를 수정할 수 있어요.
                    </p>
                    <p>※매주 수요일 오후 4시까지 변경 가능</p>
                </div>
            </div>

            <div className="manualMainStep3">
                <p><span className="stepNum">STEP3</span>채소 즐기기</p>
                <h1>레시피 페이퍼로<br />
                    쉽게 요리해요
                </h1>
                <div className="step2Img">
                    {/* 여기에~~ bootstrap => 상점에서 쓴 거~*/}
                    <img src="https://ik.imagekit.io/uhpparxr6/manual/manual-recipepaper-pc_LN3BnwDHs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659493262258" />
                </div>
                <p>이번 주 구출된 채소들의 <span>원산지, 사연, 보관법, 보관기간, 레시피</span>까지<br/>
                    활용 방법이 꼼꼼히 적혀있어요.
                </p>
            </div>

            <button>시작하기</button>

            <div className="manualMainSecondBanner">
                <h1>매주 달라지는<br/>
                    채소 미리보기
                </h1>

                <ol>
                    <li>무농약·유기농 채소로만 구성돼요.</li>
                    <li>사연을 가지고 있지만 가장 신선해요.</li>
                    <li>제철에 꼭 먹어야 할 채소들이에요.</li>
                </ol>

            {/* 여기에~~ bootstrap => toggle, useState사용*/}
                <button>126가지 채소 전채보기</button>
            </div>

            <div className="manualMainThirdBanner">
                <h2>걱정마세요!</h2>
                <img src="https://ik.imagekit.io/uhpparxr6/manual/manual-vp-pc_LxkfEp7aZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659316199669" />
            </div>

            <div className="manualMainRecipe">
                <h2>내 재료에 맞춘 레시피 추천</h2>
                <p>레시피 더 보러가기&gt;</p>
                <img src="https://ik.imagekit.io/uhpparxr6/uglyus-prod/5445-251557-2066.jpg?tr=w-238,h-238,c-maintain_ratio" />
            </div>

            <div className="manualMainLastBanner">
                <p>평소 경험하지 않던 채소까지 만나 식탁이 다채로워져요.</p>
                <button>시작하기</button>
                <p>지금 주문하면 <span>9월 30일</span>에 도착!</p>
            </div>
        </div>
    )
}

export default ManualMain;