import styled from 'styled-components';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { productName } from '../../recoil';
import { useEffect, useState } from 'react';

const Selling = atom<number>({
  key: 'Selling',
  default: 0,
});

const text = ['개', '100ml', '1L', '100g', '1Kg'];
export const DropdownList = () => {
  const setselling = useSetRecoilState(Selling);
  return (
    <ul>
      {text.map((li, i) => (
        <DropdownText
          key={i}
          onClick={() => {
            setselling(i);
          }}
        >
          / {li}
        </DropdownText>
      ))}
    </ul>
  );
};

export const Dropdown = () => {
  const [isDropdownView, setDropdownView] = useState(false);
  const selling = useRecoilValue(Selling);
  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  return (
    <ProductDropbox onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <DropdownButton $isDropdownopen={isDropdownView}>
          / {text[selling]}
          <img
            src={
              isDropdownView
                ? `${process.env.PUBLIC_URL}/assets/ProductList/uparrow.svg`
                : `${process.env.PUBLIC_URL}/assets/ProductList/downarrow.svg`
            }
          ></img>
        </DropdownButton>
      </label>
      {isDropdownView && <DropdownList />}
    </ProductDropbox>
  );
};
export const Price = () => {
  const setText = useSetRecoilState(productName);
  const [isPrice, setisPrice] = useState(false);
  const onInputHandler = (e: any) => {
    setText(e.target.value);
    if (e.target.value) {
      setisPrice(true);
    } else {
      setisPrice(false);
    }
  };
  return (
    <Namebox>
      <TextBox placeholder=", 없이 숫자만 작성해 주세요" onChange={onInputHandler} type="number"></TextBox>
      {isPrice ? <Won>원</Won> : <></>}
      <Dropdown></Dropdown>
    </Namebox>
  );
};

const Namebox = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  margin-top: 1.4rem;
  margin-left: 6.4rem;
`;
const TextBox = styled.input`
  width: 70%;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid #e0e0e0;
  font-size: 1rem;
  outline: none;
  &::placeholder {
    color: #e0e0e0;
    font-weight: 400;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-bottom: 2.5rem;
    margin-top: 3.5rem;
  }
`;
const Won = styled.div`
  width: 1rem;
  font-size: 1.4rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ProductDropbox = styled.div`
  height: 100%;
  margin-left: 3rem;
  width: 8rem;
  height: 2.9rem;
  @media (max-width: 768px) {
    margin-left: 8rem;
    width: 18rem;
    height: 8rem;
    font-size: 4rem;
  }
`;
const DropdownButton = styled.button<{ $isDropdownopen: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.$isDropdownopen ? '#F2F2F2' : 'transparent')};
  align-items: center;
  width: 100%;
  height: 100%;
  align-self: stretch;
  font-size: 1.4rem;
  padding: 1rem;
  color: #ff6464;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 4rem;
    height: 8rem;
  }
`;
const DropdownText = styled.li`
  position: relative;
  background-color: #fff;
  text-align: center;
  padding: 0.8rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 100%;
  &:hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 2.5rem;
    width: 100%;
    height: 8rem;
  }
`;
