import React, { useEffect, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";


const GithubUserProfile = () => {
  const [userName, setUserName] = useState("yosshor");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  function handleChangeUserName(e: any) {
    setUserName(e.target.value);
  }
  
  async function handleClickEvent() {
    await fetchUserData(userName);
  }

  async function fetchUserData(userName: string) {
    try {
      console.log("user: ", userName);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const userData = await response.json();
      console.log("userData: ", userData);
      setLoading(false);
      setUserData(userData);
      return userData;

    } catch (error: any) {
      console.error("Error fetching data: ", error);
      setError(error);
    }
  }
  useEffect(() => {
    fetchUserData(userName);
  }, []);

  return (
    <>
      <div className="github-user-profile">
        <h1>Github User Profile</h1>
        <h2>{loading ? "Loading Data, Please Wait" : null}</h2>
        {error && <div>Error fetching data</div>}
      </div>
      <input
        name="search-by-username"
        onChange={(event) => handleChangeUserName(event)}
        type="text"
        placeholder="insert github user"
        value={userName} />
      <button className="user-search-button" onClick={handleClickEvent}>Search</button>
      {userData ? <UserInfo userData={userData} /> : "Not Found"}

    </>
  );
};

export default GithubUserProfile;
