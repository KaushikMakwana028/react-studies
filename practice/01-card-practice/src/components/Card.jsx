import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <span className="status">{props.status}</span>
          <span className="hrs">{props.pay}</span>
        </div>

        <div className="photo">
          <img src={props.profileImage} alt="profile" />
        </div>

        <div className="center">
          <h2>{props.name}</h2>
          <p className="p1">{props.post}</p>
          <p className="p2">{props.contractor}</p>

          <div className="pills">
            <span>{props.pill1}</span>
            <span>{props.pill2}</span>
            <span>{props.pill3}</span>
            <span className="pill-color">{props.pill4}</span>
          </div>
        </div>

        <div className="bottom">
          <p>{props.description}</p>

          <p className="btn">View Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
