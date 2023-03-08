import React from "react";
import TextImg from "../../assets/text.png";
import LogoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between py-4 px-7 rounded-lg border border-slate-300 bg-white"
      style={{ boxShadow: "0 0 5px 0 #ccc" }}
    >
      <div className="flex gap-2 items-end">
        <img
          src={TextImg}
          alt="memories.png"
          style={{ height: "35px", width: "auto" }}
        />
        <img
          src={LogoImg}
          alt="logo.png"
          style={{ height: "31px", width: "auto" }}
        />
      </div>
      <button className="border border-customBlue bg-customBlue text-white text-xs rounded px-3 py-2">
        SIGN IN
      </button>
    </div>
  );
};

export default Header;
