import React from "react";

import classes from "./GitAccountInfo.module.css";

const GitAccountInfo = (props) => {
  const userData = props.userData;
  return (
    <div className={classes.gitInfoContainer}>
      <section>
        <h5>Repos</h5>
        <p>{userData.repos}</p>
      </section>
      <section>
        <h5>Followers</h5>
        <p>{userData.followers}</p>
      </section>
      <section>
        <h5>Following</h5>
        <p>{userData.following}</p>
      </section>
    </div>
  );
};

export default GitAccountInfo;
