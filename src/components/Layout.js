import React from "react";
import { Footer } from "./Footer";
import "./Layout.scss";
import { Sidebar } from "./Sidebar";
function Layout({ spotify, children }) {
  return (
    <div>
      <div className="layout">
        <div className="layout__body">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
