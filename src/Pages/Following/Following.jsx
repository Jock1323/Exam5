import React, { useEffect, useContext, useState } from "react";
import "./Following.scss";
import dataContext from "../../Context/DataContext";
function Following() {
  const data = useContext(dataContext);
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    // let x = `${data.following_url}`.splice(0, -13);
    fetch(`${data.following_url}`.slice(0, -13))
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

export default Following;
