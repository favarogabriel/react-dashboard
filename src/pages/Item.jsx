import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import Title from "/src/components/Title/Title";
import InfoItem from "/src/components/InfoItem/InfoItem";
import removeItem from "/src/functions/removeItem";

export default function Item() {
    const params = useParams();

    let database = JSON.parse(localStorage.getItem('database')); 
    let item = database.find((el) => el.id === Number(params.item));
    const navigateTo = useNavigate();

    return (
        <>
            <Title>Itens</Title>
            <div style={{ borderBottom: "1px solid #a1a1a1", display: "flex", gap: "1rem", marginBottom: "1rem", paddingBottom: "0.5rem" }}>
                    <Link to='/itens'>Todos os itens</Link>
                    <Link to='/itens/new-item'>Novo Item</Link>
            </div>
            <section style={{ display: "flex", alignItems: "center" }}>
                <h3 style={{ fontWeight: "100", marginRight: "16px" }}>{item.name}</h3>
                <Link to={`/itens/${item.id}/edit`}><button className="greenButton"><img src="../img/editIcon.svg" alt="" /><span className="onlyIcon">Atualizar</span></button></Link>
                <button className="redButton" onClick={() => { removeItem(Number(params.item)); navigateTo('/itens')}}><img src="../img/trashIcon.svg" alt=""></img><span className="onlyIcon">Excluir</span></button>
            </section>
            <section>
                <InfoItem info='Categoria: ' data={item.category}/>
                <InfoItem info='Quantidade em estoque: ' data={item.quantity}/>
                <InfoItem info='Preço: R$' data={item.price}/>
                <p>{item.description}</p>
            </section>
            <section style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
                <p>Cadastrado em: {item.createdAt}</p>
                <p>Atualizado em: {item.updatedAt ? item.updatedAt : 'Nenhuma atualização realizada'}</p>
            </section>
        </>
    )
}