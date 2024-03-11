import React, { Component } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import CardsLocation from './CardsLocation';
import { Link } from 'react-router-dom';

export default class MainLocation extends Component {

    constructor(props){
        super(props);
        this.state = {locations: [] };
    }
    
    componentDidMount(){

        RickAndMortyService.getAllLocations()
          .then((data) => this.setState({locations: data.results}))
          .catch((error) => console.log(error));
  
      }

      render() {
        return (
    
            <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Locaciones - Rick and Morty App</h1>
              <p className="lead text-muted">
              A través de las locaciones, la serie no solo ofrece humor absurdo y referencias a la ciencia ficción,
              sino también reflexiones filosóficas y comentarios sobre la naturaleza humana, todo dentro de un 
              universo lleno de imaginación y creatividad.
              </p>
              <p>
              <a href="#" className="btn btn-primary my-2">
                    <Link to="/" className="btn btn-primary my-2">
                        Personajes
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
    
            <CardsLocation locations={this.state.locations}/>
    
    </main>
    
        )
      }
}
