import { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={showModal}>
        모달창 열기!!
      </button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법(ex, 이력서 등) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2. 모달 삭제하는 방법(ex, 신용카드, 비밀번호 등) */}
      {isOpen && (<Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>)}
    </>
  );
};