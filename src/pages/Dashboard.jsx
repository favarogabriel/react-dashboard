import InfoBox from "/src/components/InfoBox/InfoBox";
import Title from "/src/components/Title/Title";
import '/src/dashboard.css'
import { Link } from 'react-router-dom';

export default function Dashboard() {
    let database = JSON.parse(localStorage.getItem('database'));

    let totalQuantity = database.reduce((accum, value) => accum + Number(value.quantity), 0)
    let stockFinishing = database.filter((el) => el.quantity < 10);
    let recentItens = database.filter((el) => {
        const convertedDate = new Date(el.createdAt);

        if(Date.now() <= convertedDate.getTime() + 864000000) {
           return el;
        } 
    })
    let varietyItens = database.map((el) => el.category).sort().reduce((accum, el) => {
        if(!accum.includes(el)) {
            accum.push(el);
        }

        return accum;
    }, []);

    return (
        <>
            <Title>Dashboard</Title>
            <div className="dashContainer">
                <InfoBox infoTitle='Diversidade de itens' infoData={varietyItens.length} />
                <InfoBox infoTitle='Inventário total' infoData={totalQuantity} />
                <InfoBox infoTitle='Itens recentes' infoData={recentItens.length} />
                <InfoBox infoTitle='Itens acabando' infoData={stockFinishing.length} />
                <section className="sectionOne">
                    <table>
                        <thead>
                            <tr>
                                <th>Itens Recentes</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentItens.length > 0 ? recentItens.map((el) => (
                                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td><Link to={`/itens/${el.id}`}><button className="blueButton"><img src="../img/seeIcon.svg"></img><span className="onlyIcon">Ver</span></button></Link></td>
                                </tr>
                            )) : 
                            <tr>
                                <td>Nenhum item recente ainda.</td>
                            </tr> 
                            }
                        </tbody>
                    </table>
                </section>
                <section className="sectionTwo">
                    <table>
                        <thead>
                            <tr>
                                <th>Itens Acabando</th>
                                <th>Quantidade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stockFinishing.length > 0 ? stockFinishing.map((el) => (
                                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.quantity}</td>
                                    <td><Link to={`/itens/${el.id}`}><button className="blueButton"><img src="../img/seeIcon.svg"></img><span className="onlyIcon">Ver</span></button></Link></td>
                                </tr>
                            )) :
                            <tr>
                                <td>Nenhum item acabando ainda.</td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    )
}