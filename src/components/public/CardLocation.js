import React from 'react'

const CardLocation = ({location}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
      <h3 clasName="mb-0 text-dark"> {location.name} </h3>
      <div className="card-body">
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Card R&M</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardLocation
