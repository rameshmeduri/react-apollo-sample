import React from "react";
import ReactDOM from "react-dom";
import JobsContainer from "./components/Jobs/Jobs.container";
import { getJobs } from "./utils/data";

ReactDOM.render(
  <React.StrictMode>
    <JobsContainer getJobs={getJobs} />
  </React.StrictMode>,
  document.getElementById("root")
);
