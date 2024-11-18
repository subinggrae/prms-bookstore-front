import { FaSmileWink } from "react-icons/fa";
import styled from "styled-components";
import Title from "../commons/Title";
import { Link } from "react-router-dom";
import Empty from "../commons/Empty";

function BooksEmpty() {
  return (
    // <BooksEmptyStyle>
    //   <div className="icon">
    //     <FaSmileWink />
    //   </div>
    //   <Title size="large" color="secondary">
    //     검색 결과가 없습니다.
    //   </Title>
    //   <p>
    //     <Link to="/books">전체 검색 결과로 이동</Link>
    //   </p>
    // </BooksEmptyStyle>
    <Empty
      icon={<FaSmileWink />}
      title="검색 결과가 없습니다."
      description={<Link to="/books">전체 검색 결과로 이동</Link>}
    />
  );
}

const BooksEmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`;

export default BooksEmpty;
