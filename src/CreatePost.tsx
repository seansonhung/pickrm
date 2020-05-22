import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { createPost } from './graphql/mutations'
import { RouteComponentProps } from '@reach/router';

interface CreatePost extends RouteComponentProps {

}
const CreatePost: React.FC<CreatePost> = () => {
  const [postTitle, setPostTitle] = useState("")
  const [postDescription, setPostDescription] = useState("")

  async function addPost() {
    const postDetails = {
      title: postTitle,
      description: postDescription
    };
    try {
      if (postTitle === "" || postDescription === "") return
      const newPost : any = await API.graphql(graphqlOperation(createPost, {input: postDetails}))
      setPostTitle("")
      setPostDescription("")
      console.log(newPost.data.createPost.id)
    } catch (err) {
      console.log('error creating post:', err)
    }
  }

  return(
    <React.Fragment>
      <input
        type="text"
        value={postTitle}
        placeholder={"post title"}
        onChange={e => setPostTitle(e.target.value)}
      />
      <input
        type="text"
        value={postDescription}
        placeholder={"post description"}
        onChange={e => setPostDescription(e.target.value)}
      />
      <button
        onClick={addPost}
      >
        submit
      </button>

    </React.Fragment>
  )
}

export default CreatePost;
