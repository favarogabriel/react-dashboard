import { useState } from "react";
import Title from "/src/components/Title/Title";
import { Link } from 'react-router-dom';
import TableRowLeftItens from "/src/components/TableRowLeftItens";



export default function Itens() {
    let database = JSON.parse(localStorage.getItem('database')); 
    const [tableRowsLeft, setTableRowsLeft] = useState(<TableRowLeftItens onClickRemove={onClickRemove}/>)

    function onClickRemove() {
        setTableRowsLeft(<TableRowLeftItens onClickRemove={onClickRemove}/>)
    }
    
    return (
        <>
            <Title>Itens</Title>
            <div style={{ borderBottom: "1px solid #a1a1a1", display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <Link to='/itens' style={{ borderBottom: "1px solid #fff", paddingBottom: "0.5rem"}}>Todos os itens</Link>
                <Link to='new-item'>Novo Item</Link>
            </div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th className="hidden">ID</th>
                            <th>Nome</th>
                            <th>Em estoque</th>
                            <th className="hiddenCategory">Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {database ?                   
                            tableRowsLeft
                        : 
                        <tr>
                            <td>Nenhum item adicionado ainda!</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}