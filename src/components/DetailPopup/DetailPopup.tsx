import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { detailModalState } from '../../recoil';
import { useEffect, useRef } from 'react';

export const DetailPopup = () => {
  const setModal = useSetRecoilState(detailModalState);
  const modalRef = useRef<HTMLDivElement>(null); // 모달 ref 추가
  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <Background>
      <Modal ref={modalRef}>
        <Xbutton
          src={`${process.env.PUBLIC_URL}/assets/StoreDetail/xbutton.png`}
          onClick={() => {
            setModal(false);
          }}
        />
        <Title>매장정보</Title>

        <Information>
          <PicInformation>
            <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/pets.svg`} />
            <PicTexts>반려동물 동반</PicTexts>
          </PicInformation>
          <PicInformation>
            <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/local_parking.svg`} />
            <PicTexts>주차가능</PicTexts>
          </PicInformation>
          <PicInformation>
            <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/valve.svg`} />
            <PicTexts>리필스테이션</PicTexts>
          </PicInformation>
          <PicInformation>
            <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/no_stroller.svg`} />
            <PicTexts>노키즈존</PicTexts>
          </PicInformation>
          <PicInformation>
            <Image src={`${process.env.PUBLIC_URL}assets/DetailPopup/barcode_scanner.svg`} />
            <PicTexts>제로페이</PicTexts>
          </PicInformation>
        </Information>

        <TimInformation>
          <Texts>운영정보</Texts>
          <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/calendar_month.svg`} />
          <TimeInfo>
            <div>월 10:00 - 20:00</div> <div>화 10:00 - 20:00</div> <div>수 정기 휴무</div>
            <div>목 10:00 - 20:00</div> <div>금 10:00 - 20:00</div> <div>토 9:00 - 22:00</div>
            <div>일 정기 휴무</div>
          </TimeInfo>
        </TimInformation>
        <TimInformation>
          <Texts>위치&ensp;&ensp;&ensp;&nbsp;</Texts>
          <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/location_on.svg`} />
          <TimeInfo>서울특별시 마포구 성미산로 155, 1층</TimeInfo>
        </TimInformation>
        <TimInformation>
          <Texts>전화번호</Texts>
          <InfoImage src={`${process.env.PUBLIC_URL}assets/DetailPopup/call.svg`} />
          <TimeInfo>010-0000-0000</TimeInfo>
        </TimInformation>
      </Modal>
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
  height: 41.9rem;
  border-radius: 1.6rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    width: 327px;
    height: 374px;
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
  color: black;
  margin: 56px auto 0 auto;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 510;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: 12.4rem;
    margin-right: 12.4rem;
    justify-content: center;
    text-align: center;
  }
`;

const Information = styled.div`
  justify-content: center;
  width: 100%;
  position: relative;
  text-align: center;
  justify-content: center;
  display: flex;
`;

const PicTexts = styled.div`
  position: relative;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 8px;
  font-weight: 500;
  margin-top: 0.8rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    width: 47px;
    text-align: justify;
  }
`;

const PicInformation = styled.div`
  left: 0;
  top: 0;
  position: relative;
  margin-top: 32px;
  text-align: flex;

  @media (max-width: 768px) {
    width: 3.7rem;
    height: 4.3rem;
    margin: 24px;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 24;
  height: 24;
  position: relative;
  padding: 0rem 2.4rem 0rem 2.4rem;

  @media (max-width: 768px) {
    padding: 0;
    margin: auto;
  }
`;

const InfoImage = styled.img`
  width: 12px;
  height: 12px;
  position: relative;
  margin: 0rem 0.8rem 0rem 1.6rem;
`;

const TimeInfo = styled.div`
  color: black;
  font-size: 12px;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  div {
    height: 1.5rem;
  }
  @media (max-width: 768px) {
  }
`;

const TimInformation = styled.div`
  color: black;
  font-size: 12px;
  font-family: 'Noto Sans KR';
  font-weight: 400;
  word-wrap: break-word;
  height: 112px;
  width: 292px;
  margin-left: 138px;
  margin-top: 32px;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 4rem;
    margin-top: 24px;
    margin-left: 24px;
  }
`;

const Texts = styled.div`
  position: relative;
  width: auto;
  font-weight: 600;
  justify-content: space-between;
  align-items: flex-start;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export default DetailPopup;