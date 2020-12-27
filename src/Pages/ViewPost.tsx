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
  const [render, setRender] = useState(false);

  let seconds = (new Date (post.expiredDate).valueOf() - Date.now()) / 1000;

  useEffect(() => {
    fetchPost()
  }, [render])

  async function fetchPost() {
    try {
      const postData : any = await API.graphql(graphqlOperation(getPost, {id: pid}))
      if (postData.data.getPost.winningEntrie != null){
        setPostExpired(true);
      }
      await setPost(postData.data.getPost);
      await setPostEntries(Array());
      await setPostEntries(postEntries => [...postEntries, postData.data.getPost.entries.items]);
      console.log("fetch post ", postData)
      console.log("fetch entries", postEntries)
    } catch (err) { console.log('error fetching post') }
  }

  //re-render function, will be called to update update the data
  //when a new entry is added or a winner has been chosen.
  function refresh(){
    console.log("refresh")
    setRender(!render)
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
            {!isNaN(seconds) && !postExpired? 
            <CountDown
              refresh={refresh}
              pid={pid}
              seconds={seconds}
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
              refresh={refresh}
            />
          </Paper>
        }
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default ViewPost;
