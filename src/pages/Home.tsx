import Title from "../components/commons/Title";
import Button from "../components/commons/Button";
import InputText from "../components/commons/InputText"

function Home() {
  return (
    <>
      <Title size="large" color="background">
        제목 텍스트
      </Title>
      <Button size="large" scheme="primary">
        버튼
      </Button>
      <InputText placeholder="여기에 입력하세요." />
      <div>홈 페이지</div>
    </>
  );
}

export default Home;
