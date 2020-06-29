import React, { useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify'

type PostDetailsProps = {
  postTitle: string;
  postDescription: string;
  postExpiredDate: Date;
}
const PostDetails : React.FC<PostDetailsProps> = ({ postTitle, postDescription, postExpiredDate }) => {

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
        placeholder={postExpiredDate.toDateString()}
      />
    </React.Fragment>
  )
}

export default PostDetails;
