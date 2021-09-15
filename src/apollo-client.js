import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://moving-mongoose-36.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'R22Tq6OSml3tTq6rlPcKP8aWrtTBh9QLoGlIZdhfCLDV0IVU1NpHNgrv2AlNjup5',
  },
  cache: new InMemoryCache(),
});

export default client;
