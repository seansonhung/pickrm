import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Container, makeStyles, Theme } from '@material-ui/core';
import "../style/global.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Header />
      <Container component="div" fixed className={classes.content}>
        <main>{children}</main>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    paddingLeft: theme.spacing(12),
  },
}));

export default Layout;
