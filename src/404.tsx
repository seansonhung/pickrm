import React from "react";
import { RouteComponentProps } from "@reach/router";

const NotFoundPage: React.FC<RouteComponentProps> = () => {
  return(
    <React.Fragment>
      <h1>(´・ω・`)</h1>
      <h4>We cannot find the page you are looking for...</h4>
    </React.Fragment>
  )
  }

export default NotFoundPage;
