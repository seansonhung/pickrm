import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from '@material-ui/core';
import "../style/global.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <React.Fragment>
      <Header />
      <Container component="div" maxWidth="lg">
      <main>{children}</main>
      <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
