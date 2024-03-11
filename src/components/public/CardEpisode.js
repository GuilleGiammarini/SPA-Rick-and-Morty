import React from 'react'

const CardEpisode = ({episode}) => {
  return (
    <div className="col">
    <div className="card shadow-sm">
      <h3 clasName="mb-0 text-dark"> {episode.name} </h3>
      <div className="card-body">
          <p>Aire: {episode.air_date}</p>
          <p>Episodio: {episode.episode}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">Card R&M</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardEpisode
