import React from "react";
import Posts from "../components/posts/Posts";
import Search from "../components/search/Search";
import Form from "../components/form/Form";
import Pagination from "../components/pagination/Pagination";

const Dashboard = () => {
  return (
    <div className="flex mt-5 gap-5">
      <Posts />
      <div style={{ flex: "1" }} className="flex flex-col gap-3 px-2">
        <Search />
        <Form />
        <Pagination />
      </div>
    </div>
  );
};

export default Dashboard;
