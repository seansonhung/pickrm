import React from "react";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <React.Fragment>
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
