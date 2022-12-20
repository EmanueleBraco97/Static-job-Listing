import React, { useState, createContext } from "react";
import Data from "../Data";
export const Context = createContext();

const JobProvider = (props) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  const AddKeyword = (keyword) => {
    //uso metodo includes per valutare se keyword è inlcuso dentro array filterKeyword//
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
    <Context.Provider value={jobContext}>{props.children}</Context.Provider>
  );
};

export default JobProvider;
