import styled from "styled-components";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import Pagination from "../components/books/Pagination";
import Title from "../components/commons/Title";
import { useBooks } from "../hooks/useBooks";
import Loading from "@/components/commons/Loading";
import { useBooksInfinite } from "@/hooks/useBooksInfinite";
import Button from "@/components/commons/Button";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function Books() {
  const {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    hasNextPage,
    fetchNextPage,
  } = useBooksInfinite();
  
  const moreRef = useIntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      loadMore();
    }
  });

  const loadMore = () => {
    if (!hasNextPage) return;
    fetchNextPage();
  };

  if (isEmpty) {
    return <BooksEmpty />;
  }

  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>
        <BooksList books={books} />
        {/* <Pagination pagination={pagination} /> */}
        <div className="more" ref={moreRef}></div>
      </BooksStyle>
    </>
  );
}

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

export default Books;
