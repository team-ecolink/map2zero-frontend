import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useState, useCallback } from "react";
import {DetailPopup} from '../../components/DetailPopup/DetailPopup';
import { useRecoilValue } from 'recoil';
import { detailModalState } from '../../recoil';


export const Linkbuttons = () => {
  const modal = useRecoilValue(detailModalState);
  document.body.style.overflow = modal ? 'hidden' : 'unset';

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘 상태를 관리하는 상태값입니다.

  const phonenumber = '010-0000-0000';
  const copyClipboard = async (text: string, successAction?: () => void, failAction?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      successAction && successAction();
    } catch (error) {
      failAction && failAction();
    }
  };

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);


  return (
    <PicBox>
      {isMobile ? (
        <>
          <Button href="nmap://map?lat=37.4979502&lng=127.0276368&zoom=20&appname=com.example.myapp">
            <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/location.svg`} />
            <ButtonText>위치</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <Button href="https://naver.me/FM1XyM8D">
            <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/location.svg`} />
            <ButtonText>위치</ButtonText>
          </Button>
        </>
      )}
      <Line />
      {isMobile ? (
        <>
          <Button href={'tel:' + '010-0000-0000'}>
            <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/call.svg`} />
            <ButtonText>전화</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <Button
            href="#"
            onClick={() => copyClipboard(phonenumber, () => alert('전화번호가 클립보드에 저장되었습니다.'))}
          >
            <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/call.svg`} />
            <ButtonText>전화</ButtonText>
          </Button>
        </>
      )}
      <Line />
      <Button onClick={handleOpenModal}> {/* 매장 정보 버튼을 클릭하면 모달을 열도록 핸들러를 추가했습니다. */}
        <ButtonImg src={`${process.env.PUBLIC_URL}/assets/StoreDetail/storefront.svg`} />
        <ButtonText>매장정보</ButtonText>
      </Button>
      

      {isModalOpen && (
        <Modal onClick={handleCloseModal}>
          <DetailPopup/>
        </Modal>
      )}
    </PicBox>
  );
};



const Modal = styled.div`
  margin-top: 1.6rem;
  display: flex;
  width: 92.4rem;
  height: 6.3rem;
  padding: 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid;
  border-color: #f2f2f2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem;
    height: 12.25rem;
  }
`;



const PicBox = styled.div`
  margin-top: 1.6rem;
  display: flex;
  width: 92.4rem;
  height: 6.3rem;
  padding: 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid;
  border-color: #f2f2f2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4rem;
    height: 12.25rem;
  }
`;
const Button = styled.a`
  width: 29.7333rem;
  height: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  text-decoration-line: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    gap: 4rem;
  }
`;
const ButtonImg = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  @media (max-width: 768px) {
    width: 3rem;
    height: 3.75rem;
  }
`;
const ButtonText = styled.div`
  color: #000;
  height: 1.6rem;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    height: 4rem;
  }
`;
const Line = styled.div`
  height: 1.6rem;
  width: 1px;
  background-color: #848484;
  @media (max-width: 768px) {
    height: 4rem;
  }
`;
