import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Sidebar
        items={[
          { name: "item1", href: "/item1" },
          { name: "item2", href: "/item2" },
        ]}
      />
    </div>
  );
};

export default Home;
