import React, { useState} from 'react';

import CountDown from '../Countdown';

type PostDetailsProps = {
  postTitle: string;
  postDescription: string;
  postExpiredDate: Date;
  winningEntry: string;
}
const PostDetails : React.FC<PostDetailsProps> = ({ postTitle, postDescription, postExpiredDate, winningEntry }) => {
  let as = (postExpiredDate.valueOf() - Date.now()) / 1000;
  

  return(
    <React.Fragment>
      <input
        type="text"
        placeholder={postTitle}
      />
      <input
        type="text"
        placeholder={postDescription}
      />
      <input
        type="text"
        placeholder={winningEntry}
      />
      {!isNaN(as)? 
      <CountDown
        seconds={as}
      />
      : ""}
    </React.Fragment>
  )
}

export default PostDetails;
