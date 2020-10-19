import { IResolvers } from 'graphql-tools';
import type  from './type';
import query from './query';

const resolvers : IResolvers = {
    ...query,
    ...type
};

export default resolvers;