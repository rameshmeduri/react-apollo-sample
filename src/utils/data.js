import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const GRAPHQL_URI = "https://api.graphql.jobs/";

const JOBS_QUERY = gql`
  query {
    jobs {
      id
      title
      company {
        name
      }
      cities {
        name
      }
      applyUrl
    }
  }
`;

function createApolloClient() {
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: GRAPHQL_URI
  });

  return new ApolloClient({
    cache,
    link
  });
}

function getJobs() {
  return new Promise((resolve, reject) => {
    client
      .query({
        query: JOBS_QUERY
      })
      .then(resolve)
      .catch(reject);
  });
}

const client = createApolloClient();

export { getJobs };
