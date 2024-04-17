import React, { useState } from 'react';
import { Modal } from './Modal';

const categories = {
    공부: ['어학', '수험', '프로그래밍', '기타'],
    생활습관: ['운동', '자기계발', '식습관', '기타'],
    자격증: ['기사', 'NCS', '컴활', '한국사', '기타'],
    취미: ['독서', '미술', '음악', '기타'],
    경제: ['절약', '투자', '기타'],
    기타: []
};

const LongMakeModal = ({ title, contents, setModal, state, leftLabel, rightLabel }) => {
    const [majorCategory, setMajorCategory] = useState('');
    const [minorCategory, setMinorCategory] = useState('');

    const handleMajorCategoryChange = (event) => {
        setMajorCategory(event.target.value);
        setMinorCategory('');
    };

    const handleMinorCategoryChange = (event) => {
        setMinorCategory(event.target.value);
    };

    return (
        <Modal
            type="long"
            title={title}
            contents={contents}
            setModal={setModal}
            state={state}
            leftLabel={leftLabel}
            rightLabel={rightLabel}
        >
            <div className="long-modal2-content p-6 text-left">
                {/* 제목 */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">제목</h2>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        maxLength={25}
                        placeholder="제목을 입력하세요"
                    />
                </div>

                {/* 카테고리 */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">카테고리</h2>
                    <div className="flex">
                        {/* 대분류 선택 */}
                        <select
                            name="major-category"
                            id="major-category"
                            value={majorCategory}
                            onChange={handleMajorCategoryChange}
                            className="w-1/2 border rounded p-2 mr-2"
                        >
                            <option value="" disabled>대분류</option>
                            {Object.keys(categories).map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>

                        {/* 소분류 선택 */}
                        <select
                            name="minor-category"
                            id="minor-category"
                            value={minorCategory}
                            onChange={handleMinorCategoryChange}
                            disabled={!majorCategory}
                            className="w-1/2 border rounded p-2"
                        >
                            <option value="" disabled>소분류</option>
                            {majorCategory &&
                                categories[majorCategory].map((subCategory) => (
                                    <option key={subCategory} value={subCategory}>
                                        {subCategory}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                {/* 설명 */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">설명</h2>
                    <textarea
                        className="w-full p-2 border rounded h-24"
                        maxLength={100}
                        placeholder="설명을 입력하세요"
                        rows={4}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default LongMakeModal;
