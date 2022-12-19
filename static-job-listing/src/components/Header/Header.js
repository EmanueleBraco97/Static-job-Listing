import { useContext } from "react";
import { JobContext } from "../../context/JobContext";

import iconRemove from "../../images/icon-remove.svg";

import "./Header.css";

const Header = () => {
  const { filterKeyword, RemoveKeyword, ClearKeywords } =
    useContext(JobContext);
  return (
    <header className="header">
      <nav className={`${filterKeyword.length > 0 ? "search" : null}`}>
        <ul className="filter_tags">
          {filterKeyword.map((tag, id) => {
            return (
              <li className="filter" key={id}>
                <button className="tag-key">{tag}</button>
                <div className="structure-remove-icon">
                  <img
                    className="remove-icon"
                    src={iconRemove}
                    alt="remove-icon"
                    onClick={() => RemoveKeyword(tag)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        {filterKeyword.length > 0 && (
          <button className="clear" onClick={ClearKeywords}>
            Clear
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
