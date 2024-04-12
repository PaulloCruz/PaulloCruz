import Container from "../Container/Container";
import ContainerModal from "../ContainerModal/ContainerModal"
import "./App.css";

// App componente que abreanje todos os componentes
const App = () => {

  return (
    
      <Container>
            <ContainerModal
            textButton={"esse é o texto do meu modal"}
            textModal={"as duvidos ba bal abb"}
            />
          
      </Container>
  );
};

export default App;
