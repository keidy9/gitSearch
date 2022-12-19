import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import SearchBar from "./components/searchBar/SearchBar";
import UserInfo from "./components/userInfo/UserInfo";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  useEffect(async () => {
    const response = await fetch(`https://api.github.com/users/keidy9`);
    const data = await response.json();
    setUserData({
      user: "keidy9",
      name: data.name,
      avatarURL: data.avatar_url,
      location: data.location,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      joinDate: data.created_at,
      blog: data.blog,
      twitterUsername: data.twitter_username,
      company: data.company,
    });
  }, []);

  const searchUserHandler = async (user) => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    setUserData({
      user: user,
      name: data.name,
      avatarURL: data.avatar_url,
      location: data.location,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      joinDate: data.created_at,
      blog: data.blog,
      twitterUsername: data.twitter_username,
      company: data.company,
    });
    console.log(userData);
  };

  const changeModeHandler = () => {
    setDarkMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={darkMode ? "" : "light-mode"}>
      <header>
        <h1>gitSearch</h1>
        <div className="mode">
          {darkMode ? <CiLight /> : <MdDarkMode />}
          <button onClick={changeModeHandler}>
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </header>
      <SearchBar searchUser={searchUserHandler} />
      <UserInfo userData={userData} />
    </div>
  );
};

export default App;
