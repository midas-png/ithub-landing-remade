import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.palette.common.main};
  border-top: 2px solid ${({ theme }) => theme.palette.common.secondary};
  gap: 30px;
  padding: 70px 100px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CardsWrapper = styled(Swiper).attrs(() => ({
  modules: [Pagination],
  slidesPerView: 4,
  pagination: {
    clickable: true,
  },
}))`
  width: 100%;
  height: 120%;

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.palette.common.secondary};
  }
`;

export const CardSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;
