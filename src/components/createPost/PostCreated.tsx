import React, { useState} from 'react';

type PostCreatedProps = {
  pid?: string;
}
const PostCreated : React.FC<PostCreatedProps> = ({ pid }) => {
  return(
    <React.Fragment>
      <h1>(´・w・`)</h1>
      <h4>Created sucessfully</h4>
    </React.Fragment>
  )
}

export default PostCreated;
