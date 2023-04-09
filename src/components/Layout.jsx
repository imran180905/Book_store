import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className=" mx-auto sm:w-full md:max-w-full lg:max-w-screen-xl">
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};
export default Layout;
