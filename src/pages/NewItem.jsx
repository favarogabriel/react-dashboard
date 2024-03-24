import NewItemForm from '/src/components/NewItemForm/NewItemForm';
import Title from '/src/components/Title/Title';
import createNewItem from '/src/functions/createNewItem.jsx';
import { Link } from 'react-router-dom';

export default function NewItem() {
    return (
        <>
            <Title>Itens</Title>
            <div style={{ borderBottom: "1px solid #a1a1a1", display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <Link to='/itens'>Todos os itens</Link>
                <Link to='new-item' style={{ borderBottom: "1px solid #fff", paddingBottom: "0.5rem"}}>Novo Item</Link>
            </div>
            <NewItemForm 
            onSubmitForm={() => {
                createNewItem();
            }}
            />
        </>
    )
}