import React, { useContext } from "react";
import { JobContext } from "../../../context/JobContext";

import "./Job.css";

const Job = ({
  id,
  company,
  contract,
  featured,
  location,
  logo,
  New,
  position,
  postedAt,
  role,
  level,
  languages,
  tools,
}) => {
  const { AddKeyword } = useContext(JobContext);
  const tags = [role, level, ...languages, ...tools];

  return (
    <>
      <div className={`job ${New && featured ? "job-active" : ""}`} key={id}>
        <div className="job-content">
          <img className="logo-photo" src={logo} alt="company-logo" />
          <div className="job-info">
            <div className="company-info-top">
              <span className="title-logo">{company}</span>
              {New && (
                <div className="new">
                  <span>NEW!</span>
                </div>
              )}
              {featured && (
                <div className="feature">
                  <span>FEATURED</span>
                </div>
              )}
            </div>
            <span className="position">{position}</span>
            <div className="company-info-bottom">
              <span>{postedAt}</span>
              <span>•</span>
              <span>{contract}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="divisor"></div>
        <ul className="tag">
          {tags.map((tag, id) => {
            return (
              <li key={id}>
                <button className="tag-key" onClick={() => AddKeyword(tag)}>
                  {tag}{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Job;
