import Banner from "@/components/commons/banner/Banner";
import Title from "@/components/commons/Title";
import MainBest from "@/components/main/MainBest";
import MainNewBooks from "@/components/main/MainNewBooks";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";
import styled from "styled-components";

function Main() {
  const { reviews, newBooks, bestBooks, banners } = useMain();
  const { isMobile } = useMediaQuery();

  return (
    <MainStyle>
      <Banner banners={banners} />
      <section className="section">
        <Title size="large" color="primary">
          추천 도서
        </Title>
        <MainBest books={bestBooks} />
      </section>
      <section className="section">
        <Title size="large" color="primary">
          신간 도서
        </Title>
        <MainNewBooks books={newBooks} />
      </section>
      <section className="section">
        <Title size="large" color="primary">
          리뷰
        </Title>
        <MainReview reviews={reviews} />
      </section>
    </MainStyle>
  );
}

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export default Main;
