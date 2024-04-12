import ButtonModal from "../ButtonModal/ButtonModal"
import Modal from "../Modal/Modal"

const ContainerModal = (textButton) =>{
    const [modal, setModal]= React.useState(false)    

    return(
        <>
        <ButtonModal
        text={textButton}
        setModal={setModal}
        modal={modal}
        />
        <Modal 
        modal={modal}
        textButton={textModal}/>
        </>
    )
}
export default ContainerModal