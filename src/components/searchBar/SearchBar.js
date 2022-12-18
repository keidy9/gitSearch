import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

import "../../styles/global.css";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const ref = useRef("");

  const searchUserHandler = (event) => {
    event.preventDefault();
    const user = ref.current.value;
    props.searchUser(user);
  };

  return (
    <div className={classes.searchContainer}>
      <BsSearch className={classes.searchIcon} />
      <form onSubmit={searchUserHandler}>
        <input
          className={classes.input}
          type="text"
          placeholder="Search Github Username..."
          ref={ref}
        />
        <input
          className={classes.submitInput}
          type="submit"
          value="Search"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
