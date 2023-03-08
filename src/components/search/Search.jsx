import React from "react";

const Search = () => {
  return (
    <div
      style={{ boxShadow: "0 0 5px 0 #ccc" }}
      className="bg-white border border-slate-300 py-4 px-2"
    >
      <input
        type={"search"}
        className="border border-slate-300 w-full px-4 py-3 text-xs outline-none focus:ring-0 duration-200 focus:border-customBlue rounded"
        placeholder="Search Memories"
      />
      <input
        type={"search"}
        className="mt-2 border border-slate-300 w-full px-4 py-3 text-xs outline-none focus:ring-0 duration-200 focus:border-customBlue rounded"
        placeholder="Search Tags"
      />
      <button className="mt-2 bg-customBlue text-white text-xs w-full py-2 rounded">
        SEARCH
      </button>
    </div>
  );
};

export default Search;
