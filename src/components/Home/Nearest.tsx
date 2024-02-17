import React, { useEffect, useState } from 'react';
import StoreInfo from './StoreInfo';
import { useRecoilValue } from 'recoil';
import { NearestState } from '../../recoil/Home/HomeState';
import { useNavigate } from 'react-router-dom';
import BaseSliderItem from './Slider/BaseSliderItem';
import styled from 'styled-components';

const Nearest = () => {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const NearestInfo = useRecoilValue(NearestState(myLocation));
  const navigate = useNavigate();
  const onClickStore = () => {
    navigate('');
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        console.log(myLocation);
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  if (!NearestInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Container onClick={onClickStore}>
      <BaseSliderItem key={NearestInfo.data.id} item={NearestInfo.data} />
      <StoreInfo item={NearestInfo.data} />
    </Container>
  );
};

export default Nearest;
const Container = styled.div`
  background-color: aliceblue;
  width: 80%;
  height: 72.3rem;
  border-bottom: 0.5px solid var(--light-gray, #f2f2f2);
  @media (max-width: 768px) {
    width: 100%;
    height: 125.5rem;
  }
`;