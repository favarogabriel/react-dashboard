import '/src/components/Header/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header>
      <h1>REACT STOCK</h1>
      <nav>
        <ul>
          <Link to='/'><li>Início</li></Link>
          <Link to='itens'><li>Itens</li></Link>
        </ul>
      </nav>
    </header>
    )
}

export default Header;