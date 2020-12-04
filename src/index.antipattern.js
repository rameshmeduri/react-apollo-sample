import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider, withApollo } from "react-apollo";
import React from "react";
import ReactDOM from "react-dom";
import JobsContainer from "./components/Jobs/Jobs.container.antipattern";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://api.graphql.jobs/"
});

const client = new ApolloClient({
  cache,
  link
});

const JobsWithClient = withApollo(JobsContainer);

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <JobsWithClient />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
