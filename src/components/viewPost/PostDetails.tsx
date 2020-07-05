import React, { useState} from 'react';

import CountDown from '../Countdown';

type PostDetailsProps = {
  postTitle: string;
  postDescription: string;
  postExpiredDate: Date;
}
const PostDetails : React.FC<PostDetailsProps> = ({ postTitle, postDescription, postExpiredDate }) => {
  let diff = (postExpiredDate.valueOf() - Date.now()) / 1000;
  // let days = 0;
  // let hours = 0;
  // let minutes = 0;
  // let seconds = 0;
  // if (diff > 0) {
  //   if (diff >= 86400) { // 24 * 60 * 60
  //     days = Math.floor(diff / 86400);
  //     diff -= days * 86400;
  //   }
  //   if (diff >= 3600) { // 60 * 60
  //     hours = Math.floor(diff / 3600);
  //     diff -= hours * 3600;
  //   }
  //   if (diff >= 60) {
  //     minutes = Math.floor(diff / 60);
  //     diff -= minutes * 60;
  //   }
  //   seconds = Math.floor(diff);
  // }

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
      <CountDown
        difference={diff}
      />
    </React.Fragment>
  )
}

export default PostDetails;
