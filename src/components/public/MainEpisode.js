import React, { Component } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Link } from 'react-router-dom';
import CardsEpisode from './CardsEpisode';

export default class MainEpisode extends Component {

    constructor(props){
        super(props);
        this.state = {episodes: [] };
    }
    
    componentDidMount(){

        RickAndMortyService.getAllEpisodes()
          .then((data) => this.setState({episodes: data.results}))
          .catch((error) => console.log(error));
  
      }

      render() {
        return (
    
            <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Episodios - Rick and Morty App</h1>
              <p className="lead text-muted">
              Rick, un científico genio alcohólico, y su nieto Morty, 
              exploran dimensiones alternativas y enfrentan situaciones absurdas.
              La serie se destaca por su humor negro y sus reflexiones existenciales.
              </p>
              <p>
              <a href="#" className="btn btn-primary my-2">
                    <Link to="/" className="btn btn-primary my-2">
                        Personajes
                    </Link>
                </a>
                <a href="#" className="btn btn-primary my-2">
                    <Link to="/locations" className="btn btn-primary my-2">
                        Locations
                    </Link>
                </a>
              </p>
            </div>
          </div>
        </section>
    
            <CardsEpisode episodes={this.state.episodes}/>
    
    </main>
    
        )
      }
}