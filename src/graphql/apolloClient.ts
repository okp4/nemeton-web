import type { NormalizedCacheObject} from '@apollo/client';
import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = (uri: string): ApolloClient<NormalizedCacheObject> => new ApolloClient({
  uri,
  cache: new InMemoryCache()
})

export default client
