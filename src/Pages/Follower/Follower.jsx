import React, { useEffect, useContext, useState } from "react";
import "./follower.scss";
import dataContext from "../../Context/DataContext";
function Follower() {
  const data = useContext(dataContext);
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    fetch(data.followers_url)
      .then((res) => res.json())
      .then((data) => setFollower(data));
  }, []);
  return (
    <>
      <ul className="follower pt-4">
        {follower.length > 0 ? (
          follower.map((item) => (
            <div key={item.id}>
              <li className="follower__item w-100">
                <div>
                  <img
                    className="follower__img"
                    src={item.avatar_url}
                    alt="user logo"
                  />
                  <a
                    className="follower__link"
                    target="_blank"
                    href={item.html_url}
                  >
                    {item.login}
                  </a>
                </div>
                <button className="btn follower-btn">Unfollow</button>
              </li>
              <hr className="follower__hr" />
            </div>
          ))
        ) : (
          <p>Error</p>
        )}
      </ul>
    </>
  );
}

export default Follower;
