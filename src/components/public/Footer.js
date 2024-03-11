import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  {/* Hook de Clicks: Contador */}
  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "Guillermo L.G. ";

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} Clicks={clicks}</p>

      <span
        className="d-flex aling-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        onClick={handleClick}
        >
          <img className="App-logo" 
          height="52" 
          src="rick.png" 
          alt="rick-giratorio" />
      </span>
  
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
                Personajes
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/locations" className="nav-link px-2 text-muted">
                Locations
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/episodes" className="nav-link px-2 text-muted">
                Episodios
            </Link>
        </li>
            <Link to="/about" className="nav-link px-2 text-muted">
                About
            </Link>
      </ul>
    </footer>
  </div>
  )
}

export default Footer
