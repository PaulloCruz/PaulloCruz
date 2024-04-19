import './Campos.css'
const Campos = ({type,nome,placeholder,anuncio})=>{
    return(
        <>
        <div className="anuncio">{anuncio}</div>
    <input type={type} className={nome} placeholder={placeholder}
    />
    </>
    )
}

export default Campos