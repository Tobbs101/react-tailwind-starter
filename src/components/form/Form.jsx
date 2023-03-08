import React from "react";

const Form = () => {
  return (
    <div
      style={{ boxShadow: "0 0 5px 0 #ccc" }}
      className="bg-white border border-slate-300 py-4 px-2"
    >
      {/*SIGN IN*/}
      {/* <p className="text-center">
        Please Sign In to create your own memories and like other's memories.
      </p> */}
      <input
        type={"search"}
        className="border border-slate-300 w-full px-4 py-3 text-xs outline-none focus:ring-0 duration-200 focus:border-customBlue rounded"
        placeholder="Title"
      />
      <textarea
        placeholder="Message"
        className="mt-2 border border-slate-300 w-full px-4 py-3 text-xs outline-none focus:ring-0 duration-200 focus:border-customBlue rounded"
      />
      <input
        type={"search"}
        className="border border-slate-300 w-full px-4 py-3 text-xs outline-none focus:ring-0 duration-200 focus:border-customBlue rounded"
        placeholder="Tags"
      />
      <input
        type="file"
        className="text-xs mt-2 file:border file:border-slate-200 file:outline-none file:bg-slate-200 file:text-customBlue file:rounded file:cursor-pointer file:py-1"
      />
      <button className="mt-2 bg-customBlue text-white text-xs w-full py-2 rounded">
        SUBMIT
      </button>
      <button className="mt-2 bg-customPink text-white text-xs w-full py-2 rounded">
        CLEAR
      </button>
    </div>
  );
};

export default Form;
