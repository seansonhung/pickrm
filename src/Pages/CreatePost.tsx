import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createPost } from '../graphql/mutations';
import TextField from '@material-ui/core/TextField';
import { RouteComponentProps } from '@reach/router';
import PostCreated from '../components/createPost/PostCreated';
import { Grid, Paper } from '@material-ui/core';

interface CreatePost extends RouteComponentProps {

}

const CreatePost: React.FC<CreatePost> = () => {
  const [postTitle, setPostTitle] = useState("")
  const [postDescription, setPostDescription] = useState("")
  const [postDays, setPostDays] = useState(0)
  const [postHours, setPostHours] = useState(1)
  const [postMinutes, setPostMinutes] = useState(0)
  const [created, setCreated] = useState("")

  async function addPost() {
    const postDetails = {
      title: postTitle,
      description: postDescription,
      expiredDate: new Date(Date.now() + postDays*24*60*60*1000 + postHours*60*60*1000 + postMinutes*60*1000),
    };
    try {
      if (postTitle === "" || postDescription === "") return
      const newPost : any = await API.graphql(graphqlOperation(createPost, {input: postDetails}))
      setPostTitle("")
      setPostDescription("")
      setPostDays(0)
      setPostHours(1)
      setPostMinutes(0)
      setCreated(newPost.data.createPost.id)
    } catch (err) {
      console.log('error creating post:', err)
    }
  }

  return(
    <React.Fragment>
      <Grid container spacing={4}>
        <TextField
          label="Title"
          type="text"
          value={postTitle}
          placeholder={"post title"}
          onChange={e => setPostTitle(e.target.value)}
        />
        <TextField
          label="Description"
          type="text"
          value={postDescription}
          placeholder={"post description"}
          onChange={e => setPostDescription(e.target.value)}
        />
        <TextField
          label="Days"
          type="number"
          value={postDays}
          onChange={e => setPostDays(parseInt(e.target.value))}
        />
        <TextField
          label="Hours"
          type="number"
          value={postHours}
          onChange={e => setPostHours(parseInt(e.target.value))}
        />
        <TextField
          label="Minutes"
          type="number"
          value={postMinutes}
          onChange={e => setPostMinutes(parseInt(e.target.value))}
        />
        <button
          onClick={addPost}
        >
          submit
        </button>
      </Grid>

      {created !== ""? 
        <PostCreated
          pid={created}
        />
        : ""
      }

    </React.Fragment>
  )
}

export default CreatePost;
