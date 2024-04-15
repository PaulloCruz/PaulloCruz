import ButtonCard from "../ButtonCard/ButtonCard";
import TextCard from "../TextCard/TextCard";
import TitleCard from "../TitleCard/TitleCard";

const ContainerCard = (textCard)=>{
    return(
        <>
        <img src="#" alt="#" />
        <TitleCard
        Text={textTitle}
        />
        <TextCard
        Text={textCard}
        />
        <ButtonCard
        text={textButton}
        />        
        </>
    )
}
export default ContainerCard