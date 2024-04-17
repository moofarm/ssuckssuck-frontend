import React, { useState } from 'react';
import { Modal } from './Modal'; // Modal 컴포넌트 임포트

const ReportModal = ({ title, contents, setModal, state, leftLabel, rightLabel }) => {
    // 신고 카테고리 상태 관리
    const [reportCategory, setReportCategory] = useState('');
    // 신고 사유 상태 관리
    const [reportReason, setReportReason] = useState('');

    // 신고 카테고리 변경 핸들러
    const handleReportCategoryChange = (event) => {
        setReportCategory(event.target.value);
    };

    // 신고 사유 변경 핸들러
    const handleReportReasonChange = (event) => {
        setReportReason(event.target.value);
    };

    return (
        <Modal
            type="wide" // 모달 유형을 wide로 설정
            title={title}
            contents={contents}
            setModal={setModal}
            state={state}
            leftLabel={leftLabel}
            rightLabel={rightLabel}
        >
            {/* 모달 내용 */}
            <div className="report-modal-content p-6">
                {/* 신고 카테고리 선택 */}
                <select
                    name="report-category"
                    id="report-category"
                    value={reportCategory}
                    onChange={handleReportCategoryChange}
                    className="w-full p-2 border rounded mb-4"
                >
                    <option value="" disabled>신고 사유 선택</option>
                    <option value="SPAM">스팸/도배글입니다.</option>
                    <option value="ADVERTISE">홍보 내용을 포함하고 있습니다.</option>
                    <option value="SEXUAL">음란물입니다.</option>
                    <option value="PRIVACY">개인정보 노출 게시물입니다.</option>
                    <option value="ETC">기타</option>
                </select>

                {/* 신고 사유 입력 */}
                <textarea
                    className="w-full p-2 border rounded"
                    rows={8}
                    maxLength={200}
                    placeholder="신고 사유를 적어주세요."
                    value={reportReason}
                    onChange={handleReportReasonChange}
                />
            </div>
        </Modal>
    );
};

export default ReportModal;