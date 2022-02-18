import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="mt-12">{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
