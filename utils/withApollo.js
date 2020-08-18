import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://min-shop.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
