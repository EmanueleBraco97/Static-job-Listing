import { useContext } from "react";
import { JobContext } from "../../context/JobContext";

import iconRemove from "../../images/icon-remove.svg";

import "./Header.css";

const Header = () => {
  const { filterKeyword, RemoveKeyword, ClearKeywords } =
    useContext(JobContext);
  return (
    <header className="header">
      <div className={`${filterKeyword.length > 0 ? "search" : null}`}>
        <div className="filter_tags">
          {filterKeyword.map((tag, id) => {
            return (
              <div className="filter" key={id}>
                <span>{tag}</span>
                <img
                  src={iconRemove}
                  alt="remove-icon"
                  onClick={() => RemoveKeyword(tag)}
                />
              </div>
            );
          })}
        </div>
        {filterKeyword.length > 0 && (
          <button className="clear" onClick={ClearKeywords}>
            Clear
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
