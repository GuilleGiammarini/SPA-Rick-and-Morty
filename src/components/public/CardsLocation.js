import React from 'react'
import CardLocation from './CardLocation'

const CardsLocation = ({locations}) => {
  
    const cardsList = locations.map((l)=> <CardLocation location={l} key={l.id}/>)
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

export default CardsLocation
