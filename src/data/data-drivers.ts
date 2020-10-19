import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/utils';


export class DriversData extends F1 {
    constructor(){
        super();
    }

    async getDrivers(pageElements: number = -1, page: number = 1) {
        if(pageElements === -1) {
            return await this.get('drivers.json?limit=900', {
                cacheOptions: {ttl: 60 }
            });
        }
        const offset = (page -1) * pageElements;
        const limit = pageElements;
        const filter = `limit=${limit}&offset=${offset}`;
        return await this.get(`drivers.json?${filter}`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getDriverByYear(year: string){
        year = checkYear(year);
        return await this.get(`${year}/drivers.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getDriverByYearAndRound(year: string, round: number){
        year = checkYear(year);
        round = checkRound(round);
        return await this.get(`${year}/${round}/drivers.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getDriver(id: string){
        return await this.get(`drivers/${id}.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    
}