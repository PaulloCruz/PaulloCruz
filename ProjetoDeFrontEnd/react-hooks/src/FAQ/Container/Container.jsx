// children é para quando o componentes tiver elementos filhos
import "./Container.css"

const Container = ({children})=>{
    return(
        <section className="container">{children}</section>
    )
}

export default Container