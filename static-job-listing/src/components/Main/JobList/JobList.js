import React, { useContext, useMemo } from "react";
import Job from "../Job/Job";
import { Context } from "../../../context/Context";

import "./JobList.css";

function Jobs() {
  const { Data, filterKeyword } = useContext(Context);

  const filterData = useMemo(() => {
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
      return filter;
    } else {
      return Data;
    }
  }, [filterKeyword, Data]);

  return (
    <div className="jobs-container">
      {filterData.map((item) => {
        return <Job key={item.id} {...item} New={item.new} />;
      })}
    </div>
  );
}

export default Jobs;
