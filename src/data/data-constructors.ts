import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/utils';


export class ConstructorsData extends F1 {
    constructor(){
        super();
    }

    async getConstructors(pageElements: number = -1, page: number = 1) {
        if(pageElements === -1) {
            return await this.get('constructors.json?limit=900', {
                cacheOptions: {ttl: 60 }
            });
        }
        const offset = (page -1) * pageElements;
        const limit = pageElements;
        const filter = `limit=${limit}&offset=${offset}`;
        return await this.get(`constructors.json?${filter}`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getConstructorByYear(year: string){
        year = checkYear(year);
        return await this.get(`${year}/constructors.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getConstructorByYearAndRound(year: string, round: number){
        year = checkYear(year);
        round = checkRound(round);
        return await this.get(`${year}/${round}/constructors.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getConstructor(id: string){
        return await this.get(`constructors/${id}.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    
}