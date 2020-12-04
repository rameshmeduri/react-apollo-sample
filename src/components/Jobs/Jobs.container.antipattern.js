import gql from "graphql-tag";
import React, { useState } from "react";
import Jobs from "./Jobs.component";

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

function JobsContainer(props) {
  const [jobs, setJobs] = useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);

  function queryJobs() {
    setIsLoadingJobs(true);

    props.client
      .query({
        query: JOBS_QUERY
      })
      .then(result => {
        setIsLoadingJobs(false);
        setJobs(result.data.jobs);
      });
  }

  return <Jobs jobs={jobs} getJobs={queryJobs} isLoadingJobs={isLoadingJobs} />;
}

export default JobsContainer;
