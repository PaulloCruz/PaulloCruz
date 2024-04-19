import Campos from "../Campos/Campos"
import "./Container.css"

const Container = () =>{       
    return(
        <>

        <div className="Container">
            <Campos
            anuncio={'Try iy free 7 days'}
            type={'text'}
            placeholder={'digite primeiro nome'}
            nome={'nome'}
             />
             <Campos
            type={'text'}
            placeholder={'digite seu ultimo nome'}
            nome={'ultimo nome'}
             />
            <Campos
            type={'text'}
            placeholder={'digite seu email'}
            nome={'nome'}
             />
             <Campos
            type={'password'}
            placeholder={'digite sua senha'}
            nome={'senha'}
             />
    
        </div>
        </>
    )
}
  
export default Container


// const Button = ({nome}) =>{
//     return(
//         <button>{nome}</button>
//     )
// }

// export default Button;

// // import Button from "../Button/Button"
// import "./SectionCar.css"


// const SectionCar = ({titulo, texto, image, color,bordaPrimeiro}) =>{
//     return(
//         <>
//         <article style={{background:color}}>
//         <img src={image} alt="" />
//         <h1>{titulo}</h1>
//         <p>{texto}</p>
//         <Button nome={"Learn More"}/>
//         </article>
//         </>
//     )
// }
// export default SectionCar   

// import "./App.css"
// import SectionCar from "../SectionCar/SectionCar"
// import IconSedan from "../../../images/icon-sedans.svg"
// import IconSuvs from "../../../images/icon-suvs.svg"
// import IconLuxury from "../../../images/icon-luxury.svg"
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
