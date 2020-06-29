import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getPost } from '../graphql/queries'
import { RouteComponentProps } from '@reach/router';
import CreateEntry from '../components/viewPost/CreateEntry';
import PostDetails from '../components/viewPost/PostDetails';
import { Grid, Paper } from '@material-ui/core';

interface ViewPostProps extends RouteComponentProps {
  pid?: string;
}
const ViewPost : React.FC<ViewPostProps> = ({ pid }) => {
  const [post, setPost] = useState({title:'', description:'', expiredDate:''})
  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost() {
    try {
      console.log(pid);
      const postData : any = await API.graphql(graphqlOperation(getPost, {id: pid}))
      console.log(postData)
      setPost(postData.data.getPost)
    } catch (err) { console.log('error fetching post') }
  }

  return(
    <React.Fragment>
      <Grid container spacing={4}>
        {/* Post Details */}
        <Grid item xs={12} md={7} lg={7}>
          <Paper>
            <PostDetails
              postTitle={post.title}
              postDescription={post.description}
              postExpiredDate={new Date (post.expiredDate)}
            />
          </Paper>
        </Grid>
        {/* Post Entries Actions */}
        <Grid item xs={12} md={5} lg={5}>
          <Paper>
            <CreateEntry 
              pid={pid}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ViewPost;
