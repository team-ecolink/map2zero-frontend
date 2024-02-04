import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { shareModalState } from '../../recoil';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

export const SharePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) { // 타입 단언 사용
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  useEffect(() => {
    // 모달이 열려있을 때만 이벤트 리스너 등록
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <Background>
      {isModalOpen && (
        <Modal ref={modalRef} >
          <Xbutton
            src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`}
            onClick={handleCloseModal}
          />
      <Title>공유하기</Title>
      <Information>
      <PicInformation>
      <Frame407>
      <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/link.svg`} alt="검색결과 없음" />
      </Frame407>
      <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
        링크복사 
      </PicTexts>
      </PicInformation>
      <PicInformation>
      <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/simple-icons_kakaotalk.svg`} alt="검색결과 없음" />
      <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
        카카오톡 
      </PicTexts>
      </PicInformation>
      <PicInformation>
      <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/image 20.jpg`} alt="검색결과 없음" />
      <PicTexts $margintopPC={'0'} $margintopMB={'0'}>
        페이스북
      </PicTexts>
      </PicInformation>
      </Information>
    </Modal>
          )}
    </Background>
);
};

const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 3;
  width: 60.8rem;
  height: 26.9rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;
  @media (max-width: 768px) {
    width: 327px;
    height: 195px;
    border-radius: 16px;
  }
`;
const Xbutton = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  right: 1.6rem;
  top: 1.6rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 3.75rem;
    height: 3.75rem;
    right: 4rem;
    top: 4rem;
  }
`;
const Title = styled.div`
  position: relative;
  margin-top: 6.25rem;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Noto Sans';
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Image = styled.img`
  width: 24;
  height: 24;
  position: relative;

`;

const PicInformation = styled.div`
    left: 0;
    top: 0;
    position: relative;
    margin-top: 3.2rem;
    text-align: relative;
    margin: 0 auto 0 auto;

`;

const PicTexts = styled.div<{ $margintopPC: string; $margintopMB: string }>`
  position: relative;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 10px;
  font-weight: 500;
  wordWrap: 'break-word';
  margin-top: 16px;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0;

`;

const Information = styled.div`
  justify-content: center;
  width: 292px;
  height: 52px;
  position: relative;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin: auto;
  
  @media (max-width: 768px) {
    font-size: 4rem;
    width: 246px;
    height: 50px;
  }
`;

const Frame407 = styled.div`
  width: 52px;
  height: 52px;
  background: #F4ECE1;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex;


  @media (max-width: 768px) {
    width: 24;
    height: 24;
    position: relative;
  }


`;
