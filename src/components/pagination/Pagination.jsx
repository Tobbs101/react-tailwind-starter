import React from "react";
import Backarrow from "../../assets/back-arrow.png";
import BackarrowActive from "../../assets/back-arrow-active.png";
import Forwardarrow from "../../assets/forward-arrow.png";
import ForwardarrowActive from "../../assets/forward-arrow-active.png";

const Pagination = () => {
  return (
    <div
      style={{ boxShadow: "0 0 5px 0 #ccc" }}
      className="flex items-center justify-between bg-white border border-slate-300 py-4 px-7"
    >
      <button className="border border-slate-200 w-8 h-8 rounded-full flex items-center justify-center">
        <img src={Backarrow} alt="back" className="w-3 h-3" />
      </button>
      <ul className="flex items-center justify-evenly flex-1">
        <li>
          <button className="border border-customBlue rounded-full flex items-center justify-center w-8 h-8 bg-paleBlue hover:bg-slate-300 hover:border-slate-300 hover:text-white">
            <p className="text-xs">1</p>
          </button>
        </li>
        <li>
          <button className="border border-slate-400 rounded-full flex items-center justify-center w-8 h-8 hover:bg-slate-300 hover:border-slate-300 hover:text-white">
            <p className="text-xs">2</p>
          </button>
        </li>
        <li>
          <button className="border border-slate-400 rounded-full flex items-center justify-center w-8 h-8 hover:bg-slate-300 hover:border-slate-300 hover:text-white">
            <p className="text-xs">3</p>
          </button>
        </li>
      </ul>
      <button className="border border-slate-400 w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 hover:border-slate-100 hover:text-white">
        <img src={ForwardarrowActive} alt="forward" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default Pagination;
