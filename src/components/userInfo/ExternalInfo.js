import React from 'react'
import { GoLocation } from "react-icons/go";
import { HiLink } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import classes from "./ExternalInfo.module.css"

const ExternalInfo = (props) => {
    const userData = props.userData;
  return (
        <div className={classes.externalInfo}>
          <span>
            <div>
              <GoLocation />
              <p className={userData.location ? "" : classes.notAvailable}>
                {userData.location ?? "Location unavailable"}
              </p>
            </div>
            <div>
              <HiLink />
              {userData.blog ? (
                <a href={userData.blog}>{userData.blog}</a>
              ) : (
                <p className={classes.notAvailable}>Not available</p>
              )}
            </div>
          </span>
          <span>
            <div>
              <AiOutlineTwitter />
              {userData.twitterUsername ? (
                <a href={`https://www.twitter.com/${userData.twitterUsername}`}>
                  {userData.twitterUsername}
                </a>
              ) : (
                <p className={classes.notAvailable}>Not available</p>
              )}
            </div>
            <div>
              <HiOutlineBuildingOffice2 />
              <p className={userData.company ? "" : classes.notAvailable}>
                {userData.company ?? "Not available"}
              </p>
            </div>
          </span>
        </div>
      );
}

export default ExternalInfo;