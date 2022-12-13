import React, { useContext } from "react";
import { JobContext } from "../context/JobContext";

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
      <div className={`${New && featured ? "job active" : "job"}`} key={id}>
        <div className="jobContent">
          <img src={logo} alt="company-logo" />
          <div className="jobInfo">
            <div className="companyInfoHeader">
              <span>{company}</span>
              {New && <button className="new">NEW!</button>}
              {featured && <button className="feature">FEATURED</button>}
            </div>
            <h1>{position}</h1>
            <ul className="companyInfoFooter">
              <li>{postedAt}</li>
              <li>•</li>
              <li>{contract}</li>
              <li>•</li>
              <li>{location}</li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="tag">
          {tags.map((tag, id) => {
            return (
              <span key={id} onClick={() => AddKeyword(tag)}>
                {tag}{" "}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Job;
