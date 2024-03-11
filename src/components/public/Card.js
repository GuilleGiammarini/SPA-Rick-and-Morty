import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({personaje}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
      <img width="100%" src={personaje.image} alt="imagen"/>
      <h3 clasName="mb-0 text-dark"> {personaje.name} </h3>
      <h5>{personaje.species}</h5>

      <div className="card-body">
        <p className="card-text">Status: {personaje.status}</p>
          <p>Type: {personaje.type}</p>
          <p>Gender: {personaje.gender}</p>
          <p>Origin: {personaje.origin.name}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link to={`details/${personaje.id}`} className="nav-link">
                  Detalle
              </Link>
            </button>
            
          </div>
          <small className="text-muted">Card R&M</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
