import React, { useState, createContext } from "react";
import Data from "../Data";
export const JobContext = createContext();

const JobProvider = (props) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  const AddKeyword = (keyword) => {
    if (!filterKeyword.includes(keyword)) {
      setFilterKeyword([...filterKeyword, keyword]);
    }
  };
  const RemoveKeyword = (key) => {
    const newKeyword = filterKeyword.filter((tag) => tag !== key);
    setFilterKeyword(newKeyword);
  };

  const ClearKeywords = () => {
    setFilterKeyword([]);
  };

  const jobContext = {
    Data,
    filterKeyword,
    AddKeyword,
    RemoveKeyword,
    ClearKeywords,
  };
  return (
    <JobContext.Provider value={jobContext}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobProvider;
