import removeItem from "/src/functions/removeItem";
import { Link } from 'react-router-dom'

export default function TableRowLeftItens({ onClickRemove }) {
    let database = JSON.parse(localStorage.getItem('database')); 

    return (
        <>
        {database.map((el) => (
            <tr key={el.id}>
                <td className="hidden">{el.id}</td>
                <td>{el.name}</td>
                <td>{el.quantity}</td>
                <td className="hiddenCategory">{el.category}</td>
                <td style={{ display: "flex" }}>
                    <Link to={`/itens/${el.id}`}><button className="blueButton"><img src="../img/seeIcon.svg" alt="" /><span className="onlyIcon">Ver</span></button></Link>
                    <Link to={`/itens/${el.id}/edit`}><button className="greenButton"><span><img src="../img/editIcon.svg" alt="" /></span><span className="onlyIcon">Atualizar</span></button></Link>
                    <button className="redButton" 
                    onClick={() => {
                        removeItem(el.id)
                        onClickRemove();
                    }
                    }
                    >
                        <img src="../img/trashIcon.svg" alt="" />
                        <span className="onlyIcon">Excluir</span>
                    </button>
                </td>
            </tr>
        ))}
        </>
    )
}