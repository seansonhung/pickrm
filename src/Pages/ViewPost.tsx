import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { getPost } from '../graphql/queries'
import { RouteComponentProps } from '@reach/router';
import CreateEntry from '../components/viewPost/CreateEntry';

interface ViewPostProps extends RouteComponentProps {
  pid?: string;
}
const ViewPost : React.FC<ViewPostProps> = ({ pid }) => {
  const [post, setPost] = useState({title:'', description:''})
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
      <input
        type="text"
        placeholder={post.title}
      />
      <input
        type="text"
        placeholder={post.description}
      />
      <CreateEntry 
        pid={pid}
      />
    </React.Fragment>
  )
}

export default ViewPost;
