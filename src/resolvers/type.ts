import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season: {
       year: parent => parent.season,
       urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        name: parent => parent.circuitName,
        id: parent => parent.circuitId,
        location: parent => parent.Location,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        name: parent => `${parent.givenName} ${parent.familyName}`,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    }
};

export default type;