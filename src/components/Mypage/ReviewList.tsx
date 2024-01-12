import React from 'react';
import styled from 'styled-components';
import { ReviewDummy } from './Dummy/ReviewDummy';
const ReviewList = () => {
  return (
    <Wrap>
      <ReviewTitle> 내가 쓴 리뷰</ReviewTitle>
      <Reviews>
        {ReviewDummy.map((i) => (
          <Review key={i.storeName}>
            <StoreImg src={`assets/${i.photo}`} alt={`${i.storeName}}의 이미지`} />
            <div>
              <h3>{i.storeName}</h3>
              <p>{i.content}</p>
            </div>
            <LikeIcon src="assets/like.png" alt="좋아요아이콘" />
            <LikeCount>{i.likeCount}</LikeCount>
            <TrashWrap>
              <TrashIcon src="assets/trash.png" alt="삭제아이콘" />
              <TrashText>삭제</TrashText>
            </TrashWrap>
            <Date>{i.date}</Date>
          </Review>
        ))}
      </Reviews>
    </Wrap>
  );
};
export default ReviewList;

const Wrap = styled.div`
  width: calc(100vw - 10%);
  margin-left: 10%;
`;

const ReviewTitle = styled.h1`
  margin: 1.3rem 0 1rem 0;
  font-size: 0.88rem;
  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin: 1rem 0 1rem 0;
  }
`;

const Reviews = styled.div`
  display: flex;
  height: 9rem;
  overflow-x: auto;
  /* 인터넷 익스플로러를 위한 스타일 */
  -ms-overflow-style: none;

  /* 파이어폭스를 위한 스타일 */
  scrollbar-width: none;

  /* 웹킷(크롬, 사파리, 새로운 엣지) 브라우저를 위한 스타일 */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    height: 5rem;
  }
`;

const Review = styled.div`
  margin-right: 1.25rem;
  width: 21.75rem;
  height: 6.25rem;
  border: solid;
  border-color: #d9d9d9;
  border-width: 1px;
  border-radius: 0.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > div > h3 {
    font-size: 0.88rem;
    margin: 0.5rem 0 0 0.5rem;
  }
  & > div > p {
    font-size: 0.63rem;
    margin: 0.2rem 0 0 0.5rem;
    color: rgba(86, 86, 86, 1);
  }
  @media (max-width: 768px) {
    width: 14.94rem;
    height: 4rem;

    & > div > h3 {
      font-size: 0.63rem;
    }
    & > div > p {
      font-size: 0.5rem;
    }
  }
`;
const StoreImg = styled.img`
  width: 6.25rem;
  height: 100%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  @media (max-width: 768px) {
    width: 4rem;
  }
`;

const LikeIcon = styled.img`
  width: 1rem;
  position: absolute;
  left: 4.6rem;
  bottom: 1.2rem;
  @media (max-width: 768px) {
    width: 0.63rem;
    left: 3rem;
    bottom: 0.8rem;
  }
`;
const LikeCount = styled.p`
  font-size: 0.5rem;
  position: absolute;
  color: rgba(86, 86, 86, 1);
  bottom: 0rem;
  left: 4.85rem;
  @media (max-width: 768px) {
    width: 0.5rem;
    bottom: -0.4rem;
    left: 3.1rem;
  }
`;
const TrashText = styled.p`
  position: absolute;
  left: 0;
  visibility: hidden;
  left: 19.45rem;
  bottom: 0.6rem;
  @media (max-width: 768px) {
    left: 13rem;
    bottom: 0.3rem;
  }
`;
const TrashWrap = styled.div`
  &:hover ${TrashText} {
    visibility: visible; /* 호버 시 텍스트 보임 */
  }
`;

const TrashIcon = styled.img`
  width: 1.69rem;
  right: 0.4rem;
  bottom: 0.3rem;
  position: absolute;
  @media (max-width: 768px) {
    width: 0.9rem;
  }
`;

const Date = styled.p`
  font-size: 0.63rem;
  color: #d9d9d9;
  position: absolute;
  right: 0.7rem;
  top: 0.1rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
