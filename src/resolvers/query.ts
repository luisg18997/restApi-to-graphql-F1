import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasons(_: void, __: any, {dataSources}) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, {Year}, {dataSources}) {
            return await dataSources.racing.getYear(Year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },
        async raceSelect(_: void, {year,round}, {dataSources}) {
            return await dataSources.racing.getYearRound(year, round).then(
                (data: any) => data.MRData.RaceTable.Races[0]
            );
        },
        async driversHistory(_: void,{pageElements,page}, {dataSources}) {
            return await dataSources.drivers.getDrivers(pageElements,page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYear(_: void, {year}, {dataSources}) {
            return await dataSources.drivers.getDriverByYear(year).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYearAndRound(_: void, {year, round}, {dataSources}) {
            return await dataSources.drivers.getDriverByYearAndRound(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driverSelect(_: void, {id}, {dataSources}) {
            return await dataSources.drivers.getDriver(id).then(
                (data: any) => data.MRData.DriverTable.Drivers[0]
            );
        },
        async constructorsHistory(_: void,{pageElements,page}, {dataSources}) {
            return await dataSources.constructors.getConstructors(pageElements,page).then(
                (data: any) => data.MRData.ConstructorTable.Constructors
            );
        },
        async constructorsYear(_: void, {year}, {dataSources}) {
            return await dataSources.constructors.getConstructorByYear(year).then(
                (data: any) => data.MRData.ConstructorTable.Constructors
            );
        },
        async constructorsYearAndRound(_: void, {year, round}, {dataSources}) {
            return await dataSources.constructors.getConstructorByYearAndRound(year, round).then(
                (data: any) => data.MRData.ConstructorTable.Constructors
            );
        },
        async constructorSelect(_: void, {id}, {dataSources}) {
            return await dataSources.constructors.getConstructor(id).then(
                (data: any) => data.MRData.ConstructorTable.Constructors[0]
            );
        },
        async circuitsHistory(_: void,{pageElements,page}, {dataSources}) {
            return await dataSources.circuits.getCircuits(pageElements,page).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            );
        },
        async circuitsYear(_: void, {year}, {dataSources}) {
            return await dataSources.circuits.getCircuitByYear(year).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            );
        },
        async circuitsYearAndRound(_: void, {year, round}, {dataSources}) {
            return await dataSources.circuits.getCircuitByYearAndRound(year, round).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            );
        },
        async circuitSelect(_: void, {id}, {dataSources}) {
            return await dataSources.circuits.getCircuit(id).then(
                (data: any) => data.MRData.CircuitTable.Circuits[0]
            );
        },
        async seasonPilotRanking(_: void, {year}, {dataSources}) {
            return await dataSources.driverStadings.getStadingByYear(year).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            );
        },
        async pilotRankingHistory(_: void,{pageElements,page}, {dataSources}) {
            return await dataSources.driverStadings.getStadingPilots(pageElements,page).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            );
        },
        async seasonPilotRankingByRound(_: void, {year, round}, {dataSources}) {
            return await dataSources.driverStadings.getRankingByYearAndRound(year, round).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            );
        },
        async seasonConstructorRanking(_: void, {year}, {dataSources}) {
            return await dataSources.constructorStadings.getStadingByYear(year).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            );
        },
        async constructorRankingHistory(_: void,{pageElements,page}, {dataSources}) {
            return await dataSources.constructorStadings.getStadingContructors(pageElements,page).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            );
        },
        async seasonConstructorRankingByRound(_: void, {year, round}, {dataSources}) {
            return await dataSources.constructorStadings.getRankingByYearAndRound(year, round).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            );
        },
    }
};

export default query;