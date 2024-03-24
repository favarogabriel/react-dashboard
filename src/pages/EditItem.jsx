import { useParams, Link } from 'react-router-dom'
import NewItemForm from '/src/components/NewItemForm/NewItemForm'
import Title from '/src/components/Title/Title'
import '/src/components/Title/Title'

export default function EditItem() {
    const params = useParams();

    let database = JSON.parse(localStorage.getItem('database')) || [];

    let item = database.find((el) => el.id === Number(params.item));

    function updateItem() {
        let indexItem = database.findIndex((el) => el.id === Number(params.item));
    
        if (indexItem >= 0) {
            database[indexItem].name = document.getElementById('name').value;
            database[indexItem].quantity = document.getElementById('quantity').value;
            database[indexItem].price = document.getElementById('price').value;
            database[indexItem].category = document.getElementById('category').value;
            database[indexItem].description = document.getElementById('description').value;
            database[indexItem].updatedAt = new Date().toDateString();
            localStorage.setItem('database', JSON.stringify(database));
        } else if (indexItem < 0) {
            throw new Error('This ID in array not exist.');
        }
    }

    return (
        <>
            <Title>Itens</Title>
            <div style={{ borderBottom: "1px solid #a1a1a1", display: "flex", gap: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
                    <Link to='/itens'>Todos os itens</Link>
                    <Link to='/itens/new-item'>Novo Item</Link>
            </div>
            <h2>Atualizar Item - {item.name}</h2>
            <NewItemForm category={item.category} description={item.description} name={item.name} price={item.price} quantity={item.quantity} onSubmitForm={updateItem}/>
        </>
    )
}