import { render } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/ThemeContext";
import { Book } from "../../models/book.model";
import BookItem from "./BookItem";
import { formatNumber } from "../../utils/format";

const dummyBook: Book = {
  id: 1,
  title: "Dummy Book",
  img: 5,
  category_id: 1,
  form: "paperback",
  isbn: "Dummy ISBN",
  summary: "Dummy Summary",
  detail: "Dummy Detail",
  author: "Dummy Author",
  pages: 100,
  contents: "Dummy Contents",
  price: 10000,
  likes: 1,
  pubDate: "2021-01-01",
};

describe("BookItem 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    const { getByText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyBook}/>
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText(formatNumber(dummyBook.price)+"원")).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
  });
});
