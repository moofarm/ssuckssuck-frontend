import React from 'react';
import { Modal } from './Modal'; // Modal 컴포넌트 임포트
import Calendar from './Calendar'; 

const LongJoinModal = ({ title, contents, setModal, state, leftLabel, rightLabel }) => {
    return (
        <Modal
            type="long" // 모달 유형을 long으로 설정
            title={title}
            contents={contents}
            setModal={setModal}
            state={state}
            leftLabel={leftLabel}
            rightLabel={rightLabel}
        >
            {/* LongModal의 새로운 컴포넌트들을 이곳에 추가할 수 있습니다. */}
            <div className="long-modal-content">
                {/* 새로운 컴포넌트 */}
                <h2 className="text-xl my-4">미션 기간</h2>
                <div className="flex flex-row my-2" >
                    <p className="text-lg">완료일</p>
                    &emsp;
                    <Calendar/>
                </div>        
                <label className="text-base ml-48 my-2"><input type="checkbox"/> 미정</label>
                <h2 className="text-xl my-4">미션 횟수</h2>
                <p className="text-sm" my-2>일주일에 몇 번 미션을 하실 건가요?</p>
                <div className="my-4">
                    <input type="radio" id="2" name="number" value="2" checked/><span className="text-base">2회이하</span>&ensp;
                    <input type="radio" id="3" name="number" value="3" checked/><span className="text-base">3회이상</span>&ensp;
                    <input type="radio" id="5" name="number" value="5" checked/><span className="text-base">5회이상</span>&ensp;
                    <input type="radio" id="7" name="number" value="7" checked/><span className="text-base">매일</span>
                </div>
                {/* 다른 컴포넌트나 요소들도 추가 가능합니다. */}
            </div>
        </Modal>
    );
};

export default LongJoinModal;
