import './App.css'
import Text from '../Text/Text'
import Container from '../Container/Container'

const App = ()=>{
    return(
    <>
        <div className='Geral'>
        
        <Text titulo={"Learn to code by watching other"} escopo={'see how experience developers salve problems in real time watching scripted tutorials is reat but understanding how developers think is invaluable'} />
        <Container/>

        </div>
    </>
    )
}

export default App

// import "./App.css"
// import SectionCar from "../SectionCar/SectionCar"

// const App = () =>{
//     return(
//         <>
//         <section>
//         <SectionCar
//             titulo="SEDANS"
//             texto="Choose a sedan for its affordability and escellent fuel economy. Idal for crusing in the city or on your next road trip"
//             image={IconSedan}
//             color="hsl(179, 100%, 13%)"
//             />  
//             <SectionCar
//             titulo="SEDANS"
//             texto="Choose a sedan for its affordability and escellent fuel economy. Idal for crusing in the city or on your next road trip"
//             image={IconSuvs}
//             color="hsl(31, 77%, 52%)"
//             />
//             <SectionCar
//             titulo="SEDANS"
//             texto="Choose a sedan for its affordability and escellent fuel economy. Idal for crusing in the city or on your next road trip"
//             image={IconLuxury}
//             color="hsl(184, 100%, 22%)"
//             />
//             </section>

//         </>
//     )
// }

// export default App;
