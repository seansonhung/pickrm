import React from 'react';
import { Router } from '@reach/router';
import CreatePost from './CreatePost';
import ViewPost from './ViewPost';
import NotFoundPage from './404';
import Layout from './layout/Layout'

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <CreatePost path="/create" />
        <ViewPost path="/view/:pid" />
        <NotFoundPage default />
      </Router>
    </Layout>
  )
}

export default App;
