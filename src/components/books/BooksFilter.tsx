import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../commons/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

function BooksFilter() {
  const category = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id) {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString());
    } else {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID);
    }

    setSearchParams(newSearchParams);
  };

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get(QUERYSTRING.NEWS)) {
      newSearchParams.delete(QUERYSTRING.NEWS);
    } else {
      newSearchParams.set(QUERYSTRING.NEWS, "true");
    }

    setSearchParams(newSearchParams);
  };

  return (
    <>
      <BooksFilterSTyle>
        <div className="category">
          {category.map((item) => (
            <Button
              size="medium"
              scheme={item.isActive ? "primary" : "normal"}
              key={item.id}
              onClick={() => handleCategory(item.id)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="new">
          <Button
            size="medium"
            scheme={searchParams.get(QUERYSTRING.NEWS) ? "primary" : "normal"}
            onClick={handleNews}
          >
            신간
          </Button>
        </div>
      </BooksFilterSTyle>
    </>
  );
}

const BooksFilterSTyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;

export default BooksFilter;
