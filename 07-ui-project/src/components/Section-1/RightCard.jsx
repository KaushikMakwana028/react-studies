import React from "react";

import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-70 rounded-2xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="Prop"
      />

      <RightCardContent id={props.id} tag={props.tag} color={props.color} scolor={props.scolor} intro={props.intro}/>
    </div>
  );
};

export default RightCard;
