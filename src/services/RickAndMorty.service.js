import { API_RM } from "../constants/Api.constants";

class RickAndMortyService {

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        //Interseptor
        return response.json();
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //Interseptor
        return response.json();
    }

    async getAllLocations(){
        const response = await fetch(API_RM.LOCATIONS());
        //Interseptor
        return response.json();
    }

    async getLocationsById(id){
        const response = await fetch(API_RM.LOCATIONS_BY_ID(id));
        //Interseptor
        return response.json();
    }

    async getAllEpisodes(){
        const response = await fetch(API_RM.EPISODES());
        //Interseptor
        return response.json();
    }

    async getEpisodesById(id){
        const response = await fetch(API_RM.EPISODES_BY_ID(id));
        //Interseptor
        return response.json();
    }
}

export default new RickAndMortyService();