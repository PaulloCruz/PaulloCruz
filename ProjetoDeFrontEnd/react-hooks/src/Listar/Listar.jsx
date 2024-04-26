import React from "react"
import "./Listar.css"

const Listar = () => {
    const[items, setItems] = React.useState(['Lista de items'])

    function HandleClick () {
        setItems([...items, `Item ${items.length}`])
    }
    function DeleteClick () {
        const novoItems = [...items];
        novoItems.pop();
        setItems(novoItems);
    }

    return(
        <>
        {items.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
        <button onClick={HandleClick}>Adicionar Item</button>
        <button onClick={DeleteClick}>Remover Item</button>
        </>
    )
}
export default Listar;






