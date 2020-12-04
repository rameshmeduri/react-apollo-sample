import React from "react";
import Job from "../Job/Job.component";

function LoadJobsButton(props) {
  return (
    <button
      type="button"
      className="btn btn-outline-primary"
      onClick={props.onClick}
    >
      Load GraphQL jobs
    </button>
  );
}

function LoadingJobs() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function NumberOfJobs(props) {
  if (props.jobs.length === 0) {
    return null;
  }

  return <span className="badge badge-primary">{props.jobs.length}</span>;
}

function Jobs(props) {
  const showLoadJobsButton = !props.jobs.length && !props.isLoadingJobs;

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="mb-4">
            GraphQL Jobs <NumberOfJobs jobs={props.jobs} />
          </h1>

          {showLoadJobsButton && <LoadJobsButton onClick={props.getJobs} />}

          {props.isLoadingJobs && <LoadingJobs />}

          <div className="list-group">
            {props.jobs.map(job => (
              <Job key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
