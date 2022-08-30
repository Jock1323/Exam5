import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dataContext from "../../Context/DataContext";
import "./sidebar.scss";
function SideBar() {
  const data = useContext(dataContext);
  return (
    <div className="bar mx-md-4">
      <div className="bar__img-box">
        <img src={data.avatar_url} alt="user logo" className="bar__img" />
        <p className="bar__user">{data.login}</p>
      </div>
      <button className="btn btn-light bar__edit border border-1 w-100 text-center fw-semibold">
        Edit profile
      </button>
      <div className="bar__follow my-3">
        <i className="bi bi-people"></i>
        <b className="bar__follow-num ms-2 me-1">{data.followers}</b>
        <NavLink to={"follower"} className="bar__follow-text me-2">
          follower
        </NavLink>
        <b className="bar__follow-num me-1">{data.following}</b>
        <NavLink to={"following"} className="bar__follow-text">
          following
        </NavLink>
      </div>
      <hr className="mt-4" />
    </div>
  );
}

export default SideBar;
