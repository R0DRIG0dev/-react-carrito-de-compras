import "./estilos/BarraLateral.css";

function BarraLateral({efecto_colapsar}) {

  return (
    <nav className="sidebar">
      <div className="sidebar-top-wrapper">
        <a href="#" className="logo__wrapper">
          <img src="../public/logo.PNG" alt="logo" className="logo-small"/>
          <span className="hide"> Codea App </span>
        </a>
        <div className="expand-btn" onClick={ efecto_colapsar }>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
              stroke="#4A516D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="search__wrapper">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
            stroke="#697089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <input type="search" placeholder="Search for anything..."/>
      </div>

      <div className="sidebar-links">
        <h2>Menú</h2>

        <ul>
          <li>
            <a href="#">
              <img src="../public/backend.svg" alt="logo"/>
              <span className="hide"> Backend </span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="../public/desarrollo_movil.svg" alt="logo"/>
              <span className="hide"> Desarrollo movil </span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="../public/frontend.svg" alt="logo"/>
              <span className="hide"> Frontend </span> 
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="../public/fullstack.svg" alt="logo"/>
              <span className="hide"> Fullstack </span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <img src="../public/otros.svg" alt="logo"/>
              <span className="hide"> Otros </span> 
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default BarraLateral;