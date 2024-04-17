import "./App.css"
import SectionCar from "../SectionCar/SectionCar"
import IconSedan from "../../../images/icon-sedans.svg"
import IconSuvs from "../../../images/icon-suvs.svg"
import IconLuxury from "../../../images/icon-luxury.svg"
const App = () =>{
    return(
        <>
        <section>
        <SectionCar
            titulo="SEDANS"
            texto="Choose a sedan for its affordability and escellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={IconSedan}
            color="hsl(179, 100%, 13%)"
            />  
            <SectionCar
            titulo="SEDANS"
            texto="Choose a sedan for its affordability and escellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={IconSuvs}
            color="hsl(31, 77%, 52%)"
            />
            <SectionCar
            titulo="SEDANS"
            texto="Choose a sedan for its affordability and escellent fuel economy. Idal for crusing in the city or on your next road trip"
            image={IconLuxury}
            color="hsl(184, 100%, 22%)"
            />
            </section>

        </>
    )
}

export default App;
