import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getPost } from '../graphql/queries'
import { RouteComponentProps } from '@reach/router';
import CreateEntry from '../components/viewPost/CreateEntry';
import PostDetails from '../components/viewPost/PostDetails';
import ExpiredEntry from '../components/viewPost/ExpiredEntry';
import { Grid, Paper } from '@material-ui/core';
import CountDown from '../components/viewPost/Countdown';

interface ViewPostProps extends RouteComponentProps {
  pid?: string;
}
const ViewPost : React.FC<ViewPostProps> = ({ pid }) => {
  const [post, setPost] = useState({title:'', description:'', expiredDate:'', winningEntrie:''})
  const [postEntries, setPostEntries] =  useState(Array());
  const [postExpired, setPostExpired] = useState(false);

  let seconds = (new Date (post.expiredDate).valueOf() - Date.now()) / 1000;

  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost() {
    try {
      const postData : any = await API.graphql(graphqlOperation(getPost, {id: pid}))
      if (postData.data.getPost.winningEntrie != null){
        setPostExpired(true);
      }
      setPost(postData.data.getPost);

      setPostEntries(postEntries => [...postEntries, postData.data.getPost.entries.items]);
      console.log("fetch post entries ", postData)
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
              winningEntry = {post.winningEntrie}
            />
            {!isNaN(seconds)? 
            <CountDown
              pid={pid}
              seconds={seconds}
              winningEntry={post.winningEntrie}
              entries = {postEntries}
            />
            : ""}
          </Paper>
        </Grid>
        {/* Post Entries Actions */}
        <Grid item xs={12} md={5} lg={5}>
        {postExpired 
        ?
          <Paper>
            <ExpiredEntry/>
          </Paper>
        :
          <Paper>
            <CreateEntry 
              pid={pid}
            />
          </Paper>
        }
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ViewPost;
