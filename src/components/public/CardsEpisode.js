import React from 'react'
import CardEpisode from './CardEpisode'

const CardsEpisode = ({episodes}) => {
  
    const cardsList = episodes.map((e)=> <CardEpisode episode={e} key={e.id}/>)
    return (
        <div className="album py-5 bg-light">
        <div className="container">

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {cardsList}

            </div>
        </div>
    </div>
  )
}

export default CardsEpisode