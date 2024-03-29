import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <span
        className="d-flex aling-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img className="App-logo" height="52" src="rick.png" alt="" />
        </span>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 text-white">
                Personajes
            </Link>
          </li>
          <li>
            <Link to="/locations" className="nav-link px-2 text-white">
                Locaciones
            </Link>
          </li>
          <li>
            <Link to="/episodes" className="nav-link px-2 text-white">
                Episodios
            </Link>
          </li>
            <Link to="/about" className="nav-link px-2 text-white">
                About
            </Link>
        </ul>

        {/*<form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>*/}

        <div className="text-end">
          {/*<button type="button" className="btn btn-outline-light me-2">Login</button>*/}
          <button type="button" className="btn btn-warning">
            <Link to="/user-from" className="nav-link px-2 text-white">
                Registro
            </Link>
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
