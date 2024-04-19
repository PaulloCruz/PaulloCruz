import './Text.css'
const Text = ({titulo,escopo})=>{
    return(
        <>
        <div className='text'>
    <h1>{titulo}</h1>
    <h3>{escopo}</h3>
    </div>
    </>
    )
}

export default Text