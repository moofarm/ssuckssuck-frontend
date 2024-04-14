import React from 'react';
import { Button } from './Button.jsx';

export const Modal = ({ width, height, title, contents, setModal, state }) => {
    const disableModal = () => {
        setModal(false);
    };

    const handleButton1Click = () => {
        console.log("Button 1 clicked");
        // 실제 동작을 정의하세요.
    };

    const handleButton2Click = () => {
        console.log("Button 2 clicked");
        // 실제 동작을 정의하세요.
    };

    return (
        <>
            {state && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-999" onClick={disableModal} />
                    <div
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e9f2e9] rounded-lg shadow-lg z-1000"
                        style={{ width, height }}
                    >
                        <div
                            className="absolute top-2 right-2 cursor-pointer text-2xl"
                            onClick={disableModal}
                        >
                            &times;
                        </div>
                        <div className="flex flex-col justify-between items-center text-center h-4/5 p-4">
                        <div className="flex flex-col items-center mt-8">
                            <h1 className="absolute text-2xl font-bold z-100 ">{title}</h1>
                            <div className="absolute bg-[#ff9595] opacity-50 w-48 h-6 mt-4 z-1" />
                        </div>
                        <p className="text-xl mt-16">{contents}</p>
                        <div className="flex justify-center gap-2">
                                <Button
                                    primary={false}
                                    size="small"
                                    label="아니요"
                                    onClick={handleButton2Click}
                                />
                                <Button
                                    primary={true}
                                    size="small"
                                    label="네"
                                    onClick={handleButton1Click}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
