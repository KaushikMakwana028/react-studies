import React from "react";
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center text-black">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg text-shadow-gray-950 leading-relaxed text-gray-100 mb-10">
          {props.intro}
        </p>
        <div className="flex items-center justify-between text-center">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-8 py-2 rounded-full text"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.scolor }}
            className=" text-white font-medium px-4 py-2 rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
