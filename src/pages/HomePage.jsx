import React, { useState } from 'react';
import { Modal } from '../components/Modal'; // Modal 컴포넌트 임포트
import LongJoinModal from '../components/LongJoinModal'; // LongJoinModal 컴포넌트 임포트
import LongMakeModal from '../components/LongMakeModal'; // LongMakeModal 컴포넌트 임포트
import ReportModal from '../components/ReportModal'; // ReportModal 컴포넌트 임포트

const HomePage = () => {
    // 각 모달의 상태를 관리하기 위한 상태 변수
    const [isShortModalOpen, setIsShortModalOpen] = useState(false);
    const [isLongJoinModalOpen, setIsLongJoinModalOpen] = useState(false);
    const [isLongMakeModalOpen, setIsLongMakeModalOpen] = useState(false);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    // 모달 열기 및 닫기 함수 정의
    const openShortModal = () => setIsShortModalOpen(true);
    const closeShortModal = () => setIsShortModalOpen(false);
    const openLongJoinModal = () => setIsLongJoinModalOpen(true);
    const closeLongJoinModal = () => setIsLongJoinModalOpen(false);
    const openLongMakeModal = () => setIsLongMakeModalOpen(true);
    const closeLongMakeModal = () => setIsLongMakeModalOpen(false);
    const openReportModal = () => setIsReportModalOpen(true);
    const closeReportModal = () => setIsReportModalOpen(false);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">HomePage</h1>

            {/* 각 모달을 열기 위한 버튼 */}
            <button onClick={openShortModal} className="btn my-2">Short Modal 열기</button>
            <button onClick={openLongJoinModal} className="btn my-2">Long Join Modal 열기</button>
            <button onClick={openLongMakeModal} className="btn my-2">Long Make Modal 열기</button>
            <button onClick={openReportModal} className="btn my-2">Report Modal 열기</button>

            {/* Modal 컴포넌트 호출 */}
            {isShortModalOpen && (
                <Modal
                    type="short"
                    title="단기간 목표 설정"
                    contents="목표 설정을 완료하시겠습니까?"
                    setModal={closeShortModal}
                    state={isShortModalOpen}
                />
            )}

            {/* LongJoinModal 컴포넌트 호출 */}
            {isLongJoinModalOpen && (
                <LongJoinModal
                    title="Long Join Modal"
                    contents="신규 회원 가입을 진행하시겠습니까?"
                    setModal={closeLongJoinModal}
                    state={isLongJoinModalOpen}
                    leftLabel="취소"
                    rightLabel="가입"
                />
            )}

            {/* LongMakeModal 컴포넌트 호출 */}
            {isLongMakeModalOpen && (
                <LongMakeModal
                    title="Long Make Modal"
                    contents=""
                    setModal={closeLongMakeModal}
                    state={isLongMakeModalOpen}
                    leftLabel="취소"
                    rightLabel="만들기"
                />
            )}

            {/* ReportModal 컴포넌트 호출 */}
            {isReportModalOpen && (
                <ReportModal
                    title="신고하기"
                    contents=""
                    setModal={closeReportModal}
                    state={isReportModalOpen}
                    leftLabel="취소"
                    rightLabel="신고"
                />
            )}
        </div>
    );
};

export default HomePage;