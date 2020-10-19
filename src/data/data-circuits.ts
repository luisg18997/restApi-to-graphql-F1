import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/utils';


export class CircuitsData extends F1 {
    constructor(){
        super();
    }

    async getCircuits(pageElements: number = -1, page: number = 1) {
        if(pageElements === -1) {
            return await this.get('circuits.json?limit=900', {
                cacheOptions: {ttl: 60 }
            });
        }
        const offset = (page -1) * pageElements;
        const limit = pageElements;
        const filter = `limit=${limit}&offset=${offset}`;
        return await this.get(`circuits.json?${filter}`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getCircuitByYear(year: string){
        year = checkYear(year);
        return await this.get(`${year}/circuits.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getCircuitByYearAndRound(year: string, round: number){
        year = checkYear(year);
        round = checkRound(round);
        return await this.get(`${year}/${round}/circuits.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getCircuit(id: string){
        return await this.get(`circuits/${id}.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    
}