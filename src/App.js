import CarForm from "./component/CarForm";
import CarSearch from "./component/CarSearch";
import CarList from "./component/CarList";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  margin-top: 20px;
`;

function App() {
  return (
   <Container>
    <CarForm/>
    <CarSearch/>
    <CarList/>
   </Container>
  );
}

export default App;
