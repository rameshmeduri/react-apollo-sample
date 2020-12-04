import React from "react";

function getCitiesLabel(cities) {
  return cities.length > 1 ? "Cities" : "City";
}

function getCitiesList(cities) {
  return cities.map((city) => city.name).join(", ");
}

function Job(props) {
  return (
    <a
      href={props.job.applyUrl}
      className="list-group-item list-group-item-action"
    >
      <h3>{props.job.title}</h3>
      <div>
        <strong>Company:</strong> {props.job.company.name}
      </div>
      {props.job.cities.length > 0 && (
        <div>
          <strong>{getCitiesLabel(props.job.cities)}: </strong>
          {getCitiesList(props.job.cities)}
        </div>
      )}
    </a>
  );
}

export default Job;
