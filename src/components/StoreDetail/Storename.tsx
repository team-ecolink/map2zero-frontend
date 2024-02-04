import styled from 'styled-components';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { shareModalState } from '../../recoil';
export const StoreName = () => {
  const [handlebookmark, sethandlebookmark] = useState(true);
  const setmodal = useSetRecoilState(shareModalState);
  return (
    <DetailBox>
      <Name>매장명</Name>
      <div>
        <LinkButton onClick={() => setmodal(true)} src={`${process.env.PUBLIC_URL}/assets/StoreDetail/share.svg`} />
        <LinkButton
          onClick={() => {
            sethandlebookmark(!handlebookmark);
          }}
          src={
            handlebookmark
              ? `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark.png`
              : `${process.env.PUBLIC_URL}/assets/StoreDetail/bookmark_x.png`
          }
        />
      </div>
    </DetailBox>
  );
};

const Modal = styled.div`
  position: fixed;
  display: flex;
  width: 92.4rem;
  height: 4.5rem;
  margin-top: 3.2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 6rem;
    height: 8.75rem;
  }
`;

const DetailBox = styled.div`
  display: flex;
  width: 92.4rem;
  height: 4.5rem;
  margin-top: 3.2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 6rem;
    height: 8.75rem;
  }
`;
const Name = styled.div`
  align-items: center;
  color: #000;
  font-family: 'Noto Sans KR';
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;
const LinkButton = styled.img`
  width: 1.5152rem;
  height: 2rem;
  margin: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 3.375rem;
    height: 3.75rem;
  }
`;
