import React, { useState} from 'react';

import CountDown from './Countdown';

type PostDetailsProps = {
  postTitle: string;
  postDescription: string;
  winningEntry: string;
}
const PostDetails : React.FC<PostDetailsProps> = ({ postTitle, postDescription, winningEntry}) => {

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
    </React.Fragment>
  )
}

export default PostDetails;
