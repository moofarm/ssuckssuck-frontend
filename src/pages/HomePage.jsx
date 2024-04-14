import React, { useState } from 'react';
import { Modal } from '../components/Modal.jsx'; // Modal 컴포넌트 임포트

const HomePage = () => {
    // 모달 상태 정의
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // 모달 열기 함수
    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
      <h1 className="text-3xl font-bold underline">HomePage</h1>
    {/* 모달을 열기 위한 버튼 */}
    <button onClick={openModal}>모달 열기</button>
            
            {/* 모달 컴포넌트 호출 */}
            {isModalOpen && (
                <Modal
                    width="400px"
                    height="300px"
                    title="토익만점기원"
                    contents="미션을 중단하시나요?"
                    setModal={closeModal} // 모달 닫기 함수 전달
                    state={isModalOpen} // 모달 상태 전달
                />
            )}
        </div>
    );
};

export default HomePage;