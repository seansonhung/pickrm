import React from "react";
import { RouteComponentProps } from "@reach/router";

const About: React.FC<RouteComponentProps> = () => {
  return(
    <React.Fragment>
      <h1>About Page</h1>
      <h4>
        A project to create a sharable link where everyone with the link can send in different entries.
        When the post expired, a random entry will be chosen. This can be use in multiple situtations
        where a random decision is more fair or fun. For example, choosing where to eat, where to hangout,
        what activities to do, it can also be used as an informal raffle box. All you need to do is create
        a pickRm box and send the link to the group chat.  
      </h4>
    </React.Fragment>
  )
  }

export default About;
