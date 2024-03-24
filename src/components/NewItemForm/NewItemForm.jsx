import '/src/components/NewItemForm/newitemform.css';
import { useNavigate } from "react-router-dom";


export default function NewItemForm({ onSubmitForm, name, quantity, price, category, description }) {
    const navigateTo = useNavigate();

    return (
        <form onSubmit={(ev) => {
            ev.preventDefault();
            onSubmitForm();
            navigateTo('/itens')
            }}>
            <div className="nameForm">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" defaultValue={name} />
            </div>
            <div className="quantityForm">
                <label htmlFor="quantity">Quantidade</label>
                <input type="number" id="quantity" defaultValue={quantity}/>
            </div>
            <div className="priceForm">
                <label htmlFor="price">Preço</label>
                <input type="number" id="price" step={.01} defaultValue={price}/>
            </div>
            <div className="categoryForm">
                <label>Categoria</label>
                <select defaultValue={category ? category : 'DEFAULT'} name="category" id="category">
                    <option value='DEFAULT' disabled>Escolha uma opção...</option>
                    <option value="Jogos">Jogo</option>
                    <option value="Pôsters">Pôster</option>
                    <option value="Vídeo Game">Console</option>
                </select>
            </div>
            <div className="descriptionForm">
                <label htmlFor="description">Descrição</label>
                <textarea name="description" id="description" defaultValue={description}></textarea>
            </div>
            <button type="submit" className="greenButton" style={{ marginTop: "1rem" }}><img src="../img/checkIcon.svg" alt="" /><span className='onlyIcon'>Salvar</span></button>
        </form>
    )
}