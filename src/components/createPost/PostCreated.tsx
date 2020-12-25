import React, { useState} from 'react';

type PostCreatedProps = {
  pid?: string;
}
const PostCreated : React.FC<PostCreatedProps> = ({ pid }) => {
  return(
    <React.Fragment>
      <h4>Post created sucessfully</h4>
      <h4>http://localhost:3000/app/view/{pid}</h4>
    </React.Fragment>
  )
}

export default PostCreated;
