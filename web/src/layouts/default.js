import React from "react";

import Header from "~components/Header";
import Footer from "~components/Footer";

const Layout = ({ children }) => (
  <div className="font-sans bg-light text-dark flex flex-col min-h-screen">
    <div className="flex-1 flex flex-col">
      <Header className="flex-shrink-0" />
      <main id="main">{children}</main>
    </div>

    <div className="pin-b">
      <Footer />
    </div>
  </div>
);

export default Layout;
