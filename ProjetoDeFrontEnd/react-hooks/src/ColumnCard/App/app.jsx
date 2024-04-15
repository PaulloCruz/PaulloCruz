import Container from "../Container/Container";
import ContainerCard from "../ContainerCard/ContainerCard";
import "./app.css"

// app é a junção de todos os componentes e onde as props tem seu valor atribuido

const App = ()=>{
    return(
    <>
        <Container/>
            <ContainerCard
            textTitle = "titulo"
            textCard = "Texto Card"
            textButton = "texto Botão"
            />
    </>
    )
}

export default App