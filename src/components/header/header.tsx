import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <img
            className="container-header-img"
            src="../../avion.png"
            alt="Logo de un avion"
            width={280}
            height={90}
          />
        </Link>
        <h1>...Lugares a visitar!</h1>
      </div>
    </header>
  );
}
