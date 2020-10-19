import { F1 } from './data-source';
import { checkYear, checkRound } from '../lib/utils';


export class DriverStadingsData extends F1 {
    constructor(){
        super();
    }

    async getStadingByYear(year: string) {
        year = checkYear(year);
        return await this.get(`${year}/driverstandings.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getStadingPilots(pageElements: number = -1, page: number = 1) {
        if(pageElements === -1) {
            return await this.get('driverstandings.json?limit=3500', {
                cacheOptions: {ttl: 60 }
            });
        }
        const offset = (page -1) * pageElements;
        const limit = pageElements;
        const filter = `limit=${limit}&offset=${offset}`;
        return await this.get(`driverstandings.json?${filter}`, {
            cacheOptions: {ttl: 60 }
        });
    }

    async getRankingByYearAndRound(year: string, round: number){
        year = checkYear(year);
        round = checkRound(round);
        return await this.get(`${year}/${round}/driverstandings.json`, {
            cacheOptions: {ttl: 60 }
        });
    }

}