import React from "react";


import classes from "./UserInfo.module.css";
import GitAccountInfo from "./GitAccountInfo";
import ExternalInfo from "./ExternalInfo";

const UserInfo = (props) => {
  const userData = props.userData;

  let joinDate = "Unknown Date";

  if (userData.joinDate) {
    const date = new Date(userData.joinDate);
    const dateFormat = date.toDateString();
    const splitDate = dateFormat.split(" ");
    joinDate = splitDate[2] + " " + splitDate[1] + " " + splitDate[3];
  }

  const bio = userData.bio ? (
    <p className={classes.bio}>{userData.bio}</p>
  ) : (
    <p className={classes.noBio}>This profile has no bio</p>
  );

  const githubProfile = `https://www.github.com/${userData.user}`;
  return (
    <div className={classes.userInfoContainer}>
      {userData.user && (
        <>
          <img src={userData.avatarURL} alt="avatar" />
          <div className={classes.userDataContainer}>
            <div className={classes.nameDate}>
              <h2>{userData.name}</h2>
              <p>Joined {joinDate}</p>
            </div>
            <a href={githubProfile}>@{userData.user}</a>
            {bio}
            <div>
              <GitAccountInfo userData={userData} />
            </div>
            <ExternalInfo userData={userData}/>
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
