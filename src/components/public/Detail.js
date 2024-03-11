import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import RickAndMortyService from '../../services/RickAndMorty.service';

export const Detail = () => {

  const [personaje, setPersonaje] = useState({});
  const {id} = useParams();
  const {pathname} = useLocation();

  useEffect(()=> {
      console.log(pathname);
      RickAndMortyService.getCharacterById(id)
      .then((data) => setPersonaje(data))
  }, [])



  return (
    <div className="row m-3">
      <div className="col-md-12">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {personaje.species}
            </strong>
            <h3 className="mb-0 text-dark">
              {personaje.name}
            </h3>
            <div className="mb-1 text-muted">
              {new Date(personaje.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted"></div>
            <p className="card-text mb-auto">
                Details of the characters of the television series "Rick and Morty"
            </p>
            <ul className="list-group mt-1">
                  <li className="list-group-item">status= {personaje.status}</li>
                  <li className="list-group-item">type= {personaje.type}</li>
                  <li className="list-group-item">gender= {personaje.gender}</li>
                  {/*<li className="list-group-item">origin {personaje.origin.name}</li>
                  <li className="list-group-item">location {personaje.location.name}</li>*/}
            </ul>

            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
                Volver
            </Link>
          </div>

          <img
              className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={personaje.image}
              alt=""
          />

        </div>
      </div>
    </div>
  )
}

export default Detail
