import React, { useState, useEffect, useContext } from "react";
import Job from "../Job/Job";
import { JobContext } from "../../../context/JobContext";

import "./JobList.css";

function Jobs() {
  const { Data, filterKeyword } = useContext(JobContext);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const FilteredData = () => {
      if (filterKeyword) {
        const filter = Data.filter((item) => {
          return filterKeyword.every((key) => {
            return (
              item.role === key ||
              item.level === key ||
              item.languages.includes(key) ||
              item.tools.includes(key)
            );
          });
        });
        setNewData(filter);
      } else {
        setNewData(Data);
      }
    };
    console.log(Data);
    FilteredData();
  }, [filterKeyword, Data]);

  return (
    <div className="jobs-container">
      {newData.map((item) => {
        return <Job key={item.id} {...item} New={item.new} />;
      })}
    </div>
  );
}

export default Jobs;
