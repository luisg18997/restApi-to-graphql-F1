import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import expressPlayGround from 'graphql-playground-middleware-express';
import schema from './schema';
import { dataSources } from './data/index';


const app = express();

app.use('*', cors());
app.use(compression());


const server = new ApolloServer({
    schema,
    introspection:true,
    dataSources: () => ({
        seasons: new dataSources.SeasonsData(),
        racing: new dataSources.RacingData(),
        drivers: new dataSources.DriversData(),
        constructors: new dataSources.ConstructorsData(),
        circuits: new dataSources.CircuitsData(),
        driverStadings: new dataSources.DriverStadingsData(),
        constructorStadings: new dataSources.ConstructorStadingsData()
    })
});

server.applyMiddleware({app});

app.get('/', expressPlayGround ({
    endpoint: '/graphql'
}));

const port = 5000;

app.listen(
    {port},
    () => console.log(`run server http://localhost:${port}${server.graphqlPath}`));