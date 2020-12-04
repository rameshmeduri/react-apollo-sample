import React, { useState } from "react";
import Jobs from "./Jobs.component";

function JobsContainer(props) {
  const [jobs, setJobs] = useState([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);

  function getJobs() {
    setIsLoadingJobs(true);

    props
      .getJobs()
      .then(({ data }) => {
        if (data) {
          setJobs(data.jobs);
        }
      })
      .catch(() => {
        // TODO: handle errors
      })
      .finally(() => {
        setIsLoadingJobs(false);
      });
  }

  return <Jobs jobs={jobs} getJobs={getJobs} isLoadingJobs={isLoadingJobs} />;
}

export default JobsContainer;
