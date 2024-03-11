import React, { Component } from 'react'
import Cards from './Cards';
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Link } from 'react-router-dom';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {personajes: [] };
    }

    componentDidMount(){

      RickAndMortyService.getAllCharacters()
        .then((data) => this.setState({personajes: data.results}))
        .catch((error) => console.log(error));

    }

  render() {
    return (

        <main>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Personajes - Rick and Morty App</h1>
          <p className="lead text-muted">
          Rick y Morty (en inglés: Rick and Morty) es una serie de televisión estadounidense de animación
          para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió 
          en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sánchez, y su fácilmente 
          influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los Viajes espaciales 
          e intergalácticos. Dan Harmon, el cocreador de la serie y Justin Roiland son los encargados de las 
          voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer 
          Grammer y Sarah Chalke.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              <Link to="/locations" className="btn btn-primary my-2">
                Locations
              </Link>
            </a>
            <a href="#" className="btn btn-primary my-2">
              <Link to="/episodes" className="btn btn-primary my-2">
                Episodios
              </Link>
            </a>
          </p>
        </div>
      </div>
    </section>

        <Cards personajes={this.state.personajes}/>

</main>

    )
  }
}
