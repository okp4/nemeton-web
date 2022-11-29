import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.nemeton.staging.okp4.network/graphql',
  cache: new InMemoryCache()
})

export default client
