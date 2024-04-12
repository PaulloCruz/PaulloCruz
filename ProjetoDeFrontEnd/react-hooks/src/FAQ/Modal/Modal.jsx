const Modal = ({textModal,modal}) =>{
    if(modal === true)
    return(
        <p>{textModal}</p>
    )
    return null
}

export default Modal    